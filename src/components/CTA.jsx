import React from 'react';
import { Star, Download, Smartphone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="relative w-full bg-[#070a0f] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.14),rgba(7,10,15,0)_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 text-center shadow-xl backdrop-blur">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Star className="h-4 w-4 text-yellow-300" />
            Join thousands leveling up their health
          </div>
          <h3 className="mt-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            Ready to feel unstoppable?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-white/60">
            Download the app and start your first week free. No ads. No noise. Just progress.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(14,165,233,0.8)] transition hover:scale-[1.02] hover:bg-sky-400">
              <Download className="h-4 w-4" />
              Download for iOS
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              <Smartphone className="h-4 w-4" />
              Download for Android
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
