import React from 'react';
import Spline from '@splinetool/react-spline';
import { Activity, Flame, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0d12] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0d12]/40 via-[#0a0d12]/50 to-[#0a0d12]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_10%_50%,rgba(0,140,255,0.25),rgba(10,13,18,0)_60%),radial-gradient(40%_40%_at_80%_20%,rgba(0,255,200,0.15),rgba(10,13,18,0)_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Flame className="h-4 w-4 text-sky-300" />
          <span className="text-xs font-medium text-sky-100/90">Futuristic Fitness Tracking</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Track smarter. Train harder. Feel unstoppable.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Real-time heart insights, adaptive goals, and beautifully simple analytics — all in a sleek, science-driven mobile experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(14,165,233,0.8)] transition hover:scale-[1.02] hover:bg-sky-400"
          >
            <Smartphone className="h-4 w-4" />
            Get the App
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Activity className="h-4 w-4" />
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
