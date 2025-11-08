import { Rocket, Shield, Code, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product & Web Development',
    desc: 'High-performance websites and web apps built with modern stacks, optimized for conversions and SEO.'
  },
  {
    icon: Code,
    title: 'Interactive 3D & Motion',
    desc: 'Immersive 3D experiences and micro-interactions using WebGL and motion design to elevate brand storytelling.'
  },
  {
    icon: Shield,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure, CI/CD, and automated testing to keep your product secure and reliable.'
  },
  {
    icon: LineChart,
    title: 'Growth & Analytics',
    desc: 'Data-driven optimization with analytics, A/B testing, and growth experiments to accelerate impact.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-white/70">A full-stack team delivering from strategy to ship.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-6 h-1 w-0 rounded bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
