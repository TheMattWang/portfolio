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
            Portfolio
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
            <Link href="/work" className="text-stone-500 hover:text-stone-900 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-stone-500 hover:text-stone-900 transition-colors">
              About
            </Link>
            <Link href="/skills" className="text-stone-500 hover:text-stone-900 transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="text-stone-500 hover:text-stone-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-stone-200">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/work"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/skills"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-base text-stone-500 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
