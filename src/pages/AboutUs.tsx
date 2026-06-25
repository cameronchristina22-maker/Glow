import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-[#F5F0E8] overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
            <Sparkles className="h-3.5 w-3.5 text-[#2D6A4F]" />
            <span>Rooted in Nature, Backed by Science</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-stone-900 leading-tight">
            Our Story: Resolving the <span className="text-emerald-800 italic font-normal">"Toxic Beauty"</span> Crisis
          </h1>
          <p className="text-stone-700 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            At Glow & Green, we believe that premium, luxurious self-care should never come at the cost of your health or our planet's future.
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">Our Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900">
              Where botanical wisdom meets high-performance beauty.
            </h2>
            <div className="h-1 w-16 bg-emerald-700 rounded-full"></div>
            <p className="text-stone-600 font-light leading-relaxed">
              Glow & Green was founded to dismantle a frustrating industry myth: that natural skincare is less effective than chemical-heavy alternatives, or that "clean" beauty must compromise on sensory luxury.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              We started in 2026 by asking a fundamental question: <span className="italic font-normal">What if your skincare ritual could be completely non-toxic, scientifically advanced, and zero-waste?</span> Our response is a hand-crafted, clinical-grade line of botanical products formulated to nourish sensitive skin sufferers and protect our environment.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-100 bg-[#FAF9F6] p-8 space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-stone-900">The Glow & Green Pillars</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">100% Non-Toxic Formulations</span>
                    <span className="text-stone-600 text-sm font-light">Absolutely zero parabens, sulfates, artificial colors, or chemical preservatives. Pure, clean, biocompatible skin nutrition.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Botanical Active Ingredients</span>
                    <span className="text-stone-600 text-sm font-light">Powered by wild-crafted extracts, premium botanical seed oils, and high-performance, biotech-derived ferments.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Ethical & Eco-Conscious Sourcing</span>
                    <span className="text-stone-600 text-sm font-light">Sustainably and ethically harvested from vetted botanical gardens. Cruelty-free, fair-trade, and kind to local ecosystems.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Founder / Tone Accent */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <p className="font-serif italic text-2xl text-stone-800 leading-relaxed">
            "Choosing skincare shouldn't feel like choosing between your health, your radiance, or your ethics. We created Glow & Green to prove that beauty can be a powerful force for global wellness and environmental restoration."
          </p>
          <div className="h-0.5 w-12 bg-[#d4a373] mx-auto"></div>
          <div>
            <p className="font-bold text-stone-900 uppercase tracking-wider text-sm">Glow & Green Team</p>
            <p className="text-stone-500 text-xs mt-1">Conscious Botanical Skincare Pioneers</p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl font-serif font-semibold text-stone-900">Experience the Botanical Difference</h2>
        <p className="text-stone-600 font-light max-w-2xl mx-auto">
          Explore our initial lineup of 5 premium, botanical skincare solutions. From refreshing morning cleanse to lit-from-within glow, find your ritual.
        </p>
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-emerald-800 hover:bg-emerald-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Shop the Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
