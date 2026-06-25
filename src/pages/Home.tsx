import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight, Star, Shield, Leaf, Heart, RefreshCw, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Glow & Green | Premium Natural & Eco-Friendly Skincare";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover 100% natural, ethically sourced skincare. Glow & Green offers premium, plant-powered solutions for healthy, radiant skin without the toxic chemicals. Shop our eco-friendly collection today.");
    }
  }, []);
  // Select top 3 products as featured
  const featuredProducts = products.slice(0, 3);

  const steps = [
    {
      icon: <Leaf className="h-6 w-6 text-emerald-700" />,
      title: "100% Clean Formulation",
      desc: "Zero synthetics, parabens, sulfates, or artificial fragrances. Pure, active botanicals that work in harmony with your skin."
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-700" />,
      title: "Ethically Sourced",
      desc: "Every oil, hydrosol, and extract is sustainably harvested, fair-trade, and cruelty-free. Kind to your skin, kind to the Earth."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-emerald-700" />,
      title: "Zero-Waste Refill Program",
      desc: "Subscribe to our refills to reduce carbon emissions and plastic waste. Refills come at a 15% discount in fully compostable mailers."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-stone-50 overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
                <SparklesIcon className="h-3.5 w-3.5" />
                <span>100% Clean, Conscious Skincare</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-stone-900 leading-tight">
                Beauty that is as kind to the <span className="text-emerald-800 underline decoration-emerald-200 decoration-wavy">Planet</span> as to your skin.
              </h1>
              <p className="text-stone-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                We solve the problem of "toxic beauty" by providing transparent, premium, and ethically sourced alternatives. Formulated with potent botanical extracts. No fillers, no toxins.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-emerald-800 hover:bg-emerald-900 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Shop Pure Skincare
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-stone-200 text-base font-medium rounded-full text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-300 transition-colors duration-200 shadow-sm"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            {/* Hero Right: Clean Organic Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-50">
                <img
                  src="/hero-banner.png"
                  alt="Aesthetic skincare ingredients and bottles"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-emerald-50">
                  <div className="flex items-center space-x-1.5 text-amber-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs italic text-stone-600">
                    "My skin is glowing and completely redness-free! Knowing it's 100% natural and zero-waste makes me feel so good."
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mt-2">
                    — Clara M., Sensitive Skin Sufferer
                  </p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-amber-400 text-stone-900 rounded-full h-24 w-24 flex flex-col items-center justify-center text-center p-2 shadow-xl border-2 border-white transform rotate-12">
                <span className="text-[10px] uppercase font-bold tracking-widest">Pure</span>
                <span className="text-xl font-extrabold font-serif">100%</span>
                <span className="text-[9px] uppercase font-bold">Natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900">
            Skincare without Compromise
          </h2>
          <div className="h-1 w-20 bg-emerald-700 mx-auto rounded-full"></div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light">
            We reject the industry standards of chemical preservatives, synthetic fillers, and wasteful packaging. Here is how we do skincare differently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col space-y-4"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products Showcase */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">Our Lineup Highlights</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900">
                The Core Starting Skincare Routine
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center text-emerald-800 hover:text-emerald-950 font-semibold text-sm transition-colors duration-200 group"
            >
              Explore all 5 products
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-emerald-900 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-xs text-stone-500">{product.volume}</span>
                  <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-xs italic">{product.subtitle}</p>
                  <p className="text-stone-600 text-sm line-clamp-2 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-stone-50 flex items-center justify-between">
                    <div>
                      <span className="text-stone-400 text-xs line-through block">${product.price.toFixed(2)}</span>
                      <span className="text-emerald-800 font-bold text-lg">
                        ${product.subscriptionPrice.toFixed(2)}{" "}
                        <span className="text-[10px] font-normal text-stone-500">/ mo</span>
                      </span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="px-4 py-2 text-xs font-semibold rounded-full border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Subscription Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-3xl text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center bg-emerald-800 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Subscribe &amp; Save Program
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
              A skincare ritual that automatically replenishes. At 15% off.
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg font-light leading-relaxed">
              Skincare works best when consistent. Sign up for our eco-friendly subscription model to receive fresh glass refills of your favorite botanicals every 30 days. Enjoy a **15% discount**, free carbon-neutral delivery, and the flexibility to pause, swap, or cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-emerald-950 bg-amber-400 hover:bg-amber-500 shadow-md transition-colors duration-200 font-bold"
              >
                Choose Your Ritual
              </Link>
              <div className="flex items-center space-x-2 text-sm text-emerald-100">
                <Shield className="h-5 w-5 text-amber-400" />
                <span>Cancel or modify anytime with one click</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">The Glow Community</span>
          <h2 className="text-3xl font-serif font-semibold text-stone-900">Loved by Health &amp; Eco Conscious Skin</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "I have suffered from chronic contact dermatitis on my face for years. The Clarifying Sage Cleanser is the only thing that actually cleanses my face without triggering a massive eczema flare-up. Absolute miracle.",
              author: "Elena S., Sensitive Skin Sufferer",
              rating: 5,
              badge: "Verified Buyer"
            },
            {
              text: "I bought the Neroli Youth Serum and Rose Hydrosol Toner. Not only is my skin glowing and visibly clearer, but I love that the packaging is entirely glass and compostable paper. They truly care about the planet.",
              author: "Marcus V., Eco-Conscious Consumer",
              rating: 5,
              badge: "Subscription Member"
            },
            {
              text: "Glow & Green is exactly what the beauty industry needs. 100% transparent ingredient disclosures, amazing textures, and zero synthetic toxicity. The Bakuchiol face oil is easily better than any luxury retinol I've used.",
              author: "Dr. Amanda K., Holistic Dermatologist",
              rating: 5,
              badge: "Skin Expert"
            }
          ].map((test, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-50">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{test.author}</h4>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 block mt-0.5">
                    {test.badge}
                  </span>
                </div>
                <Heart className="h-4 w-4 text-emerald-700/40 fill-emerald-700/10" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Help helper icon component for clean visual
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z" opacity="0.5" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" opacity="0.5" />
  </svg>
);
