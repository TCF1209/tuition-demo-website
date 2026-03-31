"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-dark-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-cn-serif text-3xl text-white md:text-4xl">
            学生与家长评价
          </h2>
          <p className="mt-2 font-heading text-primary-teal">What They Say</p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={t.nameEN}
                initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: fromLeft ? -40 : 40 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-xl border-l-4 border-primary-teal bg-[#161B22] p-6"
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
