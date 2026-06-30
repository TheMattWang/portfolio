import { NextResponse } from 'next/server'

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY

// Lightweight email shape + length guard (Buttondown does full validation).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LEN = 254

// Best-effort in-memory rate limit (per IP). NOTE: on serverless (Vercel) this is
// per-instance and resets on cold starts — adequate to blunt naive abuse loops, but
// for robust limiting move this to Upstash / Vercel KV.
const WINDOW_MS = 60_000
const MAX_REQ_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t: number) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  // Bound memory: occasionally drop stale entries (forEach avoids downlevel iteration).
  if (hits.size > 10_000) {
    hits.forEach((times: number[], key: string) => {
      if (times.every((t: number) => now - t >= WINDOW_MS)) hits.delete(key)
    })
  }
  return recent.length > MAX_REQ_PER_WINDOW
}

export async function POST(request: Request) {
  if (!BUTTONDOWN_API_KEY) {
    return NextResponse.json({ error: 'Subscription is not configured' }, { status: 503 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  let email: unknown
  try {
    ;({ email } = await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (typeof email !== 'string' || email.length > MAX_EMAIL_LEN || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      // Do not forward upstream error details to the client.
      return NextResponse.json({ error: 'Unable to subscribe at this time' }, { status: 502 })
    }

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
