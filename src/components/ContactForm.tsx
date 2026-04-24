import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white p-8 lg:p-10 shadow-lg">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#1B3A2F] text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4 className="font-display text-xl text-[#1B3A2F] mb-2">Спасибо за заявку!</h4>
          <p className="text-[#6B5F4F] text-sm">Менеджер свяжется с вами в течение 15 минут.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.08em] text-[#9A8F80] mb-2">
              Имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b border-[#D9D3CA] bg-transparent py-3 text-[#2C241B] focus:outline-none focus:border-[#1B3A2F] transition-colors"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.08em] text-[#9A8F80] mb-2">
              Телефон
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-b border-[#D9D3CA] bg-transparent py-3 text-[#2C241B] focus:outline-none focus:border-[#1B3A2F] transition-colors"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.08em] text-[#9A8F80] mb-2">
              Комментарий <span className="normal-case text-[#9A8F80]/60">(необязательно)</span>
            </label>
            <textarea
              rows={3}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full border-b border-[#D9D3CA] bg-transparent py-3 text-[#2C241B] focus:outline-none focus:border-[#1B3A2F] transition-colors resize-none"
              placeholder="Опишите ситуацию"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1B3A2F] text-white py-4 px-8 text-sm font-medium uppercase tracking-[0.04em] hover:bg-[#142D24] hover:-translate-y-0.5 transition-all duration-300"
          >
            Подобрать сиделку
          </button>
          <p className="text-xs text-[#9A8F80] text-center">
            Отправляя данную форму Вы даете согласие на обработку Ваших данных.{` `}
            <Link to="/privacy-policy" className="underline hover:text-[#1B3A2F] transition-colors">
              Политика конфиденциальности
            </Link>
          </p>
        </form>
      )}
    </div>
  )
}
