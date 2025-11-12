"use client";

import {Image} from "@heroui/react";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
      {/* привет часть */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Escape from Tarkov — суровый рейд за выживание</h1>
            <p className="mt-4 text-zinc-300">Руководство, сборки, советы и актуальные новости по ближайшим обновлениям. Всё, что нужно знать, чтобы выходить из рейда живым и с добычей.</p>

            <div className="mt-6 flex gap-3">
              <a href="#guides" className="px-4 py-2 bg-amber-500 text-black rounded-md font-semibold">Читать гайды</a>
              <a href="#tips" className="px-4 py-2 border border-zinc-700 rounded-md">Советы для новичков</a>
            </div>

            <ul className="mt-6 text-sm text-zinc-400 space-y-2">
              <li>• Лучшие лут-зоны для быстрого фарма</li>
              <li>• Как подготовить инвентарь перед рейдом</li>
              <li>• Основы торговли и укрепления базы</li>
            </ul>
          </div>

          <div className="mx-auto hidden md:block">
            <div className="relative w-[420px] h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="\images\killa.jpg"
                alt="EFT Hero"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/*основа . об игре */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800">
        <h2 className="text-2xl font-bold">Об игре</h2>
        <p className="mt-4 text-zinc-300">
          Escape from Tarkov — хардкорный тактический шутер с элементами RPG и выживания. Игроки заходят в рейды, собирают лут, сражаются с другими игроками и NPC, а затем пытаются выбраться через экстракционные точки. Игра славится высокой реалистичностью механик оружия, обширной системой модулей и рынком торговли между игроками.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Рейды</h3>
            <p className="text-sm text-zinc-400 mt-2">Короткие, напряжённые сессии с возможностью полной потери вещей при гибели.</p>
          </div>

          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Менеджмент</h3>
            <p className="text-sm text-zinc-400 mt-2">Инвентарь, трейдинг и развитие хабов — ключевые элементы долгосрочного прогресса.</p>
          </div>

          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Сообщество</h3>
            <p className="text-sm text-zinc-400 mt-2">Кланы, рынки и торговцы — общение и обмен знаниями важны для выживания.</p>
          </div>
        </div>
      </section>

      {/* Популяр гайды */}
      <section id="guides" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Популярные гайды</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <article className="p-4 bg-zinc-800 rounded-lg">
            <h4 className="font-semibold">Как выжить в первом рейде</h4>
            <p className="text-sm text-zinc-400 mt-2">Соберите минимальный набор, избегайте прямых столкновений и изучите выходы.</p>
            <a className="mt-4 inline-block text-sm hover:underline" href="#">Подробнее</a>
          </article>
          <article className="p-4 bg-zinc-800 rounded-lg">
            <h4 className="font-semibold">Билды оружия и моды</h4>
            <p className="text-sm text-zinc-400 mt-2">Подробный разбор популярных конфигураций и обратной отдачи.</p>
            <a className="mt-4 inline-block text-sm hover:underline" href="#">Подробнее</a>
          </article>
          <article className="p-4 bg-zinc-800 rounded-lg">
            <h4 className="font-semibold">Торговля и фарм валют</h4>
            <p className="text-sm text-zinc-400 mt-2">Как выгодно продавать лут и где брать редкие предметы.</p>
            <a className="mt-4 inline-block text-sm hover:underline" href="#">Подробнее</a>
          </article>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800">
        <h2 className="text-2xl font-bold">Галерея</h2>
        <p className="text-zinc-400 text-sm mt-2">Скриншоты и атмосферные кадры из рейдов.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative w-full h-36 rounded-md overflow-hidden bg-zinc-700">
              <Image
      isZoomed
      alt="EFT"
      src={`/images/gallery-${i + 1}.jpg`}
      width={400}
    />
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Советы для новичков</h2>
        <ol className="mt-4 list-decimal pl-6 text-zinc-300 space-y-2">
          <li>Не тащите в рейд всё лучшее — рискуйте меньше, пока не привыкнете к картам.</li>
          <li>Изучайте спавны и выходы — это критически важно.</li>
          <li>Ищите и используйте таблетки и бинты — медицина спасает рейд.</li>
          <li>Торгуйтесь: культурной экономикой игры управляют игроки.</li>
        </ol>
      </section>
    </main>
  );
}

/*
  Инструкции:
  1) Поместите нужные изображения в public/images: eft-hero.jpg, gallery-1..8.jpg
  2) Если вы хотите использовать внешние хосты для <Image />, добавьте их в next.config.js under images.domains
  3) Файл готов для использования в Next.js (App Router). Переименуйте в app/eft/page.tsx или импортируйте как компонент.
*/
