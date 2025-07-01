import { NextResponse } from 'next/server'

// TODO(Matt): Replace with your Buttondown API key
const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY

export async function POST(request: Request) {
  if (!BUTTONDOWN_API_KEY) {
    return NextResponse.json(
      { error: 'Buttondown API key is not configured' },
      { status: 500 }
    )
  }

  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Failed to subscribe' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 