import { Leaf, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="inline-flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-xl tracking-tight">TrunkAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Solutions</a>
            <a href="#contact" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              <Mail className="h-4 w-4" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
