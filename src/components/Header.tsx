import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Clock } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Преимущества', href: '/#preimushchestva' },
  { label: 'Цены', href: '/#tseny' },
  { label: 'Отзывы', href: '/#otzyvy' },
  { label: 'Контакты', href: '/#kontakty' },
  { label: 'Вакансии', href: '/vakansii' },
  { label: 'Блог', href: '/blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (isHome) {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        e.preventDefault()
        window.location.href = '/' + href
      }
    }
  }

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1B3A2F] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#C9A87C]" />
            <span className="opacity-90">с 8.00 до 21.00 без выходных</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+79017677650" className="flex items-center gap-2 hover:text-[#C9A87C] transition-colors">
              <Phone size={14} />
              <span>+7 (901) 767-76-50</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`bg-[#F7F3EE] border-b border-[#D9D3CA] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-lg lg:text-xl font-semibold text-[#1B3A2F] tracking-tight leading-tight">
              ПРЕМИУМ СИДЕЛКИ
            </span>
            <span className="text-[11px] text-[#9A8F80] tracking-wide">Москва и область</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-sm font-medium text-[#2C241B] hover:text-[#C9A87C] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-[#1B3A2F]">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#F7F3EE] w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-[#D9D3CA]">
                    <span className="font-display text-lg font-semibold text-[#1B3A2F]">Меню</span>
                    <button onClick={() => setOpen(false)} className="p-1 text-[#1B3A2F]">
                      <X size={20} />
                    </button>
                  </div>
                  <nav className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={(e) => {
                          handleAnchor(e, link.href)
                          setOpen(false)
                        }}
                        className="py-3 px-2 text-[#2C241B] hover:text-[#C9A87C] hover:bg-[#EFEBE5] transition-colors text-base font-medium border-b border-[#D9D3CA]/50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t border-[#D9D3CA]">
                    <a href="tel:+79017677650" className="flex items-center gap-2 text-[#1B3A2F] font-medium">
                      <Phone size={16} className="text-[#C9A87C]" />
                      +7 (901) 767-76-50
                    </a>
                    <p className="text-xs text-[#9A8F80] mt-2">с 8.00 до 21.00 без выходных</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
