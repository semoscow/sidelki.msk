import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, FileText } from 'lucide-react'

const serviceLinks = [
  { label: 'Сиделка с проживанием', href: '/uslugi/sidelka-s-prozhivaniem' },
  { label: 'Сиделка без проживания', href: '/uslugi/sidelka-bez-prozhivaniya' },
  { label: 'Сиделка в больницу', href: '/uslugi/sidelka-v-bolnicu' },
  { label: 'Сиделка для лежачего', href: '/uslugi/sidelka-dlya-lezhachego' },
  { label: 'Сиделка для пожилых', href: '/uslugi/sidelka-dlya-pozhilyh' },
  { label: 'Уход за больными', href: '/uslugi/uhod-za-bolnymi' },
  { label: 'Уход за пожилыми', href: '/uslugi/uhod-za-pozhilymi' },
  { label: 'Помощник по хозяйству', href: '/uslugi/pomoshnik-po-hozyaystvu' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* О компании */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">ПРЕМИУМ СИДЕЛКИ</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Патронажная служба для Москвы и области. Подбираем сиделок с проживанием, приходящих,
              в больницу — с проверкой персонала и ответственностью по договору.
            </p>
            <div className="flex items-center gap-2 text-[#C9A87C]">
              <span className="text-2xl font-display font-semibold">5.0</span>
              <span className="text-sm text-white/60">Рейтинг в Яндексе</span>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50 mb-4">Услуги</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-[#C9A87C] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <div className="text-sm text-white/70">
                  <a href="tel:+79017677650" className="hover:text-[#C9A87C] transition-colors block">+7 (901) 767-76-50</a>
                  <a href="tel:84999645118" className="hover:text-[#C9A87C] transition-colors block">8 (499) 964-51-18</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">с 8.00 до 21.00 без выходных</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A87C] mt-0.5 shrink-0" />
                <div className="text-sm text-white/70 space-y-1">
                  <p>г. Москва, ул. Арбат, д. 6/2, пом. 1/1/4 (4 этаж)</p>
                  <p>Подольск, б-р 65-лет Победы, д. 1</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Документы */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50 mb-4">Документы</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-[#C9A87C]" />
                <Link to="/privacy-policy" className="text-sm text-white/70 hover:text-[#C9A87C] transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                ИП Семенов Евгений Владимирович<br />
                ИНН: 502103181902
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            ИП Семенов Е.В. ИНН: 502103181902
          </p>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Премиум Сиделки. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
