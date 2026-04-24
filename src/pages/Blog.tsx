import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const articles = [
  {
    slug: 'kak-vybrat-sidelku',
    title: 'Как выбрать сиделку для пожилого родственника',
    excerpt: 'Практические советы по подбору сиделки: на что обратить внимание, какие вопросы задать, как проверить квалификацию.',
    tag: 'Советы',
    date: '15 марта 2025',
    image: '/blog-1.jpg',
  },
  {
    slug: 'uhod-za-lezhachim',
    title: 'Уход за лежачим больным: основные правила',
    excerpt: 'Профилактика пролежней, правильное питание, гигиена и психологическая поддержка — всё, что нужно знать семье.',
    tag: 'Медицина',
    date: '28 февраля 2025',
    image: '/blog-2.jpg',
  },
  {
    slug: 'sidelka-v-bolnice',
    title: 'Что входит в обязанности сиделки в больнице',
    excerpt: 'Разбираем, чем сиделка в стационаре отличается от медсестры и какие задачи берёт на себя.',
    tag: 'Стационар',
    date: '10 февраля 2025',
    image: '/blog-3.jpg',
  },
  {
    slug: 'uhod-s-prozhivaniem',
    title: 'Как организовать уход с проживанием',
    excerpt: 'Подготовка комнаты, адаптация сиделки, распределение обязанностей — гид для семьи.',
    tag: 'Проживание',
    date: '5 января 2025',
    image: '/blog-4.jpg',
  },
  {
    slug: 'psihologicheskaya-podderzhka',
    title: 'Психологическая поддержка пожилых людей',
    excerpt: 'Как сиделка помогает не только физически, но и эмоционально — о важности человеческого тепла в уходе.',
    tag: 'Психология',
    date: '20 декабря 2024',
    image: '/blog-5.jpg',
  },
  {
    slug: 'reabilitaciya-posle-insulta',
    title: 'Реабилитация после инсульта дома',
    excerpt: 'Как организовать реабилитацию в домашних условиях: упражнения, режим, питание и мотивация.',
    tag: 'Реабилитация',
    date: '15 декабря 2024',
    image: '/blog-6.jpg',
  },
]

export default function Blog() {
  return (
    <div>
      <PageHero
        title="Полезные статьи"
        subtitle="Практические материалы об уходе за пожилыми и больными, советы по выбору сиделки и организации помощи в Москве."
        breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Блог' }]}
      />

      <section className="bg-[#F7F3EE] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <Link
                key={i}
                to={`/blog/${a.slug}`}
                className="group bg-white border border-[#D9D3CA] hover:border-[#C9A87C] hover:shadow-lg transition-all duration-400 overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#C9A87C]">{a.tag}</span>
                    <span className="text-xs text-[#9A8F80]">{a.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-[#2C241B] mb-2 group-hover:text-[#C9A87C] transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[#6B5F4F] leading-relaxed line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
