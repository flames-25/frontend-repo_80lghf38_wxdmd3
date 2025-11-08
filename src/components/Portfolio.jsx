export default function Portfolio() {
  const projects = [
    {
      title: 'Nimbus AI Platform',
      desc: 'Marketing website and app UI for an AI startup with interactive 3D moments.',
      tag: 'AI / SaaS',
      color: 'from-cyan-500/20 to-fuchsia-500/20',
    },
    {
      title: 'Volt Grid Dashboard',
      desc: 'Real-time analytics dashboard with complex data visualizations.',
      tag: 'Energy / Data',
      color: 'from-emerald-500/20 to-cyan-500/20',
    },
    {
      title: 'Helix Bio Portal',
      desc: 'Clean, accessible portal for clinical trial participants.',
      tag: 'Healthcare',
      color: 'from-violet-500/20 to-indigo-500/20',
    },
    {
      title: 'QuantaX Studio',
      desc: 'High-converting marketing site with motion and 3D product shots.',
      tag: 'Data / Marketing',
      color: 'from-rose-500/20 to-amber-500/20',
    },
  ];

  return (
    <section id="portfolio" className="relative z-10 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-3 text-slate-700">A selection of recent projects and partnerships.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1">
              <div className={`h-32 w-full bg-gradient-to-r ${p.color}`} aria-hidden />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-slate-500">{p.tag}</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-6 inline-block rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white">View case study</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
