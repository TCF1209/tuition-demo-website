"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((p) => (p - 1 + total) % total);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-dark-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-cn-serif text-3xl text-white md:text-4xl">
            学生与家长评价
          </h2>
          <p className="mt-2 font-heading text-primary-teal">What They Say</p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-2xl">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Card */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161B22] p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Quote icon */}
                <div className="mb-6 font-display text-5xl text-primary-teal/40">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* CN Quote */}
                <p className="mb-4 font-cn-serif text-lg leading-relaxed text-white/90 italic md:text-xl">
                  &ldquo;{t.quoteCN}&rdquo;
                </p>

                {/* EN Quote */}
                <p className="mb-8 text-sm leading-relaxed text-white/50 italic">
                  &ldquo;{t.quoteEN}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-teal/20 font-heading text-lg font-bold text-primary-teal">
                    {t.initial}
                  </div>
                  <p className="font-heading font-semibold text-white">
                    {t.nameCN} &middot; {t.nameEN}
                  </p>
                  <p className="text-sm text-primary-teal/70">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + counter */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary-teal"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-white/40 font-heading">
              {current + 1} / {total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
