"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    icon: "\uD83C\uDFAF",
    titleCN: "专业师资",
    titleEN: "Expert Teachers",
    description:
      "每位老师皆拥有丰富教学经验与专业学历，深入浅出，因材施教。Every teacher brings years of experience and subject expertise to the classroom.",
  },
  {
    icon: "\uD83D\uDC65",
    titleCN: "小班教学",
    titleEN: "Small Classes",
    description:
      "小班制确保每位学生获得充分关注，老师能及时发现问题并给予指导。Small class sizes ensure every student gets the attention they need.",
  },
  {
    icon: "\uD83D\uDD50",
    titleCN: "灵活时间",
    titleEN: "Flexible Schedule",
    description:
      "平日与周末均有课程安排，方便不同学校和年级的学生选择适合的时段。Weekday and weekend classes available to fit every student's timetable.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-cn-serif text-3xl md:text-4xl text-text-primary">
            为什么选择我们
          </h2>
          <p className="font-heading text-text-muted mt-2">Why Choose Us</p>
        </div>

        {/* Feature cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.titleEN}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px -8px rgba(42, 191, 170, 0.25)",
              }}
              className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 cursor-default${
                i === 1 ? " md:-translate-y-3" : ""
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {feature.titleCN}
              </h3>
              <p className="text-primary-teal text-sm font-heading mb-3">
                {feature.titleEN}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
