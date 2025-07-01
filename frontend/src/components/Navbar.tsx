"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(250, 250, 249, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none',
      }}
      className="sticky top-0 z-50 w-full transition-all duration-200"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium text-stone-900">
            Matthew Wang
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="sm:hidden p-2 text-stone-500 hover:text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:gap-8">
            <Link href="/experiences" className="text-stone-500 hover:text-stone-900 transition-colors">
              Experiences
            </Link>
            <Link href="/papers" className="text-stone-500 hover:text-stone-900 transition-colors">
              Papers
            </Link>
            <Link href="/projects" className="text-stone-500 hover:text-stone-900 transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-stone-500 hover:text-stone-900 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-stone-200">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/experiences"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Experiences
            </Link>
            <Link
              href="/papers"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Papers
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
