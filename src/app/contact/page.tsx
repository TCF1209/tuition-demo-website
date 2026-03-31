"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const INFO_CARDS = [
  {
    icon: "📍",
    titleCN: "地址",
    titleEN: "Address",
    content: "No. XX, Jalan XXX, Taman XXX, XXXXX City, State",
  },
  {
    icon: "🕐",
    titleCN: "营业时间",
    titleEN: "Hours",
    content: "Mon\u2013Fri: 14:00\u201321:30 | Sat\u2013Sun: 09:00\u201317:30",
  },
  {
    icon: "📱",
    titleCN: "WhatsApp",
    titleEN: "WhatsApp",
    content: WHATSAPP_NUMBER,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: "📧",
    titleCN: "电邮",
    titleEN: "Email",
    content: "info@mhlearning.com",
    href: "mailto:info@mhlearning.com",
  },
];

const HOURS = [
  { dayCN: "星期一", dayEN: "Monday", time: "14:00\u201321:30" },
  { dayCN: "星期二", dayEN: "Tuesday", time: "14:00\u201321:30" },
  { dayCN: "星期三", dayEN: "Wednesday", time: "14:00\u201321:30" },
  { dayCN: "星期四", dayEN: "Thursday", time: "14:00\u201321:30" },
  { dayCN: "星期五", dayEN: "Friday", time: "14:00\u201321:30" },
  { dayCN: "星期六", dayEN: "Saturday", time: "09:00\u201317:30" },
  { dayCN: "星期日", dayEN: "Sunday", time: "09:00\u201317:30" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  const whatsappCTA = buildWhatsAppLink(
    "您好！我想了解更多关于满汉全习的课程。\nHi! I'd like to learn more about MH Learning Centre."
  );

  return (
    <>
      {/* Page Title */}
      <section className="bg-dark-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cn-serif text-4xl md:text-5xl text-white">
            联系我们
          </h1>
          <p className="font-heading text-xl text-primary-teal mt-2">
            Contact Us
          </p>
        </div>
      </section>

      {/* WhatsApp Hero CTA */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-teal to-primary-dark py-12 rounded-2xl mx-auto max-w-4xl -mt-8 relative z-10 text-center text-white shadow-xl px-6">
            <h2 className="font-cn-serif text-2xl md:text-3xl mb-2">
              WhatsApp 联系我们
            </h2>
            <p className="font-sans text-white/80 text-sm mb-6">
              点击下方按钮，即可开始对话 · Tap below to start a conversation
            </p>
            <a
              href={whatsappCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-dark font-heading px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              📲 WhatsApp 联系我们
            </a>
            <p className="text-white/70 text-sm mt-4 font-sans">
              {WHATSAPP_NUMBER}
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.titleEN}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <span className="text-2xl mb-2 block">{card.icon}</span>
                <h3 className="font-heading font-semibold text-text-primary">
                  {card.titleCN} {card.titleEN}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-sm mt-1 block hover:text-primary-teal transition-colors"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-text-muted text-sm mt-1">
                    {card.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Google Maps Placeholder */}
          {/* TODO: replace with actual Google Maps iframe */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gray-200 rounded-xl h-64 md:h-80 flex items-center justify-center text-text-muted">
              <span className="font-sans text-sm">
                Google Maps · 地图将在此显示
              </span>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="max-w-4xl mx-auto mt-10">
            <h2 className="font-cn-serif text-2xl text-text-primary text-center mb-6">
              营业时间 Operating Hours
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-surface-alt">
                    <th className="text-left px-6 py-3 font-heading font-semibold text-text-primary">
                      日期 Day
                    </th>
                    <th className="text-right px-6 py-3 font-heading font-semibold text-text-primary">
                      时间 Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {HOURS.map((row) => (
                    <tr
                      key={row.dayEN}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-3 text-text-primary">
                        {row.dayCN}{" "}
                        <span className="text-text-muted">{row.dayEN}</span>
                      </td>
                      <td className="px-6 py-3 text-right text-text-muted">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
