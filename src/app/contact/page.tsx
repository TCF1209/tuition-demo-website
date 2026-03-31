"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const BRANCHES = [
  {
    labelCN: "总院",
    labelEN: "Main Campus",
    address: "Bayu Tinggi, Klang",
    phone: "017-489 6983",
    phoneLink: "60174896983",
  },
  {
    labelCN: "分院",
    labelEN: "Branch Campus",
    address: "巴生滨华独中校区旁",
    phone: "017-745 6983",
    phoneLink: "60177456983",
  },
];

const INFO_CARDS = [
  {
    icon: "🕐",
    titleCN: "营业时间",
    titleEN: "Hours",
    content: "Mon\u2013Fri: 3 PM\u201310 PM | Sat: 9 AM\u20134 PM | Sun: Closed",
  },
  {
    icon: "⭐",
    titleCN: "Google 评价",
    titleEN: "Google Reviews",
    content: "5.0 \u2b50 (71 条评价 · 71 reviews)",
  },
];

const HOURS = [
  { dayCN: "星期一", dayEN: "Monday", time: "3:00 PM \u2013 10:00 PM" },
  { dayCN: "星期二", dayEN: "Tuesday", time: "3:00 PM \u2013 10:00 PM" },
  { dayCN: "星期三", dayEN: "Wednesday", time: "3:00 PM \u2013 10:00 PM" },
  { dayCN: "星期四", dayEN: "Thursday", time: "3:00 PM \u2013 10:00 PM" },
  { dayCN: "星期五", dayEN: "Friday", time: "3:00 PM \u2013 10:00 PM" },
  { dayCN: "星期六", dayEN: "Saturday", time: "9:00 AM \u2013 4:00 PM" },
  { dayCN: "星期日", dayEN: "Sunday", time: "休息 Closed" },
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
      <section className="bg-surface pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-teal to-primary-dark py-12 rounded-2xl mx-auto max-w-4xl relative z-10 text-center text-white shadow-xl px-6">
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
            {/* Branch cards */}
            {BRANCHES.map((branch, i) => (
              <motion.div
                key={branch.labelEN}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <h3 className="font-heading font-semibold text-text-primary">
                  {branch.labelCN} {branch.labelEN}
                </h3>
                <p className="text-text-muted text-sm mt-1">{branch.address}</p>
                <a
                  href={`https://wa.me/${branch.phoneLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-primary-teal font-heading text-sm hover:text-primary-dark transition-colors"
                >
                  📱 {branch.phone}
                </a>
              </motion.div>
            ))}

            {/* Other info cards */}
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.titleEN}
                custom={i + 2}
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
                <p className="text-text-muted text-sm mt-1">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="rounded-xl overflow-hidden h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4!2d101.4!3d3.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTRBLCBKYWxhbiBCYXl1IFRpbmdnaSAxQywgVGFtYW4gQmF5dSBQZXJkYW5hLCA0MTIwMCBLbGFuZw!5e0!3m2!1sen!2smy!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MH Learning Centre Location"
              />
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
