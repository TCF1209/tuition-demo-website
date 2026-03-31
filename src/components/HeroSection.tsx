"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function GeometricRings({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative w-full h-full">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary-teal/30 animate-[spin_20s_linear_infinite]" />
        {/* Middle ring */}
        <div className="absolute inset-8 rounded-full border-2 border-primary-teal/50 animate-[spin_15s_linear_infinite_reverse]" />
        {/* Inner ring */}
        <div className="absolute inset-16 rounded-full border-2 border-primary-teal/70 animate-[spin_10s_linear_infinite]" />
        {/* Central glow dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary-teal/80 shadow-[0_0_60px_20px_rgba(42,191,170,0.4)] animate-glow-pulse" />
        </div>
        {/* Floating accent circles */}
        <div className="absolute top-4 right-8 w-8 h-8 rounded-full bg-primary-teal/20 shadow-[0_0_20px_4px_rgba(42,191,170,0.3)] animate-float" />
        <div
          className="absolute bottom-12 left-4 w-6 h-6 rounded-full bg-accent-lime/30 shadow-[0_0_16px_4px_rgba(200,240,0,0.2)] animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 left-0 w-4 h-4 rounded-full bg-primary-teal/40 shadow-[0_0_12px_2px_rgba(42,191,170,0.3)] animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Hexagon decorative */}
        <svg
          className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,10 178,55 178,145 100,190 22,145 22,55"
            stroke="rgba(42,191,170,0.2)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-dark-bg grain-overlay overflow-hidden">
      {/* Mesh gradient background */}
      <div className="mesh-gradient animate-mesh-breathe absolute inset-0" />

      {/* Geometric rings — mobile: background behind text, desktop: side column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
        aria-hidden="true"
      >
        {/* Mobile: centered background rings */}
        <GeometricRings className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-30 lg:hidden" />
        {/* Desktop: right column rings */}
        <GeometricRings className="hidden lg:block absolute right-8 xl:right-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-100" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 max-w-2xl"
        >
          {/* CN Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
          >
            成绩提升，从这里开始
          </motion.h1>

          {/* EN Subheading */}
          <motion.p
            variants={fadeUp}
            className="font-heading text-lg sm:text-xl text-primary-teal/80"
          >
            Where Results Begin
          </motion.p>

          {/* Body */}
          <motion.p variants={fadeUp} className="text-white/70 text-base sm:text-lg">
            专为独中生设计 · 初一至高三 · 小班精英教学
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href={buildWhatsAppLink("您好！我想了解满汉全习的课程。\nHi! I'd like to learn more about MH Learning Centre.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-teal text-white font-heading font-semibold rounded-lg px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(42,191,170,0.5)] hover:scale-105"
            >
              📲 WhatsApp 立即咨询
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center border border-white/30 text-white font-heading font-semibold rounded-lg px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:border-white/60 hover:bg-white/5"
            >
              了解课程 →
            </Link>
          </motion.div>

          {/* Floating badge */}
          <motion.div variants={fadeUp} className="mt-2">
            <span className="inline-block -rotate-3 animate-float bg-accent-lime text-dark-bg font-heading font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
              独中专属 初一至高三
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
      </div>
    </section>
  );
}
