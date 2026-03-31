"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function parseValue(valueCN: string): { num: number; suffix: string } {
  const match = valueCN.match(/^(\d+)(.*)$/);
  if (match) {
    return { num: parseInt(match[1], 10), suffix: match[2] };
  }
  return { num: 0, suffix: valueCN };
}

function AnimatedStat({ valueCN, labelCN, labelEN }: (typeof STATS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { num, suffix } = parseValue(valueCN);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // ms
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * num));

      if (current >= steps) {
        setCount(num);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, num]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-white">
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="text-white/70 text-sm font-heading mt-1">
        {labelCN} · {labelEN}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-10 lg:-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-primary-dark rounded-2xl shadow-xl py-10 px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.valueCN} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
