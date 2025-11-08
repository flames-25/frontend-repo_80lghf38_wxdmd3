import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#07070a] py-10 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} Davidoff Media. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}
