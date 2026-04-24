import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, FileCheck, Headphones, DollarSign, Users, Award,
  RefreshCw, HeartHandshake, CheckCircle, Phone,
  Brain, Activity, Bone, Stethoscope, HeartPulse, SmilePlus, Baby, Hospital,
  ChevronLeft, ChevronRight, Star
} from 'lucide-react'
import ContactForm from '../components/ContactForm'

const advantages = [
  { icon: Heart, title: 'Человек — главная ценность', desc: 'Бережно относимся и к подопечному, и к семье' },
  { icon: FileCheck, title: 'Бесплатный выезд менеджера', desc: 'Для обсуждения условий и подписания договора' },
  { icon: Headphones, title: 'Персональный менеджер', desc: 'Сопровождение 24/7 на всём протяжении работы' },
  { icon: DollarSign, title: 'Фиксированная стоимость', desc: 'Без скрытых комиссий, возможна оплата частями' },
  { icon: Users, title: 'Более 8000 специалистов', desc: 'В базе проверенных кандидатов' },
  { icon: Award, title: 'Договор после выхода', desc: 'Оформляем, когда вы убедились, что кандидат подходит' },
  { icon: RefreshCw, title: 'Бесплатный подбор и замена', desc: 'При необходимости подберём другого специалиста' },
  { icon: HeartHandshake, title: '5% на благотворительность', desc: 'Часть прибыли направляем на добрые дела' },
]

const conditions = [
  { icon: Brain, label: 'Когнитивные нарушения' },
  { icon: Activity, label: 'После инсульта/инфаркта' },
  { icon: Bone, label: 'Переломы' },
  { icon: Stethoscope, label: 'Онкология' },
  { icon: HeartPulse, label: 'Послеоперационная реабилитация' },
  { icon: SmilePlus, label: 'Паркинсонизм' },
  { icon: Baby, label: 'Психологическая поддержка' },
  { icon: Hospital, label: 'В стационаре' },
]

const reviews = [
  { text: 'Очень благодарны за оперативную помощь. Сиделка приехала в тот же день, очень внимательная и заботливая. Бабушка довольна.', name: 'Анна К.', date: 'март 2025' },
  { text: 'Профессиональный подход, все объяснили, договор оформили после того как мы убедились, что сиделка подходит. Рекомендую.', name: 'Михаил С.', date: 'февраль 2025' },
  { text: 'Заказывали сиделку в больницу. Девушка была очень внимательна, помогала со всеми процедурами. Спасибо большое!', name: 'Елена В.', date: 'январь 2025' },
  { text: 'Уже полгода работаем со службой. Менеджер всегда на связи, замена прошла быстро и без проблем.', name: 'Дмитрий П.', date: 'февраль 2025' },
  { text: 'Нужна была сиделка с проживанием для папы после операции. Подобрали за два часа. Очень довольны.', name: 'Наталья М.', date: 'март 2025' },
]

const steps = [
  { num: '01', title: 'Заявка', desc: 'Вы звоните или оставляете заявку. Уточняем задачу, график, особенности ухода.' },
  { num: '02', title: 'Подбор', desc: 'Подбираем кандидата из базы с учётом ваших пожеланий и особенностей подопечного.' },
  { num: '03', title: 'Выход и договор', desc: 'Сиделка выходит на пробные дни. Договор оформляем после вашего одобрения.' },
]

