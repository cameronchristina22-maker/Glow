import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, RefreshCw, Zap, ArrowRight } from 'lucide-react';

export const Sustainability: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-[#2D6A4F] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/50 text-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-800">
            <Globe className="h-3.5 w-3.5 text-[#95D5B2]" />
            <span>Our 2026 Eco-Commitment</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
            Circular Beauty: Kind to Your Skin, <span className="text-[#D4A373] underline decoration-[#D4A373] decoration-wavy">Kind to the Earth</span>
          </h1>
          <p className="text-emerald-50 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Beyond "recyclable." We are building a truly closed-loop skincare model to eliminate waste and reduce environmental footprint.
          </p>
        </div>
      </section>

      {/* 2. Three Pillars of Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif font-semibold text-stone-900">Our Closed-Loop Blueprint</h2>
          <div className="h-1 w-16 bg-emerald-700 mx-auto rounded-full"></div>
          <p className="text-stone-600 font-light max-w-2xl mx-auto">
            Traditional beauty creates millions of tons of plastic waste annually. We designed Glow & Green from the ground up to solve this circularity problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Circular Refills */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm flex flex-col space-y-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-stone-900">1. Zero-Waste Refill Program</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Our high-premium glass bottles are designed to be kept forever. When you subscribe to our "Subscribe & Save" model, future refills are sent in lightweight, 100% home-compostable soy-ink pouches. Simply snip and decant. This reduces plastic waste by 95% and cuts transport emissions by 85%.
            </p>
          </div>

          {/* Pillar 2: Biotech Sourcing */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm flex flex-col space-y-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-stone-900">2. Biotech-Driven Naturals</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Harvesting rare wild plants can lead to deforestation and biodiversity loss. We utilize lab-grown botanicals and bio-fermentation (like our fermented pomegranate) to extract powerful active compounds. This ensures clinical consistency, skin biocompatibility, and respects natural habitats.
            </p>
          </div>

          {/* Pillar 3: Carbon-Neutral Transit */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm flex flex-col space-y-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-stone-900">3. Carbon-Neutral Shipping</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Every shipment is 100% carbon-neutral. We package exclusively in zero-plastic, post-consumer recycled boxes and compostable mailers. Plus, at checkout, we provide a transparent, optional Carbon Offset contribution to support verified global reforestation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Sourcing Transparency Fact Sheet */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">No Secrets, Just Science</span>
            <h2 className="text-3xl font-serif font-semibold text-stone-900">Ingredient Traceability</h2>
            <p className="text-stone-600 font-light max-w-xl mx-auto text-sm">
              We stand for "Transparency 2.0." Here is where our star natural components are sourced and why they are sustainable.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-100">
            <div className="p-6 sm:grid sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 font-serif font-bold text-emerald-800 text-lg">Fermented Pomegranate</div>
              <div className="sm:col-span-3 text-stone-500 text-xs uppercase tracking-wider">Bio-Fermentation</div>
              <div className="sm:col-span-5 text-stone-600 text-sm font-light">
                Extracted using natural yeast fermentation, which maximizes nutrient density and prevents agricultural over-harvesting. Sourced from organic groves in Spain.
              </div>
            </div>
            <div className="p-6 sm:grid sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 font-serif font-bold text-emerald-800 text-lg">Squalane (Olive Derived)</div>
              <div className="sm:col-span-3 text-[#D4A373] text-xs uppercase tracking-wider font-semibold">Circular Upcycling</div>
              <div className="sm:col-span-5 text-stone-600 text-sm font-light">
                Upcycled entirely from Spanish olive oil production waste streams, preventing valuable lipids from going to landfill. 100% renewable.
              </div>
            </div>
            <div className="p-6 sm:grid sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 font-serif font-bold text-emerald-800 text-lg">Rosehip & Evening Primrose</div>
              <div className="sm:col-span-3 text-emerald-700 text-xs uppercase tracking-wider font-semibold">Cold-Pressed Organic</div>
              <div className="sm:col-span-5 text-stone-600 text-sm font-light">
                Sourced from cooperative family farms in Chile using traditional solar-powered low-temperature presses to preserve active vitamins.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl font-serif font-semibold text-stone-900">Adopt a Sustainable Skincare Ritual</h2>
        <p className="text-stone-600 font-light max-w-2xl mx-auto">
          Start your clean skincare journey today. Join our refill system, save 15%, and reduce your daily carbon footprint.
        </p>
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-emerald-800 hover:bg-emerald-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Explore the Shop
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
