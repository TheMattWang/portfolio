import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-coral-500 to-coral-700">
              Hey, I&apos;m Matt Wang 👋
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I&apos;m a software engineer passionate about building beautiful, user-centric web applications.
              Currently focused on modern web technologies like React, Next.js, and TypeScript.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link
                href="/projects"
                className="group rounded-full bg-coral-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral-400"
              >
                View My Work
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group rounded-full px-4 py-2 text-sm font-semibold transition ring-1 ring-border hover:ring-coral-500 hover:text-coral-500"
              >
                Get in Touch
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-coral-500 to-coral-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Featured section - you can add more sections here */}
    </>
  );
}
