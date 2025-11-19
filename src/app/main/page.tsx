"use client";

import { useState } from "react";
import { Image } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";



export default  function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const guides = [
    {
      title: "Как выжить в первом рейде",
      desc: "Соберите минимальный набор, избегайте прямых столкновений и изучите выходы.",
      details:
        "Начните с лёгкого снаряжения, избегайте контакта с врагами до тех пор, пока не изучите карту. Следите за уровнем энергии и воды, помечайте безопасные маршруты для выхода.",
    },
    {
      title: "Билды оружия и моды",
      desc: "Подробный разбор популярных конфигураций и обратной отдачи.",
      details:
        "Используйте моды для снижения отдачи и улучшения эргономики. Попробуйте сборку АК-74 с рукояткой Zenit и глушителем PBS. Тестируйте разные конфигурации на стрельбище.",
    },
    {
      title: "Торговля и фарм валют",
      desc: "Как выгодно продавать лут и где брать редкие предметы.",
      details:
        "Изучите рынок на барахолке, чтобы продавать по максимальной цене. Регулярно проверяйте торговцев на обновления. Лучшие предметы фармятся в зонах с высоким риском.",
    },
  ];

  const handleOpen = (guide: any) => {
    setSelectedGuide(guide);
    onOpen();
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
      {/* привет часть */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Escape from Tarkov — суровый рейд за выживание
            </h1>
            <p className="mt-4 text-zinc-300">
              Руководство, сборки, советы и актуальные новости по ближайшим
              обновлениям. Всё, что нужно знать, чтобы выходить из рейда живым и
              с добычей.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#guides"
                className="px-4 py-2 bg-amber-500 text-black rounded-md font-semibold"
              >
                Читать гайды
              </a>
              <a
                href="#tips"
                className="px-4 py-2 border border-zinc-700 rounded-md"
              >
                Советы для новичков
              </a>
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
                src="/images/killa.jpg"
                alt="EFT Hero"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ОБ ИГРЕ */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-2xl font-bold">Об игре</h2>
        <p className="mt-4 text-zinc-300">
          Escape from Tarkov — хардкорный тактический шутер с элементами RPG и
          выживания. Игроки заходят в рейды, собирают лут, сражаются с другими
          игроками и NPC, а затем пытаются выбраться через экстракционные точки.
          Игра славится высокой реалистичностью механик оружия, обширной
          системой модулей и рынком торговли между игроками.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Рейды</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Короткие, напряжённые сессии с возможностью полной потери вещей
              при гибели.
            </p>
          </div>

          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Менеджмент</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Инвентарь, трейдинг и развитие хабов — ключевые элементы
              долгосрочного прогресса.
            </p>
          </div>

          <div className="p-4 bg-zinc-800 rounded-lg">
            <h3 className="font-semibold">Сообщество</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Кланы, рынки и торговцы — общение и обмен знаниями важны для
              выживания.
            </p>
          </div>
        </div>
      </section>

      {/* Популярные гайды */}
      <section
        id="guides"
        className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-2xl font-bold">Популярные гайды</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <article key={index} className="p-4 bg-zinc-800 rounded-lg">
              <h4 className="font-semibold">{guide.title}</h4>
              <p className="text-sm text-zinc-400 mt-2">{guide.desc}</p>
              <button
                onClick={() => handleOpen(guide)}
                className="mt-4 inline-block text-sm text-amber-400 hover:underline"
              >
                Подробнее
              </button>
            </article>
          ))}
        </div>

        {/* подробное */}
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
                color: "black",
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              },
            },
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedGuide?.title}
                </ModalHeader>
                <ModalBody>
                  <p>{selectedGuide?.details}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Читать гайд
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>

      {/* Галерея */}
      <section
        id="gallery"
        className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-2xl font-bold">Галерея</h2>
        <p className="text-zinc-400 text-sm mt-2">
          Скриншоты и атмосферные кадры из рейдов.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="relative w-full h-36 rounded-md overflow-hidden bg-zinc-700"
            >
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

      {/* Советы */}
      <section id="tips" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Советы для новичков</h2>
        <ol className="mt-4 list-decimal pl-6 text-zinc-300 space-y-2">
          <li>
            Не тащите в рейд всё лучшее — рискуйте меньше, пока не привыкнете к
            картам.
          </li>
          <li>Изучайте спавны и выходы — это критически важно.</li>
          <li>Ищите и используйте таблетки и бинты — медицина спасает рейд.</li>
          <li>Торгуйтесь: экономикой игры управляют игроки.</li>
        </ol>
      </section>
    </main>
  );
}
