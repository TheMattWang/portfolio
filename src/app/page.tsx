import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
    </main>
  )
}
