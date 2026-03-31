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

          {/* Column 3: Branches */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              上课地点 · Our Campuses
            </h3>
            <div className="mt-4 space-y-5 text-sm text-gray-400">
              {/* Main campus */}
              <div>
                <p className="font-heading font-semibold text-primary-teal">📍 总院 Main Campus</p>
                <p className="mt-1">Bayu Tinggi, Klang</p>
                <p className="mt-0.5">
                  ☎️{" "}
                  <a href="tel:+60174896983" className="transition-colors hover:text-white">
                    017-489 6983
                  </a>
                </p>
              </div>
              {/* Branch campus */}
              <div>
                <p className="font-heading font-semibold text-primary-teal">📍 分院 Branch Campus</p>
                <p className="mt-1">巴生滨华独中校区旁</p>
                <p className="mt-0.5">
                  ☎️{" "}
                  <a href="tel:+60177456983" className="transition-colors hover:text-white">
                    017-745 6983
                  </a>
                </p>
              </div>
              {/* Hours */}
              <div>
                <p className="font-medium text-gray-300">营业时间 Hours</p>
                <p className="mt-1">Mon–Fri: 3 PM – 10 PM</p>
                <p>Sat: 9 AM – 4 PM | Sun: Closed</p>
              </div>
            </div>
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
