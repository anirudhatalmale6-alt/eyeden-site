import { Link } from 'react-router-dom';
import { Crosshair, Heart, Globe, Shield, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const VALUE_ICONS = {
  precision: Crosshair,
  patient: Heart,
  global: Globe,
  certified: Shield,
  innovation: Lightbulb,
  expert: Users,
};

export default function About() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.aboutPage.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">{t.aboutPage.title}</h1>
          <p className="text-navy/50 mt-6 text-base leading-relaxed">{t.aboutPage.intro}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Factory Image</span>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.aboutPage.missionLabel}</p>
              <h2 className="font-display text-2xl sm:text-3xl text-navy leading-snug">{t.aboutPage.missionTitle}</h2>
              <p className="text-navy/50 mt-4 text-sm leading-relaxed">{t.aboutPage.missionP1}</p>
              <p className="text-navy/50 mt-3 text-sm leading-relaxed">{t.aboutPage.missionP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.aboutPage.valuesLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.aboutPage.valuesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(t.aboutPage.values).map(([key, val]) => {
              const Icon = VALUE_ICONS[key];
              return (
                <div key={key} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-brand/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-teal-brand" />
                  </div>
                  <h3 className="font-display text-lg text-navy">{val.title}</h3>
                  <p className="text-sm text-navy/50 mt-2 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.aboutPage.milestonesLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{t.aboutPage.milestonesTitle}</h2>
          </div>

          <div className="relative">
            <div className="absolute start-6 sm:start-8 top-0 bottom-0 w-0.5 timeline-line" />
            <div className="space-y-10">
              {t.aboutPage.milestones.map((ms, i) => (
                <div key={i} className="flex gap-6 sm:gap-8">
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-teal-brand flex items-center justify-center shrink-0">
                      <span className="text-white text-xs sm:text-sm font-bold">{ms.year}</span>
                    </div>
                  </div>
                  <div className="pt-3 sm:pt-4">
                    <p className="text-navy/70 text-sm leading-relaxed">{ms.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-brand text-white text-sm font-semibold rounded-full no-underline hover:bg-teal-dark transition-colors"
          >
            {t.cta.btn1} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
