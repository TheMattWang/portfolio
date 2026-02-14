"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

const HEART_COUNT = 24

export function ForYouContent() {
  const [saidYes, setSaidYes] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  const handleYes = () => {
    setSaidYes(true)
    setShowHearts(true)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("valentine-said-yes", "true")
      } catch {
        // ignore
      }
    }
    setTimeout(() => setShowHearts(false), 4000)
  }

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-4 py-16 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {showHearts &&
          Array.from({ length: HEART_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary pointer-events-none"
              initial={{
                opacity: 0.9,
                scale: 0.3,
                x: (i % 5) * 80 - 160 + Math.random() * 40,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.2,
                y: -400 - Math.random() * 200,
                x: (i % 5) * 80 - 160 + (Math.random() - 0.5) * 80,
              }}
              transition={{
                duration: 2.5 + Math.random() * 1,
                ease: "easeOut",
              }}
              style={{ left: "50%", top: "50%" }}
            >
              <Heart className="w-8 h-8 fill-primary" />
            </motion.div>
          ))}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="max-w-lg mx-auto"
          >
            <p className="text-stone-600 mb-6 text-lg">
              You found the secret. This one&apos;s for you.
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-10">
              Will you be my Valentine?
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                type="button"
                onClick={handleYes}
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg shadow-sm hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Yes
              </motion.button>
              <motion.button
                type="button"
                onClick={handleYes}
                className="px-8 py-4 rounded-lg border-2 border-stone-300 text-stone-700 font-medium text-lg hover:border-primary hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Of course
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="max-w-lg mx-auto"
          >
            <p className="text-2xl sm:text-3xl font-display font-bold text-primary mb-4">
              You made my day.
            </p>
            <p className="text-stone-600 text-lg">Happy Valentine&apos;s Day.</p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Heart className="w-16 h-16 mx-auto text-primary fill-primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
