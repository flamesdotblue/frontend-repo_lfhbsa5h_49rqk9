import { Cpu, Leaf, Rocket, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Intelligence',
    desc: 'Energy-aware AI pipelines designed to minimize compute while maximizing impact.',
  },
  {
    icon: Cpu,
    title: 'Edge-to-Cloud AI',
    desc: 'Deploy models where they matter most—from tiny devices to scalable cloud native services.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Privacy-first data practices, guardrails, and monitoring baked into every solution.',
  },
  {
    icon: Rocket,
    title: 'Launch-Ready Delivery',
    desc: 'From prototype to production with MLOps, evals, and continuous improvement loops.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Solutions that grow with you</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            We help you identify high-leverage opportunities for AI, then design and deploy systems that deliver measurable value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
