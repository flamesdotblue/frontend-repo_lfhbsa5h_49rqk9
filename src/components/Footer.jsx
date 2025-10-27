export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">TrunkAI</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Nature-inspired AI for resilient businesses.</p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <a href="mailto:hello@trunkai.com" className="hover:text-emerald-600 dark:hover:text-emerald-400">hello@trunkai.com</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} TrunkAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
