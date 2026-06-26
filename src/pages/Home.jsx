import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Ear, Disc3, Check, Shield, ChevronLeft, ChevronRight, Microscope, Globe, Award, Play } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Home() {
  const { t, lang } = useLang();
  const [baSlide, setBaSlide] = useState(0);

  return (
    <>
      {/* Hero with video background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1a]">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%230a0f1a'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.pixabay.com/video/2024/03/19/204753-925234498_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent" />

        {/* ISO Badge */}
        <div className="absolute top-28 end-8 sm:end-12 z-10 hidden lg:block">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 glow-pulse">
            <div className="flex items-center gap-3">
              <Shield size={22} className="text-teal-light" />
              <div>
                <p className="text-white text-xs font-bold tracking-wide">{lang === 'en' ? 'Internationally Certified' : 'معتمد دولياً'}</p>
                <p className="text-white/40 text-[10px] mt-0.5">ISO 13485 · CE · FDA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] font-bold text-teal-light mb-8 uppercase animate-fade-up">
              {t.hero.slogan}
            </p>
            <h1 className="animate-fade-up delay-100">
              <span className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] text-white/80 italic block">{t.hero.h1_1}</span>
              <span className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] text-white block mt-2">{t.hero.h1_2}</span>
              <span className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] text-teal-light block mt-2">{t.hero.h1_3}</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mt-8 max-w-lg animate-fade-up delay-200">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up delay-300">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-brand text-white text-sm font-bold rounded-full no-underline hover:bg-teal-light hover:text-[#0a0f1a] transition-all tracking-wide"
              >
                {t.hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 text-sm font-medium rounded-full no-underline hover:bg-white/5 hover:border-white/40 transition-all"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 bg-black/30 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { num: '25+', label: t.stats.years },
                { num: '50+', label: t.stats.countries },
                { num: '100K+', label: t.stats.products },
                { num: '99.8%', label: t.stats.quality },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-2xl sm:text-3xl text-white">{stat.num}</p>
                  <p className="text-[10px] tracking-[0.15em] font-bold text-white/30 mt-1 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - dark/light cards */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] font-bold text-teal-brand mb-4">— {t.categories.label} —</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">{t.categories.title}</h2>
            <p className="text-navy/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed">{t.categories.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Ocular - Dark */}
            <Link to="/products" className="group block rounded-2xl no-underline bg-[#0f1729] text-white p-8 hover:bg-[#131d35] transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase">{lang === 'en' ? 'Our Specialty' : 'تخصصنا'}</span>
                <div className="w-12 h-12 rounded-xl bg-teal-brand/15 flex items-center justify-center">
                  <Eye size={22} className="text-teal-light" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-3">{t.categories.ocular}</h3>
              <p className="text-[13px] text-white/40 leading-relaxed mb-6">{t.categories.ocularDesc}</p>
              <div className="space-y-3">
                {(lang === 'en'
                  ? ['Custom handmade design', 'Natural matching to healthy eye', 'Special products & accessories']
                  : ['تصميم وتصنيع يدوي مخصص', 'تطابق طبيعي للعين السليمة', 'منتجات ومستلزمات خاصة']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check size={14} className="text-teal-light shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-white/5">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-light tracking-wide group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* PMMA - Light */}
            <Link to="/products" className="group block rounded-2xl no-underline bg-[#f8f9fa] text-navy p-8 hover:bg-[#f0f1f3] transition-all border border-gray-100/80 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.2em] font-bold text-navy/20 uppercase">{lang === 'en' ? 'Dental & Ocular' : 'أسنان وعيون'}</span>
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center">
                  <Disc3 size={22} className="text-teal-brand" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-3">{t.categories.pmma}</h3>
              <p className="text-[13px] text-navy/40 leading-relaxed mb-6">{t.categories.pmmaDesc}</p>
              <div className="space-y-3">
                {(lang === 'en'
                  ? ['Nano-CAM Multichroma discs', 'Multiple shades (A1-A6)', 'CAD/CAM compatible']
                  : ['أقراص نانو-كام متعددة الألوان', 'درجات متعددة (A1-A6)', 'متوافق مع CAD/CAM']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check size={14} className="text-teal-brand shrink-0" />
                    <span className="text-xs text-navy/40">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-gray-200/60">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-brand tracking-wide group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Hearing - Dark */}
            <Link to="/products" className="group block rounded-2xl no-underline bg-[#0f1729] text-white p-8 hover:bg-[#131d35] transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase">{lang === 'en' ? 'Audiology' : 'سمعيات'}</span>
                <div className="w-12 h-12 rounded-xl bg-teal-brand/15 flex items-center justify-center">
                  <Ear size={22} className="text-teal-light" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-3">{t.categories.hearing}</h3>
              <p className="text-[13px] text-white/40 leading-relaxed mb-6">{t.categories.hearingDesc}</p>
              <div className="space-y-3">
                {(lang === 'en'
                  ? ['Precise hearing diagnostics', 'Digital hearing aid fitting', 'Ongoing support & follow-up']
                  : ['قياس وتشخيص دقيق للسمع', 'تركيب وبرمجة سماعات طبية', 'متابعة ودعم مستمر']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check size={14} className="text-teal-light shrink-0" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-white/5">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-light tracking-wide group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>

          {/* Optical - Wide light card */}
          <Link to="/products" className="group block rounded-2xl no-underline bg-[#f8f9fa] text-navy p-8 hover:bg-[#f0f1f3] transition-all border border-gray-100/80 mt-5 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] tracking-[0.2em] font-bold text-navy/20 uppercase">{lang === 'en' ? 'Vision Care' : 'بصريات'}</span>
              <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center">
                <Eye size={22} className="text-teal-brand" />
              </div>
            </div>
            <h3 className="font-display text-xl mb-3">{lang === 'en' ? 'Optical Solutions & Low-Vision Aids' : 'الحلول البصرية ومعينات ضعف البصر'}</h3>
            <p className="text-[13px] text-navy/40 leading-relaxed mb-6 max-w-2xl">{lang === 'en' ? 'Advanced solutions for patients with visual impairment — from color blind lenses to magnifying bioptics and prismatic glasses.' : 'حلول متقدمة لمساعدة ضعاف البصر — من عدسات عمى الألوان إلى النظارات المكبرة والموشورية.'}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(lang === 'en'
                ? ['Color blind lenses & filters', 'Magnifying glasses (Bioptic)', 'TV & Prismatic glasses', 'Droopy eyelid glasses']
                : ['عدسات وفلاتر عمى الألوان', 'نظارات مكبرة (بيوبتك)', 'نظارات تلفزيون وموشورية', 'نظارات الجفون المتدلية']
              ).map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-teal-brand shrink-0" />
                  <span className="text-xs text-navy/40">{item}</span>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="relative py-32 bg-[#0a0f1a] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%230a0f1a'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.pixabay.com/video/2020/07/30/45603-446184498_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0a0f1a]/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] tracking-[0.3em] font-bold text-teal-light mb-4">— {t.manufacturing.label} —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">{t.manufacturing.title}</h2>
          <p className="text-white/40 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">{t.manufacturing.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <Microscope size={28} className="text-teal-light mx-auto mb-4" />
              <h4 className="text-white font-semibold text-sm">{t.manufacturing.qualityControl}</h4>
              <p className="text-white/30 text-xs mt-2 leading-relaxed">{t.manufacturing.qualityControlDesc}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <Globe size={28} className="text-teal-light mx-auto mb-4" />
              <h4 className="text-white font-semibold text-sm">{t.manufacturing.globalDist}</h4>
              <p className="text-white/30 text-xs mt-2 leading-relaxed">{t.manufacturing.globalDistDesc}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <Award size={28} className="text-teal-light mx-auto mb-4" />
              <h4 className="text-white font-semibold text-sm">{t.manufacturing.established}</h4>
              <p className="text-white/30 text-xs mt-2 leading-relaxed">{t.manufacturing.since}</p>
            </div>
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-teal-brand text-white text-sm font-bold rounded-full no-underline hover:bg-teal-light hover:text-[#0a0f1a] transition-all tracking-wide">
            {t.manufacturing.learnMore} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 sm:py-32 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] font-bold text-teal-brand mb-4">— {t.beforeAfter.label} —</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.beforeAfter.title}</h2>
            <p className="text-navy/40 mt-3 max-w-lg mx-auto text-sm">{t.beforeAfter.subtitle}</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[baSlide * 2, baSlide * 2 + 1].filter(i => i < 4).map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">{t.beforeAfter.before}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-[#0f1729]/90 text-white text-[11px] font-bold tracking-wide rounded-md">
                      {t.beforeAfter.before}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-teal-brand/10 to-teal-light/5 flex items-center justify-center">
                      <span className="text-teal-brand/40 text-sm">{t.beforeAfter.after}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-teal-brand text-white text-[11px] font-bold tracking-wide rounded-md">
                      {t.beforeAfter.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button onClick={() => setBaSlide(s => Math.max(0, s - 1))} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/40 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white disabled:opacity-20" disabled={baSlide === 0}><ChevronLeft size={18} /></button>
              <span className="text-xs text-navy/30 tracking-wider font-bold">{baSlide + 1} / 2</span>
              <button onClick={() => setBaSlide(s => Math.min(1, s + 1))} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/40 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white disabled:opacity-20" disabled={baSlide === 1}><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f1729] rounded-3xl p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 end-0 w-80 h-80 rounded-full bg-teal-brand/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 start-0 w-60 h-60 rounded-full bg-teal-brand/5 translate-y-1/2 -translate-x-1/3" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">{t.cta.title}</h2>
              <p className="text-white/40 mt-5 max-w-xl mx-auto text-sm leading-relaxed">{t.cta.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-brand text-white text-sm font-bold rounded-full no-underline hover:bg-teal-light hover:text-[#0a0f1a] transition-all tracking-wide">
                  {t.cta.btn1} <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-sm font-medium rounded-full no-underline hover:bg-white/5 hover:border-white/30 transition-all">
                  {t.cta.btn2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
