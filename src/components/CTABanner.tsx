"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-primary-teal to-primary-dark py-20"
    >
      <motion.div
        className="max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-cn-serif text-3xl md:text-4xl text-white">
          准备好了吗？
        </h2>

        <p className="font-heading text-xl text-white/80 mt-4">
          Ready to get started?
        </p>

        <motion.a
          href={buildWhatsAppLink("您好！我想了解满汉全习的课程。\nHi! I'd like to learn more about MH Learning Centre.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-bg text-white font-heading px-8 py-4 rounded-lg mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          📲 WhatsApp 联系我们
        </motion.a>
      </motion.div>
    </section>
  );
}
