"use client";
import { Card, CardHeader, CardBody, CardFooter, Button, Link } from "@heroui/react";
import Image from "next/image";

export default function ProductPage() {
  const products = [
    {
      title: "EFT Raid Companion",
      desc: "Приложение-помощник для отслеживания добычи, таймеров и маршрутов выхода из рейдов Tarkov.",
      img: "/images/product-raid.jpg",
    },
    {
      title: "Gear Builder",
      desc: "Интерактивный конфигуратор снаряжения и оружия с сохранением билдов и расчётом стоимости.",
      img: "/images/product-gear.jpg",
    },
    {
      title: "Trader Hub",
      desc: "Быстрый доступ к актуальным ценам и предложениям торговцев и барахолки прямо из браузера.",
      img: "/images/product-trader.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наш продукт</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Мы создаём инструменты, которые помогают игрокам Escape from Tarkov
          выживать, анализировать и побеждать. Ниже представлены наши ключевые решения,
          разработанные сообществом для сообщества.
        </p>
      </section>

      {/* Product Cards */}
      <section className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {products.map((p) => (
          <Card key={p.title} className="bg-zinc-900 border border-zinc-800">
            <CardHeader className="relative h-40">
              <Image
                src={p.img}
                alt={p.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-md opacity-80 hover:opacity-100 transition"
              />
            </CardHeader>
            <CardBody>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-400">{p.desc}</p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="#" color="primary" variant="flat" className="w-full">
                Подробнее
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-24 py-16 bg-gradient-to-br from-zinc-900 to-black text-center">
        <h2 className="text-3xl font-bold mb-4">Попробуйте EFT Tools уже сегодня</h2>
        <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
          Загрузите утилиты, изучайте маршруты, сохраняйте сборки и делитесь опытом с другими рейдерами.
        </p>
        <Button as={Link} href="/" size="lg" className="menu__link_main">
          Скачать инструменты
        </Button>
      </section>
    </main>
  );
}
