"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { TEACHERS, type Teacher } from "@/lib/constants";

function TeacherCard({
  teacher,
  index,
  isExpanded,
  onToggle,
  onPhotoClick,
}: {
  teacher: Teacher;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  onPhotoClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      whileHover={{ y: -6, boxShadow: "0 12px 32px -8px rgba(42,191,170,0.25)" }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={teacher.image ? onPhotoClick : undefined}
        className={`w-20 h-20 mx-auto rounded-full mb-4 ring-4 ring-primary-teal/20 transition-shadow hover:ring-primary-teal/40 overflow-hidden ${teacher.image ? "cursor-pointer" : ""}`}
      >
        {teacher.image ? (
          <Image
            src={teacher.image}
            alt={teacher.nameCN}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-teal to-primary-dark flex items-center justify-center">
            <span className="text-2xl font-bold text-white font-cn-serif">
              {teacher.initial}
            </span>
          </div>
        )}
      </motion.div>

      {/* Name */}
      <h3 className="font-heading font-semibold text-lg text-text-primary">
        {teacher.nameCN}
      </h3>
      <p className="text-primary-teal text-sm font-heading mb-3">
        {teacher.nameEN}
      </p>

      {/* Subject pills */}
      <div className="flex flex-wrap justify-center gap-1">
        {teacher.subjectsCN.map((s, i) => (
          <span
            key={i}
            className="bg-primary-teal/10 text-primary-teal text-xs px-2 py-1 rounded-full font-heading"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Bio preview / expanded */}
      {!isExpanded ? (
        <p className="text-text-muted text-sm mt-3 line-clamp-2">
          {teacher.bioCN}
        </p>
      ) : (
        <div className="text-left mt-3 space-y-2 text-sm">
          <p className="text-text-primary">{teacher.bioCN}</p>
          <p className="text-text-muted italic">{teacher.bioEN}</p>
          <div className="pt-2 border-t border-gray-100 space-y-1">
            <p className="text-text-muted">
              <span className="font-heading font-semibold text-text-primary">
                学历
              </span>{" "}
              {teacher.qualificationCN}
            </p>
            <p className="text-text-muted">
              <span className="font-heading font-semibold text-text-primary">
                经验
              </span>{" "}
              {teacher.experienceCN}
            </p>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={onToggle}
        className="text-primary-teal text-xs font-heading mt-2 hover:underline cursor-pointer"
      >
        {isExpanded ? "收起 Close" : "展开 Read More"}
      </button>
    </motion.div>
  );
}

export default function TeachersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null);

  const handleToggle = (index: number) => {
    setExpandedId((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-dark-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cn-serif text-4xl md:text-5xl text-white">
            师资团队
          </h1>
          <p className="font-heading text-xl text-primary-teal mt-2">
            Meet Our Teachers
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-center mt-4">
            我们的老师皆拥有丰富的教学经验和专业学历，致力于帮助每位学生发挥潜能。
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {TEACHERS.map((teacher, i) => (
              <TeacherCard
                key={teacher.nameEN}
                teacher={teacher}
                index={i}
                isExpanded={expandedId === i}
                onToggle={() => handleToggle(i)}
                onPhotoClick={() => teacher.image && setLightbox({ image: teacher.image, name: teacher.nameCN })}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg text-text-primary hover:bg-gray-100 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <Image
                src={lightbox.image}
                alt={lightbox.name}
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <p className="text-center text-white font-heading font-semibold mt-4 text-lg">
                {lightbox.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
