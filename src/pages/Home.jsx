import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Ear, Disc3, Check, Shield, ChevronLeft, ChevronRight, Microscope, Globe, Award } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Home() {
  const { t, lang } = useLang();
  const [baSlide, setBaSlide] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, rgba(20,184,166,0.15) 30%, transparent 60%)' }}
          />
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-black/30" />
        </div>

        {/* ISO Badge - like EyeArt */}
        <div className="absolute top-28 start-8 sm:start-12 lg:start-auto lg:end-[8%] lg:top-32 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-teal-light" />
              <div>
                <p className="text-white text-xs font-bold">{lang === 'en' ? 'Internationally Certified' : 'معتمد دولياً'}</p>
                <p className="text-white/50 text-[10px]">ISO 13485</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-brand text-white text-sm font-semibold rounded-full no-underline hover:bg-teal-dark transition-colors"
              >
                {t.hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-full no-underline hover:bg-white/10 transition-colors"
              >
                {t.hero.cta2}
              </Link>
            </div>

            {/* Floating quality badge - like EyeArt */}
            <div className="mt-10 animate-fade-up delay-400">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <Award size={18} className="text-teal-light" />
                <span className="text-white/70 text-xs">{lang === 'en' ? 'Guaranteed Quality' : 'جودة مضمونة'}</span>
                <span className="text-white/30 mx-1">|</span>
                <span className="text-white/70 text-xs">{lang === 'en' ? 'Handcrafted Artistry' : 'صناعة فنية يدوية'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom of hero - like EyeArt */}
        <div className="absolute bottom-0 inset-x-0 bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { num: '25+', label: t.stats.years },
                { num: '50+', label: t.stats.countries },
                { num: '100K+', label: t.stats.products },
                { num: '99.8%', label: t.stats.quality },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-2xl sm:text-3xl text-white">{stat.num}</p>
                  <p className="text-[10px] tracking-[0.12em] font-semibold text-white/40 mt-1 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - EyeArt style dark/light cards with checkmarks */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">— {t.categories.label} —</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.categories.title}</h2>
            <p className="text-navy/50 mt-3 max-w-xl mx-auto text-sm leading-relaxed">{t.categories.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs text-navy/50"><Check size={14} className="text-teal-brand" />{lang === 'en' ? '25+ Years Experience' : 'خبرة +٢٥ عاماً'}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-navy/50"><Check size={14} className="text-teal-brand" />{lang === 'en' ? 'Personal Care' : 'عناية شخصية'}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-navy/50"><Check size={14} className="text-teal-brand" />{lang === 'en' ? 'World-Class Quality' : 'جودة عالمية'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ocular - Dark card like EyeArt */}
            <Link to="/products" className="group block rounded-2xl overflow-hidden no-underline bg-navy text-white p-8 hover:bg-navy-light transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-wider font-semibold text-white/40 uppercase">{lang === 'en' ? 'Our Specialty' : 'تخصصنا'}</span>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Eye size={22} className="text-teal-light" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">{t.categories.ocular}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{t.categories.ocularDesc}</p>
              <div className="space-y-2.5">
                {(lang === 'en'
                  ? ['Custom handmade design', 'Natural matching to healthy eye', 'Special products & accessories']
                  : ['تصميم وتصنيع يدوي مخصص', 'تطابق طبيعي للعين السليمة', 'منتجات ومستلزمات خاصة']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-teal-light shrink-0" />
                    <span className="text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-teal-light group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* PMMA - Light card */}
            <Link to="/products" className="group block rounded-2xl overflow-hidden no-underline bg-gray-50 text-navy p-8 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-wider font-semibold text-navy/30 uppercase">{lang === 'en' ? 'Dental & Ocular' : 'أسنان وعيون'}</span>
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center">
                  <Disc3 size={22} className="text-teal-brand" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">{t.categories.pmma}</h3>
              <p className="text-sm text-navy/50 leading-relaxed mb-6">{t.categories.pmmaDesc}</p>
              <div className="space-y-2.5">
                {(lang === 'en'
                  ? ['Nano-CAM Multichroma discs', 'Multiple shades (A1-A6)', 'CAD/CAM compatible']
                  : ['أقراص نانو-كام متعددة الألوان', 'درجات متعددة (A1-A6)', 'متوافق مع CAD/CAM']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-teal-brand shrink-0" />
                    <span className="text-xs text-navy/50">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-teal-brand group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Hearing - Dark card */}
            <Link to="/products" className="group block rounded-2xl overflow-hidden no-underline bg-navy text-white p-8 hover:bg-navy-light transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-wider font-semibold text-white/40 uppercase">{lang === 'en' ? 'Audiology' : 'سمعيات'}</span>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Ear size={22} className="text-teal-light" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">{t.categories.hearing}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{t.categories.hearingDesc}</p>
              <div className="space-y-2.5">
                {(lang === 'en'
                  ? ['Precise hearing diagnostics', 'Digital hearing aid fitting', 'Ongoing support & follow-up']
                  : ['قياس وتشخيص دقيق للسمع', 'تركيب وبرمجة سماعات طبية', 'متابعة ودعم مستمر']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-teal-light shrink-0" />
                    <span className="text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-teal-light group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Optical Solutions - Light card spanning 2 cols on lg */}
            <Link to="/products" className="group block rounded-2xl overflow-hidden no-underline bg-gray-50 text-navy p-8 hover:bg-gray-100 transition-colors border border-gray-100 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-wider font-semibold text-navy/30 uppercase">{lang === 'en' ? 'Vision Care' : 'بصريات'}</span>
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center">
                  <Eye size={22} className="text-teal-brand" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">{lang === 'en' ? 'Optical Solutions & Low-Vision Aids' : 'الحلول البصرية ومعينات ضعف البصر'}</h3>
              <p className="text-sm text-navy/50 leading-relaxed mb-6">{lang === 'en' ? 'Advanced solutions for patients with visual impairment — from color blind lenses to magnifying bioptics and prismatic glasses.' : 'حلول متقدمة لمساعدة ضعاف البصر — من عدسات عمى الألوان إلى النظارات المكبرة والموشورية.'}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {(lang === 'en'
                  ? ['Color blind lenses & filters', 'Magnifying glasses (Bioptic)', 'TV & Prismatic glasses', 'Droopy eyelid glasses']
                  : ['عدسات وفلاتر عمى الألوان', 'نظارات مكبرة (بيوبتك)', 'نظارات تلفزيون وموشورية', 'نظارات الجفون المتدلية']
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-teal-brand shrink-0" />
                    <span className="text-xs text-navy/50">{item}</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">{lang === 'en' ? 'Factory Image' : 'صورة المصنع'}</span>
              </div>
              <div className="absolute -bottom-4 -end-4 sm:bottom-4 sm:end-4 bg-white rounded-xl shadow-lg p-4">
                <p className="text-[10px] tracking-[0.15em] font-semibold text-navy/40 uppercase">{t.manufacturing.established}</p>
                <p className="font-display text-xl text-teal-brand">{t.manufacturing.since}</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">— {t.manufacturing.label} —</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy leading-tight">{t.manufacturing.title}</h2>
              <p className="text-navy/50 mt-4 text-sm leading-relaxed">{t.manufacturing.desc}</p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                    <Microscope size={22} className="text-teal-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{t.manufacturing.qualityControl}</h4>
                    <p className="text-navy/50 text-sm mt-1">{t.manufacturing.qualityControlDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                    <Globe size={22} className="text-teal-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{t.manufacturing.globalDist}</h4>
                    <p className="text-navy/50 text-sm mt-1">{t.manufacturing.globalDistDesc}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full no-underline hover:bg-navy-light transition-colors">
                {t.manufacturing.learnMore} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">— {t.beforeAfter.label} —</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.beforeAfter.title}</h2>
            <p className="text-navy/50 mt-3 max-w-lg mx-auto text-sm">{t.beforeAfter.subtitle}</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[baSlide * 2, baSlide * 2 + 1].filter(i => i < 4).map(i => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{t.beforeAfter.before}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-navy/80 text-white text-xs font-semibold rounded-md">
                      {t.beforeAfter.before}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-teal-brand/15 to-teal-brand/5 flex items-center justify-center">
                      <span className="text-teal-brand/50 text-sm">{t.beforeAfter.after}</span>
                    </div>
                    <div className="absolute top-3 start-3 px-3 py-1 bg-teal-brand text-white text-xs font-semibold rounded-md">
                      {t.beforeAfter.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setBaSlide(s => Math.max(0, s - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/50 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white disabled:opacity-30"
                disabled={baSlide === 0}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-navy/40">{baSlide + 1} / 2</span>
              <button
                onClick={() => setBaSlide(s => Math.min(1, s + 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy/50 hover:text-navy hover:border-gray-300 transition-colors cursor-pointer bg-white disabled:opacity-30"
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
          <div className="cta-gradient rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -end-20 w-64 h-64 rounded-full bg-white/20" />
              <div className="absolute -bottom-10 -start-10 w-40 h-40 rounded-full bg-white/10" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl text-white">{t.cta.title}</h2>
              <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm leading-relaxed">{t.cta.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-brand text-sm font-semibold rounded-full no-underline hover:bg-white/90 transition-colors"
                >
                  {t.cta.btn1} <ArrowRight size={16} />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full no-underline hover:bg-white/10 transition-colors"
                >
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
