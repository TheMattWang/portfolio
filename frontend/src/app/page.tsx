import { Mail, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="min-h-[75vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-[clamp(2.2rem,7vw,3.5rem)] font-bold text-stone-900 mb-4">
          Hi, I'm <span className="text-maroon-500">Matthew Wang</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-prose text-stone-600">
          Runner · Reader · Writer · Explorer
        </p>

        {/* Contact strip */}
        <div className="flex gap-6">
          <a href="mailto:mat.wang25@gmail.com" aria-label="Email" className="text-stone-600 hover:text-maroon-500 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://github.com/TheMattWang" aria-label="GitHub" className="text-stone-600 hover:text-maroon-500 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/maw2025" aria-label="LinkedIn" className="text-stone-600 hover:text-maroon-500 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </section>
    </main>
  )
}
