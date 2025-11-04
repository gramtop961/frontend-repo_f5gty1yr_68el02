import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Activity, Heart, Timer } from 'lucide-react';

export default function AppShowcase() {
  return (
    <section className="relative w-full bg-[#05070b] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_70%_40%,rgba(14,165,233,0.15),rgba(5,7,11,0)_60%),radial-gradient(40%_40%_at_20%_80%,rgba(99,102,241,0.15),rgba(5,7,11,0)_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Flame className="h-4 w-4 text-sky-300" />
            Live performance snapshot
          </div>
          <h2 className="mt-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            See your progress at a glance
          </h2>
          <p className="mt-3 max-w-md text-white/60">
            A focused mobile view that highlights what matters most right now: heart rate, active minutes, and recovery — updated in real time.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Phone frame */}
          <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-3 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#0b0f17] p-4">
              {/* Notch */}
              <div className="mx-auto mb-3 h-5 w-28 rounded-b-2xl bg-black/40" />

              {/* Live Tiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-sky-500/20 to-sky-500/5 p-4">
                  <div className="flex items-center justify-between text-sky-300">
                    <Activity className="h-4 w-4" />
                    <span className="text-xs">Now</span>
                  </div>
                  <div className="mt-2 text-3xl font-bold">132</div>
                  <div className="text-xs text-white/60">BPM • Zone 3</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 p-4">
                  <div className="flex items-center justify-between text-emerald-300">
                    <Timer className="h-4 w-4" />
                    <span className="text-xs">Today</span>
                  </div>
                  <div className="mt-2 text-3xl font-bold">48</div>
                  <div className="text-xs text-white/60">Active mins</div>
                </div>
                <div className="col-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/10 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-200">
                    <Heart className="h-4 w-4" />
                    Recovery score
                  </div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-4xl font-bold">86</div>
                    <span className="mb-1 text-xs text-white/60">Well-recovered</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[86%] bg-gradient-to-r from-fuchsia-400 to-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-white/60">
                <div className="rounded-lg border border-white/10 bg-white/5 py-2">Feed</div>
                <div className="rounded-lg border border-white/10 bg-white/10 py-2 text-white">Live</div>
                <div className="rounded-lg border border-white/10 bg-white/5 py-2">Profile</div>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-sky-400/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
