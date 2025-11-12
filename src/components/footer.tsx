"use client";
import { Link } from "@heroui/react";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
    { label: "Политика конфиденциальности", href: "/privacy" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/" },
    { icon: <Youtube size={18} />, href: "https://youtube.com/" },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* ЛОГО и описание */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-red-600 rounded flex items-center justify-center text-black font-bold">
              EFT
            </div>
            <span className="font-semibold text-zinc-200">Escape from Tarkov</span>
          </div>
          <p className="text-sm text-zinc-500">
            Фан-проект, вдохновлённый миром EFT. Неофициальный сайт, созданный
            для игроков и энтузиастов. Все права принадлежат Battlestate Games.
          </p>
        </div>

        {/* Быстрые ссылки */}
        <div>
          <h4 className="font-semibold text-zinc-200 mb-3">Навигация</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-zinc-100 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Соцсети */}
        <div>
          <h4 className="font-semibold text-zinc-200 mb-3">Мы в сети</h4>
          <div className="flex gap-4">
            {socialLinks.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Escape from Tarkov Fan Page. Сделано с любовью к рейдам.
      </div>
    </footer>
  );
}
