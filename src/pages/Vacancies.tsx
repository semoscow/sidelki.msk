import PageHero from '../components/PageHero'
import { Phone, CheckCircle, Heart, Baby, Home } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const requirements = [
  'Опыт работы',
  'Желание работать и помогать людям',
  'Душевная теплота и спокойный характер',
  'Нормальная физическая форма',
  'Ответственность и добропорядочность',
]

const whyWork = [
  'Главная ценность — человек',
  'Менеджер выезжает к клиенту бесплатно',
  'Договор подписывается после выхода сиделки',
  'Персональный менеджер и сопровождение 24/7',
  'Возможен выход «день в день»',
  'Фиксированная стоимость и отсутствие скрытых комиссий',
  'Подбор и замена — бесплатно',
  'Можно оплачивать частями',
  'Большая база — более 8000 специалистов',
  '5% прибыли направляется на благотворительность',
]

const dutiesSidelka = [
  'Наблюдение за самочувствием',
  'Гигиенический уход, помощь с душем/ванной',
  'Смена белья',
  'Помощь с питанием',
  'Поддержание порядка в жилом помещении',
  'Прогулки и сопровождение',
  'Приготовление пищи по согласованному меню',
  'Контроль приёма лекарств',
  'Стирка и глажка личных вещей',
  'Поручения: магазин, аптека, поликлиника',
  'Организация досуга',
]

const dutiesNanya = [
  'Присмотр в течение рабочего дня',
  'Игры, занятия, прогулки',
  'Кормление и соблюдение режима сна',
  'Соблюдение гигиены и правил безопасности',
  'Базовые навыки первой помощи',
  'Развивающие занятия по возрасту',
  'Поддержание порядка в детской',
  'Пунктуальность',
]

const dutiesDomrabotnica = [
  'Поддержание чистоты',
  'Стирка и глажка',
  'Приготовление еды (по договорённости)',
]

export default function Vacancies() {
  return (
    <div>
      <PageHero
        title="Вакансии: сиделки, домработницы, няни"
        subtitle="Мы расширяем базу персонала и приглашаем кандидаток на работу сиделкой, домработницей или няней — с проживанием (в том числе вахтой) или в приходящем формате."
        breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Вакансии' }]}
      />

      {/* Зарплата + контакт */}
      <section className="bg-[#C9A87C] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl lg:text-3xl text-[#2C241B] mb-3">
            Оплата до 110 000 ₽ в месяц
          </p>
          <p className="text-[#2C241B]/80 text-sm lg:text-base mb-4">
            В зависимости от графика и задач
          </p>
          <div className="bg-[#1B3A2F] text-white inline-flex items-center gap-3 px-6 py-4">
            <Phone size={20} className="text-[#C9A87C]" />
            <div className="text-left">
              <p className="text-xs text-white/60">Для устройства на работу писать на ватсап</p>
              <p className="font-medium">89261886052 — Евгений</p>
            </div>
          </div>
        </div>
      </section>

      {/* Требования */}
      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl text-[#2C241B]">Требования к кандидатам</h2>
            <p className="text-[#6B5F4F] mt-3">Нам важны не только навыки, но и человеческие качества.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requirements.map((r, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#D9D3CA] p-4">
                <CheckCircle size={20} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <span className="text-[#2C241B] text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Обязанности */}
      <section className="bg-[#EFEBE5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl text-[#2C241B]">Обязанности</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Сиделка */}
            <div className="bg-white p-6 lg:p-8 border border-[#D9D3CA]">
              <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-4">
                <Heart size={22} className="text-[#C9A87C]" />
              </div>
              <h3 className="font-display text-lg text-[#2C241B] mb-4">Сиделка</h3>
              <ul className="space-y-2">
                {dutiesSidelka.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B5F4F]">
                    <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Няня */}
            <div className="bg-white p-6 lg:p-8 border border-[#D9D3CA]">
              <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-4">
                <Baby size={22} className="text-[#C9A87C]" />
              </div>
              <h3 className="font-display text-lg text-[#2C241B] mb-4">Няня</h3>
              <ul className="space-y-2">
                {dutiesNanya.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B5F4F]">
                    <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Домработница */}
            <div className="bg-white p-6 lg:p-8 border border-[#D9D3CA]">
              <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-4">
                <Home size={22} className="text-[#C9A87C]" />
              </div>
              <h3 className="font-display text-lg text-[#2C241B] mb-4">Домработница</h3>
              <ul className="space-y-2">
                {dutiesDomrabotnica.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B5F4F]">
                    <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Почему с нами */}
      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl text-[#2C241B]">Почему с нами удобно работать</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyWork.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <span className="text-sm text-[#6B5F4F]">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма */}
      <section className="bg-[#EFEBE5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="w-16 h-0.5 bg-[#C9A87C] mb-6" />
              <h2 className="font-display text-3xl text-[#2C241B] mb-4">Хотите работать с нами?</h2>
              <p className="text-[#6B5F4F] leading-relaxed mb-6">
                Оставьте заявку — мы свяжемся с вами и расскажем о текущих вакансиях.
              </p>
              <div className="bg-[#1B3A2F] text-white p-6">
                <p className="text-xs text-white/60 mb-1">Или напишите напрямую</p>
                <p className="font-medium">WhatsApp: 89261886052 — Евгений</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
