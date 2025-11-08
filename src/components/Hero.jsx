import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  // Bright, tech-forward city/abstracts for a light, modern feel
  'https://images.unsplash.com/photo-1526403226206-b3e38826f2c3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=2070&auto=format&fit=crop',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const safeSlides = useMemo(() => slides.filter(Boolean), []);

  useEffect(() => {
    if (paused || safeSlides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, safeSlides.length]);

  const next = () => setIndex((i) => (i + 1) % safeSlides.length);
  const prev = () => setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24 sm:pt-28" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Slider background */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.img
            key={safeSlides[index]}
            src={safeSlides[index]}
            alt="Background slide"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        {/* Veil for readability on any image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/10" />
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Building Digital Experiences
          <br className="hidden sm:block" />
          for Ambitious Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          Davidoff Media is a technology-first creative studio crafting performant websites, apps, and content with beautiful interactive moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 backdrop-blur hover:bg-white"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? 'bg-slate-800' : 'bg-slate-400/50 hover:bg-slate-500/80'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next slide"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 backdrop-blur hover:bg-white"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
