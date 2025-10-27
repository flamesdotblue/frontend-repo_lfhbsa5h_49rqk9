import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-900/20 dark:via-zinc-950 dark:to-zinc-950" aria-hidden="true" />
      <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
              Rooted in nature. Built for the future.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              TrunkAI
            </h1>
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-prose">
              We design AI systems that grow with your business like living ecosystems—resilient, adaptive, and sustainable. Harness cutting-edge models with a thoughtful approach to impact and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Explore our solutions
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-emerald-600/20 p-[1px]">
              <div className="h-full w-full rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-5xl">🌿</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Nature x Technology</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Seamless intelligence rooted in sustainable design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