export default function Home() {
  const [reviewIdx, setReviewIdx] = useState(0)
  const [visible, setVisible] = useState<Set<string>>(new Set())
  const [videoPosition, setVideoPosition] = useState('55% center')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVideoPosition('55% 65%')
      } else {
        setVideoPosition('55% center')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((prev) => new Set(prev).add(entry.target.id))
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((s) => observerRef.current?.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const animClass = (id: string) =>
    visible.has(id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'

  const nextReview = () => setReviewIdx((i) => (i + 1) % Math.max(1, reviews.length - 2))
  const prevReview = () => setReviewIdx((i) => (i - 1 + Math.max(1, reviews.length - 2)) % Math.max(1, reviews.length - 2))

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[600px] lg:min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: videoPosition }}
          >
            <source src="/hero-home.mp4" type="video/mp4" />
            <source src="/hero-home.webm" type="video/webm" />
            <img
              src="/hero-home.jpg"
              alt="Сиделка заботится о пожилой женщиной"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2F]/70 via-[#1B3A2F]/50 to-[#1B3A2F]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl" style={{ paddingLeft: '4%' }}>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[52px] text-white leading-[1.15] mb-6 animate-fade-in">
              Сиделка на дом, в больницу и с проживанием — Москва и область
            </h1>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6 animate-fade-in-delay">
              Подбираем сиделку под вашу ситуацию: на несколько часов, на сутки, на период реабилитации или на постоянный уход. При необходимости организуем замену и остаёмся на связи на всём протяжении работы.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-white/90 text-sm lg:text-base">
                <CheckCircle size={20} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <span>Проверенный персонал, ответственность по договору.</span>
              </div>
              <div className="flex items-start gap-3 text-white/90 text-sm lg:text-base">
                <CheckCircle size={20} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <span>Возможен выход в день обращения (срок — от 20 минут до 12 часов).</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontakty"
                className="bg-[#1B3A2F] text-white px-8 py-3.5 text-sm font-medium uppercase tracking-[0.04em] hover:bg-[#142D24] hover:-translate-y-0.5 transition-all duration-300 inline-block"
              >
                Подобрать сиделку
              </a>
              <a
                href="tel:+79017677650"
                className="border border-white text-white px-8 py-3.5 text-sm font-medium uppercase tracking-[0.04em] hover:bg-white hover:text-[#1B3A2F] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== КОМУ МЫ ПОМОГАЕМ ===== */}
      <section id="komu-pomogaem" className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
          <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B] mb-6">Кому мы помогаем</h2>
          <p className="text-[#6B5F4F] text-base lg:text-lg leading-relaxed">
            Мы помогаем семьям, которым нужен уход за пожилым родственником, за человеком после операции или во время восстановления, а также тем, кому важно присутствие помощницы рядом в стационаре. Подберём формат ухода и объясним, как всё будет устроено — спокойно и по шагам.
          </p>
        </div>
      </section>

      {/* ===== ПРЕИМУЩЕСТВА ===== */}
      <section id="preimushchestva" className="bg-[#EFEBE5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B]">Почему с нами спокойнее</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                data-animate
                id={`adv-${i}`}
                className={`bg-white border border-[#D9D3CA] p-6 lg:p-8 hover:border-[#C9A87C] hover:shadow-md hover:-translate-y-1 transition-all duration-400 ${animClass(`adv-${i}`)}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-4">
                  <a.icon size={28} className="text-[#C9A87C]" />
                </div>
                <h4 className="font-display text-lg font-medium text-[#2C241B] mb-2">{a.title}</h4>
                <p className="text-sm text-[#6B5F4F] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== СОСТОЯНИЯ ===== */}
      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B]">С какими состояниями работаем</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mb-10">
            {conditions.map((c, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#EFEBE5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <c.icon size={26} className="text-[#1B3A2F]" />
                </div>
                <span className="text-sm text-[#2C241B] font-medium">{c.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B5F4F] leading-relaxed max-w-3xl mx-auto">
            У сиделок есть опыт ухода при возрастных заболеваниях и состояниях, когда человеку нужен регулярный контроль и помощь: когнитивные нарушения (в т.ч. болезнь Альцгеймера), симптомы паркинсонизма, восстановление после инсульта/инфаркта, переломы (в т.ч. шейки бедра), онкология, послеоперационная реабилитация.
          </p>
        </div>
      </section>

      {/* ===== ТАРИФЫ ===== */}
      <section id="tseny" className="bg-[#EFEBE5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B]">Тарифы и цены</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Эконом */}
            <div className="bg-white border-2 border-[#D9D3CA] p-8 lg:p-10">
              <h3 className="font-display text-2xl text-[#2C241B] mb-4">Эконом</h3>
              <div className="w-10 h-0.5 bg-[#D9D3CA] mb-6" />
              <ul className="space-y-3 text-sm text-[#6B5F4F] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span><strong className="text-[#2C241B]">Приходящая:</strong> 3ч — 1400₽, 6ч — 1900₽, 12ч — 2500₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span><strong className="text-[#2C241B]">С проживанием:</strong> от 25 000₽/мес</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span><strong className="text-[#2C241B]">В больницу:</strong> от 1700₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span><strong className="text-[#2C241B]">Помощник:</strong> 750₽/час</span>
                </li>
              </ul>
              <Link to="/uslugi" className="block text-center border border-[#1B3A2F] text-[#1B3A2F] py-3 text-sm font-medium uppercase tracking-[0.04em] hover:bg-[#1B3A2F] hover:text-white transition-all duration-300">
                Подробнее
              </Link>
            </div>

            {/* Премиум */}
            <div className="bg-white border-2 border-[#C9A87C] p-8 lg:p-10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A87C] text-[#2C241B] px-4 py-1 text-xs font-medium uppercase tracking-wider">
                Популярный
              </div>
              <h3 className="font-display text-2xl text-[#2C241B] mb-4 mt-2">Премиум</h3>
              <div className="w-10 h-0.5 bg-[#C9A87C] mb-6" />
              <ul className="space-y-3 text-sm text-[#6B5F4F] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span>Сиделка с медицинским образованием</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span>Персональный менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span>Координатор с мед. образованием</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span>Помощь с врачом и поддержка 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A87C] mt-1">•</span>
                  <span>Видеонаблюдение и тревожная кнопка</span>
                </li>
              </ul>
              <a href="#kontakty" className="block text-center bg-[#1B3A2F] text-white py-3 text-sm font-medium uppercase tracking-[0.04em] hover:bg-[#142D24] transition-all duration-300">
                Выбрать
              </a>
            </div>

            {/* VIP */}
            <div className="bg-white border-2 border-[#D9D3CA] p-8 lg:p-10">
              <h3 className="font-display text-2xl text-[#2C241B] mb-4">VIP</h3>
              <div className="w-10 h-0.5 bg-[#D9D3CA] mb-6" />
              <p className="text-[#6B5F4F] text-sm leading-relaxed mb-8">
                Персональный сценарий ухода: согласование и реализация индивидуальных требований семьи. Полный контроль, приватность, эксклюзивные условия.
              </p>
              <a href="#kontakty" className="block text-center border border-[#1B3A2F] text-[#1B3A2F] py-3 text-sm font-medium uppercase tracking-[0.04em] hover:bg-[#1B3A2F] hover:text-white transition-all duration-300">
                Обсудить
              </a>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-[#9A8F80] max-w-3xl mx-auto space-y-1">
            <p>Выезд специалиста для обсуждения условий и заключения договора — бесплатно.</p>
            <p>Прайс рассчитан для физических лиц. В праздничные дни возможна надбавка.</p>
          </div>
        </div>
      </section>

      {/* ===== ОТЗЫВЫ ===== */}
      <section id="otzyvy" className="bg-[#1B3A2F] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl lg:text-[40px] text-white mb-4">Отзывы клиентов</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="font-display text-5xl lg:text-6xl text-[#C9A87C]">5.0</span>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={18} className="text-[#C9A87C] fill-[#C9A87C]" />)}
                </div>
                <span className="text-white/60 text-sm">Рейтинг в Яндексе</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
              {reviews.slice(reviewIdx, reviewIdx + 3).map((r, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-7">
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed italic mb-4">"{r.text}"</p>
                  <div>
                    <p className="text-[#C9A87C] text-sm font-medium">{r.name}</p>
                    <p className="text-white/40 text-xs">{r.date}</p>
                  </div>
                </div>
              ))}
            </div>
            {reviews.length > 3 && (
              <>
                <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden lg:flex">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden lg:flex">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://yandex.ru/profile/158512104581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/30 text-white px-8 py-3 text-sm font-medium uppercase tracking-[0.04em] hover:bg-white hover:text-[#1B3A2F] transition-all duration-300"
            >
              Все отзывы в Яндекс Справочнике
            </a>
          </div>
        </div>
      </section>

      {/* ===== КАК МЫ РАБОТАЕМ ===== */}
      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-[#C9A87C] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B]">Как мы работаем</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s, i) => (
              <div key={i} className="text-center md:text-left relative">
                <span className="font-display text-5xl lg:text-6xl text-[#C9A87C]/30">{s.num}</span>
                <h4 className="font-display text-xl text-[#2C241B] mt-2 mb-3">{s.title}</h4>
                <p className="text-sm text-[#6B5F4F] leading-relaxed">{s.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-[#D9D3CA] translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ФОРМА ===== */}
      <section id="kontakty" className="bg-[#EFEBE5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="w-16 h-0.5 bg-[#C9A87C] mb-6" />
              <h2 className="font-display text-3xl lg:text-[40px] text-[#2C241B] mb-4">Оставьте контакты — мы перезвоним</h2>
              <p className="text-[#6B5F4F] text-base lg:text-lg leading-relaxed mb-8">
                Менеджер свяжется в течение 15 минут, уточнит детали и предложит подходящих кандидатов.
              </p>
              <div className="space-y-4">
                <a href="tel:+79017677650" className="flex items-center gap-3 text-[#1B3A2F]">
                  <Phone size={20} className="text-[#C9A87C]" />
                  <span className="font-display text-2xl">+7 (901) 767-76-50</span>
                </a>
                <div className="flex items-center gap-3 text-[#6B5F4F]">
                  <span className="text-sm">Режим работы: с 8.00 до 21.00 без выходных</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
