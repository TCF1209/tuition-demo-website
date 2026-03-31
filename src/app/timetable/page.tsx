"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { TIMETABLE, type TimetableSlot } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const DAY_LABELS: Record<string, string> = {
  Mon: "周一",
  Tue: "周二",
  Wed: "周三",
  Thu: "周四",
  Fri: "周五",
  Sat: "周六",
  Sun: "周日",
};

export default function TimetablePage() {
  const slotsByDay = useMemo(() => {
    const map: Record<string, TimetableSlot[]> = {};
    for (const day of DAYS) map[day] = [];
    for (const slot of TIMETABLE) {
      if (map[slot.day]) map[slot.day].push(slot);
    }
    return map;
  }, []);

  const maxSlots = useMemo(
    () => Math.max(...DAYS.map((d) => slotsByDay[d].length)),
    [slotsByDay]
  );

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-dark-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cn-serif text-4xl md:text-5xl text-white">
            时间表
          </h1>
          <p className="font-heading text-xl text-primary-teal mt-2">
            Class Timetable
          </p>
          <p className="text-white/60 text-sm max-w-2xl mx-auto text-center mt-4">
            时间表仅供参考，如有更改恕不另行通知。请&nbsp;WhatsApp&nbsp;获取最新资讯。
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Desktop: full table ── */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-dark-bg text-white font-heading text-sm py-3 px-4 rounded-tl-lg sticky left-0 z-10">
                    时间 Time
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="bg-dark-bg text-white font-heading text-sm py-3 px-4 last:rounded-tr-lg"
                    >
                      <span className="block">{DAY_LABELS[day]}</span>
                      <span className="block text-white/60 text-xs font-normal">
                        {day}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxSlots }).map((_, rowIdx) => (
                  <motion.tr
                    key={rowIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: rowIdx * 0.04, duration: 0.35 }}
                    className="border-b border-gray-100"
                  >
                    {/* Time cell — use first non-empty slot in this row as reference */}
                    <td className="sticky left-0 bg-surface z-10 py-2 px-4 font-heading text-sm text-text-muted whitespace-nowrap">
                      {DAYS.map((d) => slotsByDay[d][rowIdx]?.time)
                        .filter(Boolean)[0] ?? ""}
                    </td>

                    {DAYS.map((day) => {
                      const slot = slotsByDay[day][rowIdx];
                      if (!slot) {
                        return (
                          <td key={day} className="py-2 px-2">
                            <div className="bg-gray-50 rounded-lg h-16" />
                          </td>
                        );
                      }
                      const isUpper = slot.level === "upper";
                      return (
                        <td key={day} className="py-2 px-2">
                          <div
                            className={`rounded-lg p-3 text-center ${
                              isUpper
                                ? "bg-accent-lime/10 text-primary-dark border border-accent-lime/30"
                                : "bg-primary-teal/10 text-primary-teal border border-primary-teal/20"
                            }`}
                          >
                            <span className="block font-heading font-semibold text-sm">
                              {slot.subjectCN}
                            </span>
                            <span className="block text-xs opacity-70">
                              {slot.subjectEN}
                            </span>
                            <span className="block text-xs opacity-50 mt-0.5">
                              {slot.time}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Mobile: horizontal scroll cards ── */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {DAYS.map((day, dayIdx) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIdx * 0.04, duration: 0.35 }}
                  className="w-52 shrink-0"
                >
                  <div className="bg-dark-bg text-white font-heading text-sm py-2 px-4 rounded-t-lg text-center">
                    <span>{DAY_LABELS[day]}</span>
                    <span className="text-white/60 text-xs ml-1">{day}</span>
                  </div>
                  <div className="bg-white rounded-b-lg border border-gray-100 p-2 space-y-2 min-h-[120px]">
                    {slotsByDay[day].length === 0 && (
                      <div className="bg-gray-50 rounded-lg h-16 flex items-center justify-center text-text-muted text-xs">
                        休息
                      </div>
                    )}
                    {slotsByDay[day].map((slot, i) => {
                      const isUpper = slot.level === "upper";
                      return (
                        <div
                          key={i}
                          className={`rounded-lg p-3 text-center ${
                            isUpper
                              ? "bg-accent-lime/10 text-primary-dark border border-accent-lime/30"
                              : "bg-primary-teal/10 text-primary-teal border border-primary-teal/20"
                          }`}
                        >
                          <span className="block font-heading font-semibold text-sm">
                            {slot.subjectCN}
                          </span>
                          <span className="block text-xs opacity-70">
                            {slot.subjectEN}
                          </span>
                          <span className="block text-xs opacity-50 mt-0.5">
                            {slot.time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Color legend ── */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded bg-primary-teal/20 border border-primary-teal/30" />
              <span className="font-heading text-sm text-text-muted">
                初中 Lower Secondary
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded bg-accent-lime/20 border border-accent-lime/40" />
              <span className="font-heading text-sm text-text-muted">
                高中 Upper Secondary
              </span>
            </div>
          </div>

          {/* ── WhatsApp CTA ── */}
          <div className="text-center mt-12">
            <a
              href={buildWhatsAppLink("您好！我想查询最新的课程时间表。\nHi! I'd like to enquire about the latest timetable.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-teal hover:bg-primary-dark text-white font-heading px-6 py-3 rounded-full transition-colors"
            >
              联系我们获取最新时间表 &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
