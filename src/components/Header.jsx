import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/products', label: t.nav.products },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-1 no-underline">
            <span className="text-lg sm:text-xl tracking-[0.25em] font-semibold text-navy">
              EYEDEN
            </span>
            <span className="text-lg sm:text-xl tracking-[0.15em] font-light text-navy/60 ms-1">
              GROUP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] tracking-[0.12em] font-medium no-underline transition-colors ${
                  isActive(link.to)
                    ? 'text-teal-brand'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs tracking-wider font-medium border border-gray-200 rounded-full text-navy/70 hover:text-navy hover:border-gray-300 transition-all cursor-pointer bg-transparent"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-[13px] font-semibold bg-teal-brand text-white rounded-full no-underline hover:bg-teal-dark transition-colors"
            >
              {t.nav.getInTouch}
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-navy bg-transparent border-none cursor-pointer"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium no-underline py-2 ${
                  isActive(link.to) ? 'text-teal-brand' : 'text-navy/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => { toggleLang(); setOpen(false); }}
                className="flex-1 py-2.5 text-sm border border-gray-200 rounded-full text-navy/70 cursor-pointer bg-transparent"
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 py-2.5 text-sm font-semibold bg-teal-brand text-white rounded-full no-underline text-center"
              >
                {t.nav.getInTouch}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
