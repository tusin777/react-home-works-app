function App() {
  // Новые классы: container задает макс. ширину по брейкпоинтам, mx-auto центрирует, my-10/px-6 дают отступы по шкале.
  return (
    <main className="mx-auto my-10 px-6 container">
      {/* Новые классы: tracking-wide увеличивает межбуквенный интервал; hidden md:flex скрывает меню до md и включает flex; focus:ring-* дает видимый фокус; text-white/90 = белый текст с 90% непрозрачности. */}
      <header>
        <nav className="flex justify-between items-center gap-4 text-white">
          <span className="font-bold text-lg tracking-wide">LOGO</span>

          <div className="hidden md:flex gap-6 text-sm">
            <a
              href="#"
              className="px-1 rounded focus:outline-none focus:ring-2 focus:ring-white/50 text-white/90 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="px-1 rounded focus:outline-none focus:ring-2 focus:ring-white/50 text-white/90 hover:text-white transition-colors"
            >
              Проекты
            </a>
            <a
              href="#"
              className="px-1 rounded focus:outline-none focus:ring-2 focus:ring-white/50 text-white/90 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </div>

          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors">
            Войти
          </button>
        </nav>
      </header>

      {/* Новые классы: text-4xl — крупный размер шрифта, text-blue-900 — темно-синий; rounded-full/border-4 формируют круг и рамку; w-32/h-32 и w-1/3 задают размеры. */}
      <h1 className="mt-10 font-bold text-blue-900 text-4xl text-center">
        React + Tailwind
      </h1>
      <div className="bg-blue-500 mx-auto mt-8 border-4 border-amber-400 rounded-full w-32 h-32">
        это блок
      </div>
      <button className="block bg-red-600 hover:bg-red-400 mx-auto mt-8 rounded-full w-1/3 text-white transition-colors duration-700">
        Кнопка
      </button>
      {/* Новые классы: flex + md:flex-row — колонка на мобиле и ряд на md+; hover:scale-105/transition-transform — плавное увеличение; animate-pulse — пульсация бейджа. */}
      <section className="bg-gray-800 mt-12 p-6 rounded-2xl">
        <h2 className="font-semibold text-white text-2xl text-center">
          Карточки (Flex)
        </h2>
        <div className="flex md:flex-row flex-col md:justify-around gap-4 mt-6">
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-500 rounded-full w-16 h-16"></div>
            <p className="text-gray-700 text-sm text-center">
              Описание карточки 1
            </p>
            <span className="inline-block bg-amber-300 mt-2 px-3 py-1 rounded-full font-medium text-xs animate-pulse">
              New
            </span>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-500 rounded-full w-16 h-16"></div>
            <p className="text-gray-700 text-sm text-center">
              Описание карточки 2
            </p>
            <span className="inline-block bg-amber-300 mt-2 px-3 py-1 rounded-full font-medium text-xs animate-pulse">
              New
            </span>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-500 rounded-full w-16 h-16"></div>
            <p className="text-gray-700 text-sm text-center">
              Описание карточки 3
            </p>
            <span className="inline-block bg-amber-300 mt-2 px-3 py-1 rounded-full font-medium text-xs animate-pulse">
              New
            </span>
          </div>
        </div>
      </section>
      {/* Новые классы: grid-cols-* с sm/md/lg меняют колонки по ширине; hover:shadow-lg/transition-shadow добавляют тень при наведении. */}
      <section className="bg-gray-800 mt-12 p-6 rounded-2xl">
        <h2 className="mt-12 font-semibold text-white text-2xl text-center">
          Галерея (Grid)
        </h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 shadow-sm hover:shadow-lg p-3 rounded-xl transition-shadow"
            >
              <div className="bg-blue-400 rounded-lg h-24"></div>
              <p className="mt-2 text-gray-700 text-sm">
                Элемент галереи {i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Новые классы: bg-linear-to-r + from/via/to делают линейный градиент; animate-bounce — подпрыгивание бейджа; backdrop-blur размывает фон; sm:flex-row — кнопки в ряд от sm+. */}
      <section className="bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500 mt-12 p-8 rounded-3xl text-white">
        <h2 className="font-bold text-3xl md:text-4xl">
          Hero + CTA{" "}
          <span className="inline-block bg-white/20 backdrop-blur ml-3 px-3 py-1 rounded-full text-xs align-middle animate-bounce">
            Live
          </span>
        </h2>
        <p className="mt-2 text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          alias!
        </p>
        <div className="flex sm:flex-row flex-col gap-3 mt-6">
          <button className="bg-white hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-900 transition-colors">
            Primary
          </button>
          <button className="hover:bg-white/10 px-6 py-3 border border-white/70 rounded-full text-white transition-colors">
            Secondary
          </button>
        </div>
      </section>
      {/* Новые классы: bg-white/5 — полупрозрачный фон; sm:ml-auto выталкивает блок кнопок вправо на sm+; border-white/30 — светлая рамка с прозрачностью. */}
      <section className="bg-gray-900 mt-12 p-6 rounded-2xl text-white">
        <div className="flex sm:flex-row flex-col items-center gap-6 bg-white/5 p-6 rounded-xl">
          <div className="flex justify-center items-center bg-amber-400 rounded-full w-20 h-20 font-bold text-gray-900">
            RA
          </div>

          <div>
            <div className="font-semibold text-xl">Ruslan Akh</div>
            <div className="text-white/70 text-sm">Frontend Developer</div>
            <p className="mt-2 text-white/80 text-sm">
              Короткое описание профиля в 1–2 строках.
            </p>
          </div>

          <div className="flex gap-3 sm:ml-auto">
            <button className="bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-full font-semibold text-gray-900 transition-colors">
              Follow
            </button>
            <button className="hover:bg-white/10 px-4 py-2 border border-white/30 rounded-full text-white transition-colors">
              Message
            </button>
          </div>
        </div>
      </section>
      {/* Новые классы: grid-cols-2 md:grid-cols-4 — 2 колонки на мобиле и 4 на md+; hover:-translate-y-1 слегка приподнимает карточки. */}
      <section className="bg-gray-800 mt-12 p-6 rounded-2xl text-white">
        <h2 className="font-semibold text-xl">Статистика проекта</h2>

        <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-6">
          <div className="bg-white/10 p-4 rounded-xl text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="font-bold text-2xl">12к</div>
            <div className="text-white/70 text-sm">Пользователей</div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="font-bold text-2xl">850</div>
            <div className="text-white/70 text-sm">Проектов</div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="font-bold text-2xl">4.9</div>
            <div className="text-white/70 text-sm">Рейтинг</div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="font-bold text-2xl">24/7</div>
            <div className="text-white/70 text-sm">Поддержка</div>
          </div>
        </div>
      </section>
      {/* Новые классы: md:justify-between разводит колонки на md+; border-t/border-white/10 рисуют тонкую линию; text-white/60 снижает контраст вторичного текста. */}
      <footer className="bg-gray-800 mt-12 p-6 rounded-2xl text-white">
        <div className="flex md:flex-row flex-col md:justify-between gap-6">
          <div>
            <div className="font-bold text-lg">LOGO</div>
            <p className="mt-2 text-white/70 text-sm">
              Короткое описание проекта в 1–2 строки.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm">Разделы</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a
                className="text-white/80 hover:text-white transition-colors"
                href="#"
              >
                О проекте
              </a>
              <a
                className="text-white/80 hover:text-white transition-colors"
                href="#"
              >
                Блог
              </a>
              <a
                className="text-white/80 hover:text-white transition-colors"
                href="#"
              >
                Контакты
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm">Соцсети</h3>
            <div className="flex gap-3 mt-2">
              <button className="flex justify-center items-center bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 text-sm transition-colors">
                IG
              </button>
              <button className="flex justify-center items-center bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 text-sm transition-colors">
                YT
              </button>
              <button className="flex justify-center items-center bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 text-sm transition-colors">
                TG
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-white/10 border-t text-white/60 text-sm text-center">
          &copy; 2025 React Tailwind. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default App;
