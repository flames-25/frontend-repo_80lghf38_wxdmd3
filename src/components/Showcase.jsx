export default function Showcase() {
  const clients = [
    { name: 'Apex Labs', tag: 'Fintech' },
    { name: 'Nimbus AI', tag: 'AI' },
    { name: 'Volt Grid', tag: 'Energy' },
    { name: 'Helix Bio', tag: 'Healthcare' },
    { name: 'QuantaX', tag: 'Data' },
    { name: 'Stratos', tag: 'SaaS' },
  ];

  return (
    <section className="relative z-10 bg-gradient-to-b from-black to-[#07070a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-3 max-w-xl text-white/70">A glimpse at products our team helped design, build, and scale.</p>
          </div>
          <a href="#contact" className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:bg-white/10">Request case studies</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <div key={c.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/20 blur-2xl" aria-hidden />
              <div className="flex h-36 items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">{c.tag}</div>
                  <div className="mt-1 text-xl font-semibold text-white">{c.name}</div>
                </div>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-80 transition group-hover:scale-110" />
              </div>
              <div className="mt-4 text-sm text-white/70">Responsive web platform with realtime features, analytics, and sleek brand visuals.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
