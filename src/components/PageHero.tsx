import { Link } from 'react-router-dom'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div className="bg-[#1B3A2F] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="text-white/50 hover:text-[#C9A87C] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
