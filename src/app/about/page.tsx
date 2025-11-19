"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">О нас</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Этот сайт создан исключительно в учебных целях и не имеет отношения к реальной компании, игре или продукту.
        </p>
      </section>

      {/* INFO BLOCK */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardBody className="space-y-4 p-8 text-zinc-300 leading-relaxed">
            <p>
              Проект «Escape from Tarkov Fan Page» был разработан студентом в рамках учебной практики по веб-разработке.
              Основная цель — освоить современные технологии фронтенда, такие как <strong>Next.js</strong>, 
              <strong>React</strong>, и библиотека компонентов <strong>@heroui/react</strong>.
            </p>

            <p>
              Вся представленная информация, изображения и описания на этом сайте
              носят демонстрационный характер и не отражают реальные данные о игре
              <em> Escape from Tarkov</em> или компании <em>Battlestate Games</em>.
            </p>

            <p>
              Этот проект не является коммерческим, не предназначен для распространения,
              а служит исключительно как пример выполнения учебного задания по теме
              создания пользовательского интерфейса и организации контента на сайте.
            </p>

            <p>
              Любое совпадение с реальными проектами или визуальными элементами носит случайный характер.
              Все права на бренд <em>Escape from Tarkov</em> принадлежат компании <strong>Battlestate Games</strong>.
            </p>
          </CardBody>
        </Card>
      </section>

     
    </main>
  );
}
