import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Microscope, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

function ProductPlaceholder({ label, gradient }) {
  return (
    <div className={`w-full aspect-[4/3] rounded-xl flex items-center justify-center text-white/80 text-sm font-medium ${gradient}`}>
      {label}
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const [baSlide, setBaSlide] = useState(0);

  const baSlides = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 30%, transparent 60%)' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] font-semibold text-teal-light mb-6 animate-fade-up">
              {t.hero.slogan}
            </p>
            <h1 className="animate-fade-up delay-100">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-white/90 italic block">{t.hero.h1_1}</span>
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-bold block mt-1">{t.hero.h1_2}</span>
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-teal-light block mt-1">{t.hero.h1_3}</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-6 max-w-lg animate-fade-up delay-200">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up delay-300">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-brand text-white text-sm font-semibold rounded-full no-underline hover:bg-teal-dark transition-colors"
              >
                {t.hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-full no-underline hover:bg-white/10 transition-colors"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.categories.label}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.categories.title}</h2>
            <p className="text-navy/50 mt-3 max-w-xl mx-auto text-sm leading-relaxed">{t.categories.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: 'ocular', gradient: 'bg-gradient-to-br from-teal-brand/80 to-navy', name: t.categories.ocular, desc: t.categories.ocularDesc },
              { key: 'pmma', gradient: 'bg-gradient-to-br from-slate-600 to-slate-800', name: t.categories.pmma, desc: t.categories.pmmaDesc },
              { key: 'hearing', gradient: 'bg-gradient-to-br from-navy-light to-navy', name: t.categories.hearing, desc: t.categories.hearingDesc },
            ].map((cat, i) => (
              <Link key={cat.key} to="/products" className={`product-card group block bg-white rounded-2xl border border-gray-100 overflow-hidden no-underline animate-fade-up delay-${(i+1)*100}`}>
                <ProductPlaceholder label={cat.name} gradient={cat.gradient} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-navy">{cat.name}</h3>
                    <ArrowRight size={16} className="text-navy/30 group-hover:text-teal-brand transition-colors" />
                  </div>
                  <p className="text-sm text-navy/50 mt-2 leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '25+', label: t.stats.years },
              { num: '50+', label: t.stats.countries },
              { num: '100K+', label: t.stats.products },
              { num: '99.8%', label: t.stats.quality },
            ].map((stat, i) => (
              <div key={i} className={`animate-fade-up delay-${(i+1)*100}`}>
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">{stat.num}</p>
                <p className="text-[11px] tracking-[0.15em] font-semibold text-white/50 mt-2 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Factory Image</span>
              </div>
              <div className="absolute -bottom-4 -end-4 sm:bottom-4 sm:end-4 bg-white rounded-xl shadow-lg p-4">
                <p className="text-[10px] tracking-[0.15em] font-semibold text-navy/40 uppercase">{t.manufacturing.established}</p>
                <p className="font-display text-xl text-teal-brand">{t.manufacturing.since}</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.manufacturing.label}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy leading-tight">{t.manufacturing.title}</h2>
              <p className="text-navy/50 mt-4 text-sm leading-relaxed">{t.manufacturing.desc}</p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                    <Microscope size={20} className="text-teal-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{t.manufacturing.qualityControl}</h4>
                    <p className="text-navy/50 text-sm mt-1">{t.manufacturing.qualityControlDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-teal-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{t.manufacturing.globalDist}</h4>
                    <p className="text-navy/50 text-sm mt-1">{t.manufacturing.globalDistDesc}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-teal-brand text-sm font-semibold no-underline hover:gap-3 transition-all">
                {t.manufacturing.learnMore} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.beforeAfter.label}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.beforeAfter.title}</h2>
            <p className="text-navy/50 mt-3 max-w-lg mx-auto text-sm">{t.beforeAfter.subtitle}</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[baSlide * 2, baSlide * 2 + 1].filter(i => i < 4).map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{t.beforeAfter.before}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-navy/80 text-white text-xs font-semibold rounded-md">
                      {t.beforeAfter.before}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-teal-brand/20 to-teal-brand/10 flex items-center justify-center">
                      <span className="text-teal-brand/60 text-sm">{t.beforeAfter.after}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-teal-brand/80 text-white text-xs font-semibold rounded-md">
                      {t.beforeAfter.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setBaSlide(s => Math.max(0, s - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/50 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white"
                disabled={baSlide === 0}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-navy/40">{baSlide + 1} / 2</span>
              <button
                onClick={() => setBaSlide(s => Math.min(1, s + 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/50 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white"
                disabled={baSlide === 1}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-gradient rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-white">{t.cta.title}</h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm leading-relaxed">{t.cta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-brand text-sm font-semibold rounded-full no-underline hover:bg-white/90 transition-colors"
              >
                {t.cta.btn1} <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium rounded-full no-underline hover:bg-white/10 transition-colors"
              >
                {t.cta.btn2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
