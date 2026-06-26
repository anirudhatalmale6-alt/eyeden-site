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

const IMAGE_MAP = {
  custom3d: 'custom3d.jpg',
  readyMade: 'readyMade.jpg',
  semiFinished: 'semiFinished.jpg',
  softEye: 'softEye.jpg',
  ultraThin: 'ultraThin.jpg',
  transparentPupil: 'transparentPupil.jpg',
  customHD: 'customHD.jpg',
  transparentSclera: 'transparentSclera.jpg',
  orbital: 'orbital.jpg',
  sphericalImplant: 'sphericalImplant.jpg',
  structurePMMA: 'structurePMMA.jpg',
  peggedPMMA: 'peggedPMMA.jpg',
  conformers: 'conformers.jpg',
  digitalIris: 'digitalIris.jpg',
  irisDisc: 'irisDisc.jpg',
  irisesBox: 'irisesBox.jpg',
  measurementBox: 'measurementBox.jpg',
  eyeCareSet: 'eyeCareSet.jpg',
  trialLensBar: 'trialLensBar.jpg',
  cosmeticBrown: 'cosmeticBrown.jpg',
  colorBlindLenses: 'colorBlindLenses.jpg',
  visualAids: 'visualAids.jpg',
  droopyEyeglasses: 'droopyEyeglasses.jpg',
  colorblindFilters: 'colorblindFilters.jpg',
  magnifyingGlasses: 'magnifyingGlasses.jpg',
  tvGlasses: 'tvGlasses.jpg',
  prismaticGlasses: 'prismaticGlasses.jpg',
  hearingAids: 'hearingAids.jpg',
  nanoCam: 'nanoCam.jpg',
};

const BASE = import.meta.env.BASE_URL;

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
          <p className="text-[11px] tracking-[0.3em] font-bold text-teal-brand mb-4">{t.productsPage.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">{t.productsPage.title}</h1>
          <p className="text-navy/40 mt-3 max-w-lg mx-auto text-sm">{t.productsPage.subtitle}</p>
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
          {visibleProducts.map(({ key }) => (
            <div
              key={key}
              className="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={`${BASE}products/${IMAGE_MAP[key]}`}
                  alt={t.products[key].name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
