import React from 'react';
import { Activity, Heart, Timer, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Live Heart Insights',
    desc: 'Continuous heart-rate monitoring with instant recovery scoring and zone guidance.',
  },
  {
    icon: Activity,
    title: 'Adaptive Training',
    desc: 'AI-adjusted goals that adapt to your readiness, sleep, and daily movement.',
  },
  {
    icon: Timer,
    title: 'Micro-Workouts',
    desc: 'Stack quick, effective sessions that fit into any schedule and still move the needle.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Your data is end-to-end encrypted and always under your control.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#080a0f] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(40%_40%_at_10%_10%,rgba(56,189,248,0.15),rgba(8,10,15,0)_60%),radial-gradient(30%_30%_at_90%_20%,rgba(59,130,246,0.12),rgba(8,10,15,0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Designed for momentum
          </h2>
          <p className="mt-3 text-white/60">
            Beautifully simple tools that keep you moving forward — one session at a time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-sky-400/10" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-500/20 p-3 text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
