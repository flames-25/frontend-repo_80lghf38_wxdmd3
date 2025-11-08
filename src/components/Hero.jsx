import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24 sm:pt-28">
      {/* 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Light gradient veil for readability without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs text-slate-600 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
          New York • United States
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Building Digital Experiences
          <br className="hidden sm:block" />
          for Ambitious Brands
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          Davidoff Media is a technology-first creative studio crafting performant websites, apps, and content with stunning interactive 3D moments.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#services"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.02]"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Subtle floating accents for motion richness */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-6 top-28 hidden rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-xs text-slate-600 backdrop-blur sm:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        Interactive 3D • Realtime
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-6 hidden rounded-full bg-gradient-to-r from-cyan-400/30 to-fuchsia-400/30 p-3 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 opacity-70" />
      </motion.div>
    </section>
  );
}
