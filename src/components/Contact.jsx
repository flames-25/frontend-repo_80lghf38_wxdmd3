import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#07070a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something great</h2>
          <p className="mt-3 text-white/70">Tell us about your goals, timeline, and budget — we’ll come back with a plan within 24 hours.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/70">Full name</label>
                <input type="text" placeholder="John Davidoff" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Company</label>
                <input type="text" placeholder="Davidoff Media" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" placeholder="hello@company.com" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70">Project details</label>
                <textarea rows="4" placeholder="Tell us about your idea..." className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-3 font-semibold text-white">
              Send request
            </button>
            <p className="mt-3 text-center text-xs text-white/50">We’re based in New York, United States.</p>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><MapPin size={18} /></div>
              <div>
                <div className="text-white">New York, United States</div>
                <div className="text-sm text-white/60">Global clients, remote-first</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><Mail size={18} /></div>
              <div>
                <a href="mailto:hello@davidoffmedia.com" className="text-white hover:underline">hello@davidoffmedia.com</a>
                <div className="text-sm text-white/60">Prefer email? Same-day response</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><Phone size={18} /></div>
              <div>
                <a href="tel:+12125550123" className="text-white hover:underline">+1 (212) 555-0123</a>
                <div className="text-sm text-white/60">Mon–Fri, 9am–6pm EST</div>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-6">
              <div className="text-sm uppercase tracking-wider text-white/60">Why Davidoff Media</div>
              <ul className="mt-3 grid gap-2 text-white/80">
                <li>• Senior team across design, engineering, and growth</li>
                <li>• Rapid sprints with transparent scope</li>
                <li>• Measurable outcomes and ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
