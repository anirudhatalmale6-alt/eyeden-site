import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Contact() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    field: '',
    inquiryType: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const f = t.contactPage.form;

  const fields = [
    { key: 'ocular', label: f.ocular, sub: f.ocularSub },
    { key: 'dental', label: f.dental, sub: f.dentalSub },
    { key: 'hearing', label: t.categories.hearing, sub: f.hearingSub },
    { key: 'multiple', label: f.multiple, sub: f.multipleSub },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white min-h-screen flex items-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-teal-brand/10 flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-teal-brand" />
          </div>
          <h2 className="font-display text-2xl text-navy">{f.successTitle}</h2>
          <p className="text-navy/50 mt-3 text-sm">{f.successMsg}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] font-semibold text-teal-brand mb-3">{t.contactPage.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">{t.contactPage.title}</h1>
          <p className="text-navy/50 mt-3 max-w-lg mx-auto text-sm">{t.contactPage.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl text-navy mb-2">{t.contactPage.getInTouch}</h3>
            <p className="text-sm text-navy/50 leading-relaxed mb-8">{t.contactPage.getInTouchDesc}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-teal-brand" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] font-semibold text-navy/40 uppercase">{t.contactPage.email}</p>
                  <p className="text-sm text-navy font-medium">info@eyedengroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-teal-brand" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] font-semibold text-navy/40 uppercase">{t.contactPage.phone}</p>
                  <p className="text-sm text-navy font-medium" dir="ltr">01055222638</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-brand/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-teal-brand" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] font-semibold text-navy/40 uppercase">{t.contactPage.location}</p>
                  <p className="text-sm text-navy font-medium">{t.contactPage.address}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <span className="text-xs px-3 py-1.5 border border-gray-200 rounded-full text-navy/40">ISO 13485</span>
              <span className="text-xs px-3 py-1.5 border border-gray-200 rounded-full text-navy/40">CE Certified</span>
              <span className="text-xs px-3 py-1.5 border border-gray-200 rounded-full text-navy/40">FDA Registered</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              {/* Progress */}
              <div className="flex items-center gap-4 mb-8">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      s <= step ? 'bg-teal-brand text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`hidden sm:block w-16 h-0.5 ${s < step ? 'bg-teal-brand' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-lg text-navy mb-1">{f.step1Title}</h3>
                    <p className="text-sm text-navy/40 mb-6">{f.step1Subtitle}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {fields.map(fd => (
                        <button
                          key={fd.key}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, field: fd.key }))}
                          className={`p-4 rounded-xl border text-start cursor-pointer transition-all ${
                            form.field === fd.key
                              ? 'border-teal-brand bg-teal-brand/5'
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                        >
                          <p className="text-sm font-semibold text-navy">{fd.label}</p>
                          <p className="text-xs text-navy/40 mt-0.5">{fd.sub}</p>
                        </button>
                      ))}
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-navy mb-2">{f.inquiryType}</label>
                      <select
                        value={form.inquiryType}
                        onChange={e => setForm(p => ({ ...p, inquiryType: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy focus:outline-none focus:border-teal-brand"
                      >
                        <option value="">{f.selectInquiry}</option>
                        {f.inquiryOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!form.field}
                      className="w-full py-3 bg-teal-brand text-white text-sm font-semibold rounded-xl cursor-pointer border-none disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-dark transition-colors"
                    >
                      {f.continue}
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-display text-lg text-navy mb-6">{f.step2Title}</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder={f.name}
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-brand"
                        />
                        <input
                          type="email"
                          placeholder={f.emailField}
                          value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-brand"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder={f.phoneField}
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-brand"
                          dir="ltr"
                        />
                        <input
                          type="text"
                          placeholder={f.company}
                          value={form.company}
                          onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                          className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-brand"
                        />
                      </div>
                      <textarea
                        placeholder={f.message}
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-brand resize-none"
                      />
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-3 border border-gray-200 text-navy/60 text-sm font-medium rounded-xl cursor-pointer bg-white hover:border-gray-300 transition-colors"
                      >
                        {f.back}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!form.name || !form.email}
                        className="flex-1 py-3 bg-teal-brand text-white text-sm font-semibold rounded-xl cursor-pointer border-none disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-dark transition-colors"
                      >
                        {f.continue}
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-display text-lg text-navy mb-6">{f.step3Title}</h3>

                    <div className="bg-white rounded-xl p-4 space-y-3 mb-6">
                      {form.field && <p className="text-sm"><span className="text-navy/40">{f.step1Title}</span> <span className="text-navy font-medium ms-2">{fields.find(fd => fd.key === form.field)?.label}</span></p>}
                      {form.inquiryType && <p className="text-sm"><span className="text-navy/40">{f.inquiryType}:</span> <span className="text-navy font-medium ms-2">{form.inquiryType}</span></p>}
                      {form.name && <p className="text-sm"><span className="text-navy/40">{f.name}:</span> <span className="text-navy font-medium ms-2">{form.name}</span></p>}
                      {form.email && <p className="text-sm"><span className="text-navy/40">{f.emailField}:</span> <span className="text-navy font-medium ms-2">{form.email}</span></p>}
                      {form.phone && <p className="text-sm"><span className="text-navy/40">{f.phoneField}:</span> <span className="text-navy font-medium ms-2" dir="ltr">{form.phone}</span></p>}
                      {form.company && <p className="text-sm"><span className="text-navy/40">{f.company}:</span> <span className="text-navy font-medium ms-2">{form.company}</span></p>}
                      {form.message && <p className="text-sm"><span className="text-navy/40">{f.message}:</span> <span className="text-navy font-medium ms-2">{form.message}</span></p>}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 py-3 border border-gray-200 text-navy/60 text-sm font-medium rounded-xl cursor-pointer bg-white hover:border-gray-300 transition-colors"
                      >
                        {f.back}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-teal-brand text-white text-sm font-semibold rounded-xl cursor-pointer border-none hover:bg-teal-dark transition-colors"
                      >
                        {f.submit}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
