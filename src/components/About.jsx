export default function About() {
  return (
    <section id="about" className="relative z-10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-gradient-to-r from-cyan-500/15 to-fuchsia-500/15 px-3 py-1 text-xs font-medium text-cyan-700">About Davidoff Media</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">A technology-first creative partner based in New York</h2>
            <p className="mt-4 text-slate-700">We help ambitious companies design and build digital products that perform — from interactive websites to scalable web apps. Our team blends engineering rigor with brand craft to create experiences that look beautiful and move the needle.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">10+ </div>
                <div className="text-sm text-slate-600">Years combined experience</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">50+ </div>
                <div className="text-sm text-slate-600">Projects shipped</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">24h </div>
                <div className="text-sm text-slate-600">Average response time</div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-fuchsia-50 p-6 shadow-sm">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/20 blur-3xl" aria-hidden />
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900">Our approach</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Strategy → Design → Build → Grow — one integrated team</li>
                  <li>• Rapid sprints with transparent communication</li>
                  <li>• Performance, accessibility, and SEO as first-class citizens</li>
                  <li>• Interactive 3D where it enhances the story</li>
                </ul>
                <div className="mt-6 rounded-xl bg-white p-4 text-sm text-slate-600 ring-1 ring-slate-200">Headquartered in New York, serving clients globally.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
