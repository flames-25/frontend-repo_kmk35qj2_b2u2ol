import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            AI-Powered Smart Farming Assistant
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Grow smarter with AgroMind
          </h1>
          <p className="mt-4 max-w-xl text-gray-300">
            Diagnose crop diseases, get smart crop suggestions, track field activities, and chat with experts — all in one place.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-emerald-950 hover:bg-emerald-400">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-gray-200 hover:border-white/20 hover:bg-white/5">
              Live Demo
            </a>
          </div>
        </div>
        <div className="h-[360px] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/5nQzLrT5h1zQxZs6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
