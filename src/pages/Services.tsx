import { Link } from 'react-router-dom'
import {
  Home, Clock, Hospital, BedDouble, UserCircle, HeartPulse,
  SmilePlus, Briefcase, ShieldCheck
} from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const services = [
  {
    icon: Home,
    title: 'Сиделка с проживанием',
    desc: 'Круглосуточная помощь, контроль состояния, гигиена, питание, бытовая поддержка, общение.',
    href: '/uslugi/sidelka-s-prozhivaniem',
    image: '/service-live-in.jpg',
  },
  {
    icon: Clock,
    title: 'Сиделка без проживания',
    desc: 'Помощь по графику: утром, днём или вечером, почасово, с понятным набором задач.',
    href: '/uslugi/sidelka-bez-prozhivaniya',
    image: null,
  },
  {
    icon: Hospital,
    title: 'Сиделка в больницу',
    desc: 'Присутствие рядом в стационаре: распорядок, процедуры, сопровождение, базовый уход.',
    href: '/uslugi/sidelka-v-bolnicu',
    image: '/service-hospital.jpg',
  },
  {
    icon: BedDouble,
    title: 'Сиделка для лежачего больного',
    desc: 'Уход, профилактика пролежней, гигиена, контроль приёма лекарств, питание, помощь семье.',
    href: '/uslugi/sidelka-dlya-lezhachego',
    image: null,
  },
  {
    icon: UserCircle,
    title: 'Сиделка для пожилых',
    desc: 'Забота, общение, наблюдение, помощь по дому, сопровождение на прогулках и по делам.',
    href: '/uslugi/sidelka-dlya-pozhilyh',
    image: '/service-elderly.jpg',
  },
  {
    icon: HeartPulse,
    title: 'Уход за больными',
    desc: 'Когда нужен регулярный уход и контроль, но семья не может быть рядом постоянно.',
    href: '/uslugi/uhod-za-bolnymi',
    image: null,
  },
  {
    icon: SmilePlus,
    title: 'Уход за пожилыми',
    desc: 'Помощь при возрастных изменениях и снижении самостоятельности, поддержка режима.',
    href: '/uslugi/uhod-za-pozhilymi',
    image: null,
  },
  {
    icon: Briefcase,
    title: 'Помощник по хозяйству',
    desc: 'Уборка и бытовые задачи. Можно отдельно или вместе с уходом за подопечным.',
    href: '/uslugi/pomoshnik-po-hozyaystvu',
    image: null,
  },
  {
    icon: ShieldCheck,
    title: 'Сиделки без посредников',
    desc: 'Подбираем специалиста напрямую из собственной базы, с сопровождением менеджера.',
    href: '/uslugi/sidelki-bez-posrednikov',
    image: null,
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        title="Услуги сиделок и помощниц по дому в Москве и области"
        subtitle="Если уход нужен срочно или вы устали «держать всё на себе», мы подключимся: подберём сиделку на дом, в больницу, с проживанием или приходящую."
        breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Услуги' }]}
      />

      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.href}
                className="group bg-white border border-[#D9D3CA] hover:border-[#C9A87C] hover:shadow-lg hover:-translate-y-1 transition-all duration-400 overflow-hidden"
              >
                {s.image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 lg:p-8">
                  <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1B3A2F] transition-colors duration-300">
                    <s.icon size={24} className="text-[#C9A87C]" />
                  </div>
                  <h3 className="font-display text-xl text-[#2C241B] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#6B5F4F] leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-sm font-medium text-[#1B3A2F] group-hover:text-[#C9A87C] transition-colors">
                    Подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EFEBE5] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl text-[#2C241B] mb-4">
            Не уверены, какой формат нужен?
          </h3>
          <p className="text-[#6B5F4F] mb-6">
            Оставьте заявку — менеджер бесплатно подскажет вариант и сориентирует по стоимости.
          </p>
        </div>
      </section>

      {/* Форма */}
      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="w-16 h-0.5 bg-[#C9A87C] mb-6" />
              <h2 className="font-display text-3xl text-[#2C241B] mb-4">Оставьте заявку</h2>
              <p className="text-[#6B5F4F] leading-relaxed">
                Мы перезвоним в течение 15 минут и подберём оптимальный вариант ухода.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
