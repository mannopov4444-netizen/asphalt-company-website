import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight, Star, Check } from 'lucide-react';

export default function AsphaltCompanyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Анимированные слои асфальта
  const AsphaltLayers = () => (
    <div className="relative w-full h-80 flex items-center justify-center my-12">
      <div className="space-y-0 w-full max-w-md">
        {/* Слой 1: Грунт */}
        <div 
          className="h-12 bg-amber-900 rounded-l-lg shadow-lg flex items-center px-6 text-white font-semibold transition-all duration-700 hover:shadow-xl hover:scale-105"
          style={{ transform: `translateX(${Math.min(scrollY * 0.2, 40)}px)` }}
        >
          🪨 Подготовка грунта (30 см)
        </div>
        
        {/* Слой 2: Щебень */}
        <div 
          className="h-12 bg-amber-800 shadow-lg flex items-center px-6 text-white font-semibold transition-all duration-700 hover:shadow-xl hover:scale-105"
          style={{ transform: `translateX(${Math.min(scrollY * 0.15, 60)}px)` }}
        >
          🪨 Базовый слой (15 см)
        </div>
        
        {/* Слой 3: Асфальт */}
        <div 
          className="h-12 bg-slate-800 shadow-lg flex items-center px-6 text-white font-semibold transition-all duration-700 hover:shadow-xl hover:scale-105"
          style={{ transform: `translateX(${Math.min(scrollY * 0.1, 80)}px)` }}
        >
          ⬛ Промежуточный слой (8 см)
        </div>
        
        {/* Слой 4: Финиш */}
        <div 
          className="h-14 bg-black rounded-r-lg shadow-2xl flex items-center px-6 text-white font-bold transition-all duration-700 hover:shadow-2xl hover:scale-105"
          style={{ transform: `translateX(${Math.min(scrollY * 0.05, 100)}px)` }}
        >
          ⭐ Верхний слой (5 см) - ИДЕАЛЬНАЯ ПОВЕРХНОСТЬ
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ===== НАВИГАЦИЯ ===== */}
      <nav className="fixed w-full bg-white shadow-md z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🛣️
              </div>
              <span className="text-xl font-bold text-gray-900">RoadsConnect</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Услуги', 'Проекты', 'О нас', 'Контакты'].map((item, idx) => (
                <a 
                  key={idx} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Получить смету
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['Услуги', 'Проекты', 'О нас', 'Контакты'].map((item, idx) => (
                <a 
                  key={idx} 
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg">
                Получить смету
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ===== ГЕРОЙ СЕКЦИЯ ===== */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ #1 в Узбекистане
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Дороги мирового <span className="text-orange-500">уровня</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                15 лет опыта • 500+ проектов • 100% гарантия качества. Мы строим дороги, которые служат десятилетиями.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all font-bold flex items-center justify-center gap-2 group">
                  Начать проект <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all font-bold flex items-center justify-center gap-2">
                  <Phone size={20} /> Позвоните
                </button>
              </div>

              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-black text-orange-500">500+</div>
                  <div className="text-gray-600">завершенных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-500">2000км</div>
                  <div className="text-gray-600">асфальта уложено</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-500">20лет</div>
                  <div className="text-gray-600">средний срок службы</div>
                </div>
              </div>
            </div>

            {/* Анимированная иллюстрация */}
            <div className="relative h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-4">🛣️</div>
                  <div className="text-3xl font-bold">Профессиональные дороги</div>
                  <div className="text-orange-100 mt-2">Укладка асфальта от А до Я</div>
                </div>
              </div>
              <div 
                className="absolute bottom-0 left-0 right-0 h-32 bg-black opacity-30"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== СЛОИ АСФАЛЬТА (ИНТЕРАКТИВНО) ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 text-gray-900">Как мы строим дороги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Каждый слой важен для долговечности</p>
          <AsphaltLayers />
        </div>
      </section>

      {/* ===== УСЛУГИ ===== */}
      <section id="услуги" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Полный спектр услуг по укладке и ремонту асфальта
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'Укладка асфальта',
                desc: 'Новые дороги с использованием материалов премиум-класса',
                items: ['Подготовка основания', 'Укладка асфальта', 'Разметка', 'Гарантия 5 лет']
              },
              {
                icon: '🔧',
                title: 'Ремонт дорог',
                desc: 'Восстановление и укрепление существующих покрытий',
                items: ['Диагностика', 'Заделка трещин', 'Восстановление слоев', 'Уплотнение']
              },
              {
                icon: '✨',
                title: 'Обслуживание',
                desc: 'Регулярное техническое обслуживание дорог',
                items: ['Очистка', 'Герметизация', 'Восстановление разметки', '24/7 поддержка']
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check size={18} className="text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ПРОЕКТЫ (ПОРТФОЛИО) ===== */}
      <section id="проекты" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Наши лучшие проекты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Работы, которыми мы гордимся</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: 'Самарканд', distance: '2.5км', time: '8 дней', image: '🏛️' },
              { city: 'Бухара', distance: '1.8км', time: '6 дней', image: '🕌' },
              { city: 'Фергона', distance: '3.2км', time: '10 дней', image: '⛰️' },
              { city: 'Коканд', distance: '1.5км', time: '5 дней', image: '🏢' },
              { city: 'Наманган', distance: '2.8км', time: '9 дней', image: '🌆' },
              { city: 'Ташкент', distance: '4.0км', time: '12 дней', image: '🌃' }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.city}</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>📏 Расстояние:</span>
                      <span className="font-bold">{project.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>⏱️ Время:</span>
                      <span className="font-bold">{project.time}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                    Посмотреть подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ОТЗЫВЫ ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Что говорят наши клиенты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Отзывы от компаний, которые с нами работают</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Юсуф Маматов',
                role: 'ООО "Город Развития"',
                text: 'Спасибо за отличную работу! Наша парковка выглядит как новая. Быстро, качественно, профессионально!',
                rating: 5
              },
              {
                name: 'Нодира Асанова',
                role: 'Администрация Самарканда',
                text: 'Лучшие дороги в городе! Жители очень довольны. Рекомендуем всем муниципалитетам!',
                rating: 5
              },
              {
                name: 'Алишер Каримов',
                role: 'ООО "Строй-Проект"',
                text: 'Работаем с ними 3 года. Всегда в срок, всегда качество. Это надежный партнер!',
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600 text-sm">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== О НАС ===== */}
      <section id="о нас" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-gray-900">Почему выбирают нас?</h2>
              <div className="space-y-4">
                {[
                  { icon: '⚡', title: 'Скорость', desc: 'Самые быстрые сроки в регионе - день за днем' },
                  { icon: '✅', title: 'Качество', desc: 'Гарантия 5 лет на все виды работ' },
                  { icon: '💰', title: 'Цена', desc: 'Лучшие предложения без скрытых платежей' },
                  { icon: '👥', title: 'Команда', desc: '50+ профессионалов с международными сертификатами' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Давайте посчитаем вашу смету</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Км дороги</label>
                  <input type="number" placeholder="1" className="w-full px-4 py-2 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Тип работ</label>
                  <select className="w-full px-4 py-2 rounded-lg text-gray-900">
                    <option>Новая укладка</option>
                    <option>Ремонт</option>
                    <option>Восстановление</option>
                  </select>
                </div>
                <button className="w-full bg-white text-orange-500 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors mt-6">
                  Получить смету
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== КОНТАКТЫ ===== */}
      <section id="контакты" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Контакты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Свяжитесь с нами любым удобным способом</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone size={32} className="text-orange-500" />,
                title: 'Телефон',
                content: '+998 (71) 123-45-67',
                subtext: 'Пн-Сб, 8:00-18:00'
              },
              {
                icon: <Mail size={32} className="text-orange-500" />,
                title: 'Email',
                content: 'info@roadsconnect.uz',
                subtext: 'Ответ в течение 2 часов'
              },
              {
                icon: <MapPin size={32} className="text-orange-500" />,
                title: 'Адрес',
                content: 'Ташкент, ул. Сабаи 42',
                subtext: 'Офис и склад'
              }
            ].map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all">
                <div className="flex justify-center mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="font-semibold text-gray-700 mb-1">{contact.content}</p>
                <p className="text-gray-600 text-sm">{contact.subtext}</p>
              </div>
            ))}
          </div>

          {/* Форма обратной связи */}
          <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Напишите нам</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                />
              </div>
              <input 
                type="text" 
                placeholder="Тема сообщения" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
              />
              <textarea 
                placeholder="Ваше сообщение" 
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">🛣️</div>
                <span className="font-bold text-lg">RoadsConnect</span>
              </div>
              <p className="text-gray-400">Лидер в строительстве дорог Узбекистана</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">О нас</a></li>
                <li><a href="#" className="hover:text-orange-500">Проекты</a></li>
                <li><a href="#" className="hover:text-orange-500">Услуги</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Блог</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500">Политика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-500">📱</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">📘</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">🎵</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">🎬</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 RoadsConnect. Все права защищены.</p>
            <p>Сделано с ❤️ для Узбекистана</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
