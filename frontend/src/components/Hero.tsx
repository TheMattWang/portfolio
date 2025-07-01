"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : 20}px)`,
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
        }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl font-medium text-stone-900 sm:text-6xl mb-6">
          Crafting Digital Experiences That Matter
        </h1>

        <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
          Product designer specializing in intuitive interfaces and meaningful interactions for brands that value
          quality.
        </p>

        <Link
          href="/projects"
          className="inline-block bg-maroon-500 text-white px-6 py-3 rounded-md hover:bg-maroon-600 transition-colors"
        >
          View my projects
        </Link>
      </div>
    </section>
  )
}
