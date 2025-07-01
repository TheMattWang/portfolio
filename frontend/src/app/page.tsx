import { Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-stone-50">
      <section className="h-screen flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] relative mb-8 rounded-full overflow-hidden border-4 border-stone-200">
          <Image
            src="/pic.JPG"
            alt="Matthew Wang"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="font-display text-[clamp(2.2rem,7vw,3.5rem)] font-bold text-stone-900 mb-4">
          Hi, I'm <span className="text-primary">Matthew Wang</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-prose text-stone-600">
          Runner · Reader · Writer · Explorer
        </p>

        {/* Contact strip */}
        <div className="flex gap-6">
          <a href="mailto:mat.wang25@gmail.com" aria-label="Email" className="text-stone-600 hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://github.com/TheMattWang" aria-label="GitHub" className="text-stone-600 hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/maw2025" aria-label="LinkedIn" className="text-stone-600 hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </section>
    </main>
  )
}
