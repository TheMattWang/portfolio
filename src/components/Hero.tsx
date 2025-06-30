"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "circOut"
    }
  }
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="relative isolate overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <motion.div variants={stagger} className="text-center">
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Crafting Digital Experiences That Matter
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-[40ch] mx-auto"
          >
            Product designer specializing in intuitive interfaces and meaningful interactions for brands that value quality.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Link
              href="/work"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral-500 to-sunflower-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-coral-400 hover:to-sunflower-400"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group rounded-full px-6 py-3 text-sm font-semibold transition ring-1 ring-border hover:ring-coral-500 hover:text-coral-500"
            >
              Get in touch
              <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-coral-500 to-sunflower-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </motion.section>
  );
} 