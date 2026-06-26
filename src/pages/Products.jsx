import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const PRODUCT_CATEGORIES = {
  ocular: ['custom3d', 'readyMade', 'semiFinished', 'softEye', 'ultraThin', 'transparentPupil', 'customHD', 'transparentSclera', 'orbital'],
  implants: ['sphericalImplant', 'structurePMMA', 'peggedPMMA', 'conformers'],
  accessories: ['digitalIris', 'irisDisc', 'irisesBox', 'measurementBox', 'eyeCareSet', 'trialLensBar'],
  optical: ['cosmeticBrown', 'colorBlindLenses', 'visualAids', 'droopyEyeglasses', 'colorblindFilters', 'magnifyingGlasses', 'tvGlasses', 'prismaticGlasses'],
  hearing: ['hearingAids'],
  nanoCam: ['nanoCam'],
};

const GRADIENTS = {
  ocular: 'from-teal-brand/70 to-teal-dark',
  implants: 'from-slate-500 to-slate-700',
  accessories: 'from-amber-600/70 to-amber-800/70',
  optical: 'from-indigo-500/70 to-indigo-700/70',
  hearing: 'from-navy-light to-navy',
  nanoCam: 'from-cyan-600/70 to-cyan-800/70',
};

export default function Products() {
  const { t } = useLang();
  const [active, setActive] = useState('all');

  const categoryKeys = Object.keys(PRODUCT_CATEGORIES);
  const tabs = [
    { key: 'all', label: t.productsPage.categories.all },
    ...categoryKeys.map(k => ({ key: k, label: t.productsPage.categories[k] })),
  ];

  const visibleProducts = active === 'all'
    ? categoryKeys.flatMap(cat => PRODUCT_CATEGORIES[cat].map(p => ({ key: p, cat })))
    : PRODUCT_CATEGORIES[active].map(p => ({ key: p, cat: active }));

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.productsPage.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">{t.productsPage.title}</h1>
          <p className="text-navy/50 mt-3 max-w-lg mx-auto text-sm">{t.productsPage.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer border ${
                active === tab.key
                  ? 'bg-teal-brand text-white border-teal-brand'
                  : 'bg-white text-navy/60 border-gray-200 hover:border-gray-300 hover:text-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map(({ key, cat }, i) => (
            <div
              key={key}
              className="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${GRADIENTS[cat]} flex items-center justify-center p-4`}>
                <span className="text-white/80 text-sm font-medium text-center">{t.products[key].name}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-navy leading-snug">{t.products[key].name}</h3>
                  <ArrowUpRight size={14} className="text-navy/20 shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-navy/50 mt-2 leading-relaxed line-clamp-3">{t.products[key].desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
