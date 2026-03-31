"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LEVELS, SUBJECTS } from "@/lib/constants";
import { buildEnrolMessage } from "@/lib/whatsapp";

export default function EnrolPage() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [contact, setContact] = useState("");
  const [remarks, setRemarks] = useState("");

  const lowerSubjects = SUBJECTS.filter(
    (s) => s.level === "lower" || s.level === "both"
  );
  const upperSubjects = SUBJECTS.filter(
    (s) => s.level === "upper" || s.level === "both"
  );

  function toggleSubject(subjectLabel: string) {
    setSelectedSubjects((prev) =>
      prev.includes(subjectLabel)
        ? prev.filter((s) => s !== subjectLabel)
        : [...prev, subjectLabel]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = buildEnrolMessage({
      name,
      level,
      subjects: selectedSubjects,
      contact,
      remarks: remarks || undefined,
    });
    window.open(url, "_blank");
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition font-sans";
  const labelClass =
    "font-heading text-sm font-medium text-text-primary mb-1.5 block";

  return (
    <>
      {/* Page Title */}
      <section className="bg-dark-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cn-serif text-4xl md:text-5xl text-white">
            报名
          </h1>
          <p className="font-heading text-xl text-primary-teal mt-2">
            Enrol Now
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            {/* 1. Student Name */}
            <div className="mb-6">
              <label htmlFor="name" className={labelClass}>
                学生姓名 Student Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* 2. Level */}
            <div className="mb-6">
              <label htmlFor="level" className={labelClass}>
                年级 Level
              </label>
              <select
                id="level"
                required
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  — 请选择 Select —
                </option>
                {LEVELS.map((l) => (
                  <option key={l.id} value={l.labelCN}>
                    {l.labelCN}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Subjects */}
            <div className="mb-6">
              <span className={labelClass}>科目 Subject(s)</span>

              {/* Lower Secondary */}
              <p className="font-heading text-xs font-semibold text-text-muted uppercase tracking-wide mt-3 mb-2">
                初中 Lower Secondary
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {lowerSubjects.map((s) => (
                  <label
                    key={`lower-${s.nameEN}`}
                    className="flex items-center gap-2 cursor-pointer text-sm font-sans"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(
                        `${s.nameCN} ${s.nameEN}`
                      )}
                      onChange={() =>
                        toggleSubject(`${s.nameCN} ${s.nameEN}`)
                      }
                      className="accent-primary-teal w-4 h-4"
                    />
                    {s.nameCN} {s.nameEN}
                  </label>
                ))}
              </div>

              {/* Upper Secondary */}
              <p className="font-heading text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                高中 Upper Secondary
              </p>
              <div className="grid grid-cols-2 gap-2">
                {upperSubjects.map((s) => (
                  <label
                    key={`upper-${s.nameEN}`}
                    className="flex items-center gap-2 cursor-pointer text-sm font-sans"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(
                        `${s.nameCN} ${s.nameEN}`
                      )}
                      onChange={() =>
                        toggleSubject(`${s.nameCN} ${s.nameEN}`)
                      }
                      className="accent-primary-teal w-4 h-4"
                    />
                    {s.nameCN} {s.nameEN}
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Parent Contact */}
            <div className="mb-6">
              <label htmlFor="contact" className={labelClass}>
                家长联系号码 Parent Contact
              </label>
              <input
                id="contact"
                type="tel"
                required
                placeholder="60XXXXXXXXX"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* 5. Remarks */}
            <div className="mb-6">
              <label htmlFor="remarks" className={labelClass}>
                备注 Remarks{" "}
                <span className="text-text-muted font-normal">(可选 Optional)</span>
              </label>
              <textarea
                id="remarks"
                rows={3}
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              className="w-full bg-primary-teal hover:bg-primary-dark text-white font-heading text-lg py-4 rounded-lg mt-6 transition-colors cursor-pointer"
            >
              📲 发送至 WhatsApp
            </motion.button>
          </motion.form>

          <p className="text-center text-text-muted text-sm mt-6">
            我们将在24小时内回复您 · We&apos;ll respond within 24 hours
          </p>
        </div>
      </section>
    </>
  );
}
