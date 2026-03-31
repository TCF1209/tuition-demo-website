"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[340px] shrink-0 rounded-xl border-l-4 border-primary-teal bg-[#161B22] p-6">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, si) => (
          <Star
            key={si}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quotes */}
      <p className="mb-3 font-cn-serif text-sm leading-relaxed text-white/90">
        &ldquo;{t.quoteCN}&rdquo;
      </p>
      <p className="mb-4 text-sm italic text-white/60">
        &ldquo;{t.quoteEN}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal/20 font-heading font-bold text-primary-teal">
          {t.initial}
        </div>
        <div>
          <p className="font-heading text-sm text-white">
            {t.nameCN} &middot; {t.nameEN}
          </p>
          <p className="text-xs text-white/50">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate cards for seamless infinite loop
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-dark-bg py-20 overflow-hidden">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="font-cn-serif text-3xl text-white md:text-4xl">
          学生与家长评价
        </h2>
        <p className="mt-2 font-heading text-primary-teal">What They Say</p>
      </div>

      {/* Marquee container */}
      <div className="relative group">
        {/* Left/right fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-dark-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-dark-bg to-transparent" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.nameEN}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
