import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Image
              src="/logo-dark.jpeg"
              alt="MH Learning Centre 满汉全习"
              width={120}
              height={120}
              className="h-auto w-[120px]"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              成绩提升，从这里开始 · Where Results Begin
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              快速链接 · Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.labelCN} {link.labelEN}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info + Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              联系我们 · Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-medium text-gray-300">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-300">Email:</span>{" "}
                <a
                  href="mailto:info@mhlearning.com"
                  className="transition-colors hover:text-white"
                >
                  info@mhlearning.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-300">地址 Address:</span>
                <br />
                123 Jalan Contoh, Taman Placeholder, 12345 Kuala Lumpur
              </li>
              <li>
                <span className="font-medium text-gray-300">营业时间 Hours:</span>
                <br />
                Mon–Fri: 14:00–21:30
                <br />
                Sat–Sun: 09:00–17:30
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; 2025 MH Learning Centre 满汉全习
        </div>
      </div>
    </footer>
  );
}
