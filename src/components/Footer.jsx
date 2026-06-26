import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

function EyedenLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="12" stroke="url(#logo-grad)" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="20" cy="20" r="6" fill="url(#logo-grad)" opacity="0.8" />
      <circle cx="20" cy="20" r="2.5" fill="#0a0f1a" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <>
      {/* CTA Bar above footer */}
      <section className="bg-teal-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="font-display text-2xl sm:text-3xl text-white text-center sm:text-start">
            {lang === 'en' ? 'Begin a conversation with the Eyeden team.' : 'ابدأ محادثة مع فريق آيدن.'}
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-brand text-sm font-bold rounded-full no-underline hover:bg-white/90 transition-colors tracking-[0.1em] uppercase shrink-0"
          >
            {lang === 'en' ? 'Contact Us' : 'تواصل معنا'} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5" dir="ltr">
                <EyedenLogo />
                <div>
                  <span className="text-lg tracking-[0.2em] font-semibold">EYE</span>
                  <span className="text-lg tracking-[0.2em] font-semibold text-teal-light">DEN</span>
                  <span className="block text-[10px] tracking-[0.3em] font-light text-white/40 uppercase">Group</span>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] font-bold text-white/30 mb-5 uppercase">{t.footer.navigate}</h4>
              <div className="space-y-3">
                <Link to="/" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.home}</Link>
                <Link to="/products" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.productsNav}</Link>
                <Link to="/about" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.aboutUs}</Link>
                <Link to="/contact" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.contact}</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] font-bold text-white/30 mb-5 uppercase">{t.footer.productsLabel}</h4>
              <div className="space-y-3">
                <Link to="/products" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.eyeProstheses}</Link>
                <Link to="/products" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.pmmaBlocks}</Link>
                <Link to="/products" className="block text-sm text-white/60 hover:text-white no-underline transition-colors">{t.footer.hearingAids}</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] font-bold text-white/30 mb-5 uppercase">{t.footer.contactLabel}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-teal-light shrink-0" />
                  <span className="text-sm text-white/60">info@eyedengroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-teal-light shrink-0" />
                  <span className="text-sm text-white/60" dir="ltr">+20 112 080 5175</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-teal-light shrink-0" />
                  <span className="text-sm text-white/60" dir="ltr">+20 105 522 2638</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-teal-light shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">{t.contactPage.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">{t.footer.rights}</p>
            <p className="text-[10px] tracking-[0.25em] text-white/20 uppercase">Precision · Biocompatibility · Clarity</p>
          </div>
        </div>
      </footer>
    </>
  );
}
