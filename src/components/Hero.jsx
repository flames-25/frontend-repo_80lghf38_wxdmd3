import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0" aria-hidden>
        <Spline 
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          New York • United States
        </div>
        <h1 className="mt-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Building Digital Experiences
          <br className="hidden sm:block" />
          for Ambitious Brands
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Davidoff Media is a technology-first creative studio crafting performant websites, apps, and content with stunning interactive 3D moments.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#services" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]">
            Our Services
          </a>
          <a href="#contact" className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
