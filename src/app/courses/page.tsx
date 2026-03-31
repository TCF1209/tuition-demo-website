"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SUBJECTS, type Subject } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Filter = "all" | "lower" | "upper";

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "全部 All" },
  { id: "lower", label: "初中 Junior (初一至初三)" },
  { id: "upper", label: "高中 Senior (高一至高三)" },
];

function LevelBadge({ level }: { level: Subject["level"] }) {
  if (level === "both") {
    return (
      <div className="flex flex-wrap gap-2">
        <span className="inline-block rounded-full px-3 py-0.5 text-xs font-heading bg-primary-teal/10 text-primary-teal">
          初中
        </span>
        <span className="inline-block rounded-full px-3 py-0.5 text-xs font-heading bg-accent-lime/20 text-primary-dark">
          高中
        </span>
      </div>
    );
  }

  if (level === "lower") {
    return (
      <span className="inline-block rounded-full px-3 py-0.5 text-xs font-heading bg-primary-teal/10 text-primary-teal">
        初中
      </span>
    );
  }

  return (
    <span className="inline-block rounded-full px-3 py-0.5 text-xs font-heading bg-accent-lime/20 text-primary-dark">
      高中
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function CoursesPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-60px" });

  const filtered = SUBJECTS.filter((s) => {
    if (filter === "all") return true;
    if (filter === "lower") return s.level === "lower" || s.level === "both";
    return s.level === "upper" || s.level === "both";
  });

  return (
    <>
      {/* Page title */}
      <section className="bg-dark-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cn-serif text-4xl md:text-5xl text-white">
            课程
          </h1>
          <p className="font-heading text-xl text-primary-teal mt-3">
            Our Courses
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-5 py-2 font-heading text-sm transition-colors ${
                  filter === tab.id
                    ? "bg-primary-teal text-white"
                    : "bg-white text-text-muted border border-gray-200 hover:border-primary-teal"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((subject, i) => (
              <motion.div
                key={subject.nameEN}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px -8px rgba(42, 191, 170, 0.25)",
                }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-shadow"
              >
                <div className="text-4xl mb-3">{subject.icon}</div>

                <h3 className="font-heading font-semibold text-xl text-text-primary">
                  {subject.nameCN}
                </h3>

                <p className="text-primary-teal text-sm font-heading mb-2">
                  {subject.nameEN}
                </p>

                <LevelBadge level={subject.level} />

                <p className="text-text-muted text-sm mt-3 leading-relaxed">
                  {subject.description}
                </p>

                <a
                  href={buildWhatsAppLink(`我想了解${subject.nameCN}课程`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-primary-teal font-heading text-sm hover:underline"
                >
                  WhatsApp 咨询 →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
