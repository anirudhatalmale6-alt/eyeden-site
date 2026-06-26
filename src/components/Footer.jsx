import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-lg tracking-[0.25em] font-semibold">EYEDEN</span>
              <span className="text-lg tracking-[0.15em] font-light text-white/50 ms-1">GROUP</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{t.footer.desc}</p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold text-white/40 mb-4 uppercase">{t.footer.navigate}</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.home}</Link>
              <Link to="/products" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.productsNav}</Link>
              <Link to="/about" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.aboutUs}</Link>
              <Link to="/contact" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold text-white/40 mb-4 uppercase">{t.footer.productsLabel}</h4>
            <div className="space-y-3">
              <Link to="/products" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.eyeProstheses}</Link>
              <Link to="/products" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.pmmaBlocks}</Link>
              <Link to="/products" className="block text-sm text-white/70 hover:text-white no-underline transition-colors">{t.footer.hearingAids}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold text-white/40 mb-4 uppercase">{t.footer.contactLabel}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-teal-light shrink-0" />
                <span className="text-sm text-white/70">info@eyedengroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-teal-light shrink-0" />
                <span className="text-sm text-white/70" dir="ltr">01055222638</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-teal-light shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{t.contactPage.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <span className="text-xs px-3 py-1.5 border border-white/20 rounded-full text-white/50">ISO 13485</span>
            <span className="text-xs px-3 py-1.5 border border-white/20 rounded-full text-white/50">CE Certified</span>
            <span className="text-xs px-3 py-1.5 border border-white/20 rounded-full text-white/50">FDA Registered</span>
          </div>
          <p className="text-xs text-white/40">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
