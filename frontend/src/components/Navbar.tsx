"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { href: "/experiences", label: "Experiences" },
    { href: "/papers", label: "Papers" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ]

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
            className="sm:hidden p-2 text-stone-500 hover:text-stone-900 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-500 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm sm:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-stone-50 shadow-lg sm:hidden z-40"
            >
              <div className="flex flex-col p-6 space-y-4 mt-16">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-stone-500 hover:text-stone-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
