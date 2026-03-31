"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SUBJECTS } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const tabs = [
  { id: "lower" as const, labelCN: "初中", labelEN: "Lower Sec" },
  { id: "upper" as const, labelCN: "高中", labelEN: "Upper Sec" },
];

export function CoursesPreview() {
  const [activeTab, setActiveTab] = useState<"lower" | "upper">("lower");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = SUBJECTS.filter(
    (s) => s.level === activeTab || s.level === "both"
  ).slice(0, 4);

  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-cn-serif text-3xl text-text-primary md:text-4xl">
            我们的课程
          </h2>
          <p className="mt-2 font-heading text-text-muted">Our Courses</p>
        </div>

        {/* Tab Switcher */}
        <div className="mb-8 flex items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-2 font-heading text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-primary-teal text-white"
                  : "border border-gray-200 bg-white text-text-muted hover:border-primary-teal/40"
              }`}
            >
              {tab.labelCN} {tab.labelEN}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filtered.map((subject, i) => (
            <motion.div
              key={`${activeTab}-${subject.nameEN}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px -8px rgba(42,191,170,0.25)",
              }}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <span className="mb-3 text-3xl">{subject.icon}</span>

              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {subject.nameCN}
              </h3>
              <p className="font-heading text-sm text-primary-teal">
                {subject.nameEN}
              </p>

              <span className="mt-2 inline-block w-fit rounded-full bg-primary-teal/10 px-2 py-1 font-heading text-xs text-primary-teal">
                {subject.level === "both"
                  ? "初中 & 高中"
                  : subject.level === "lower"
                    ? "初中"
                    : "高中"}
              </span>

              <p className="mt-2 flex-1 text-sm text-text-muted">
                {subject.description}
              </p>

              <a
                href={buildWhatsAppLink(
                  `您好，我想询问关于${subject.nameCN} (${subject.nameEN}) 课程的详情。\nHi, I'd like to enquire about the ${subject.nameEN} course.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-heading text-sm text-primary-teal transition-colors hover:text-primary-dark"
              >
                WhatsApp 询问 &rarr;
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="font-heading text-primary-teal transition-colors hover:text-primary-dark"
          >
            查看全部课程 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
