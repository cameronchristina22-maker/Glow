import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { STRIPE_LINKS } from '../data/stripeLinks';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, Leaf, CheckCircle, ShieldCheck, ShoppingCart, Calendar, Info, ExternalLink } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(true);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'directions'>('description');
  const [addedNotification, setAddedNotification] = useState(false);

  const product = useMemo(() => {
    return products.find((p) => p.id === id);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-md mx-auto my-20 text-center space-y-6 px-4">
        <h2 className="text-2xl font-serif font-bold text-stone-900">Botanical Not Found</h2>
        <p className="text-stone-600">
          The skincare product you are looking for does not exist or has been retired.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-emerald-800 text-white hover:bg-emerald-950 font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, isSubscription);
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 3000);
  };

  const stripeLink = STRIPE_LINKS[product.id];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back to Shop Link */}
      <div>
        <Link
          to="/shop"
          className="inline-flex items-center text-stone-500 hover:text-emerald-800 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Premium Lineup
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Product Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-100 bg-stone-50 h-[480px] sm:h-[600px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {isSubscription && (
              <span className="absolute top-6 left-6 bg-amber-400 text-stone-900 text-[10px] font-bold px-3 py-1.5 rounded-full border border-white shadow uppercase tracking-wider">
                15% Subscription Discount Applied
              </span>
            )}
          </div>
          <div className="flex items-center justify-center space-x-6 text-stone-500 text-xs py-2 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="flex items-center">
              <ShieldCheck className="h-4 w-4 text-emerald-600 mr-1.5" />
              100% Pure Botanicals
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Leaf className="h-4 w-4 text-emerald-600 mr-1.5" />
              Recyclable Glass Bottle
            </span>
          </div>
        </div>

        {/* Right Column: Details & Purchasing */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">
                {product.category}
              </span>
              <span className="text-stone-500 text-sm font-medium">{product.volume}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-stone-500 text-sm italic">{product.subtitle}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-stone-500 font-medium">(4.9 out of 5 from 120+ reviews)</span>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* Value Proposition Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-stone-500">Key Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-600">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-stone-100" />

          {/* Purchasing Model Configuration */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-stone-500">Choose Delivery Model</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option 1: Subscription */}
              <button
                onClick={() => setIsSubscription(true)}
                className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 relative ${
                  isSubscription
                    ? 'border-emerald-800 bg-emerald-50/30'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                {isSubscription && (
                  <span className="absolute -top-2.5 right-4 bg-emerald-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Recommended
                  </span>
                )}
                <div className="flex items-center space-x-2 text-stone-900 font-bold">
                  <input
                    type="radio"
                    checked={isSubscription}
                    onChange={() => {}}
                    className="h-4 w-4 text-emerald-700 focus:ring-emerald-700 border-stone-300"
                  />
                  <span>Subscribe &amp; Save</span>
                </div>
                <div className="mt-2 text-stone-500 text-xs">
                  Refills shipped automatically every 30 days. Cancel or skip anytime.
                </div>
                <div className="mt-4 flex items-baseline space-x-2">
                  <span className="text-emerald-800 font-extrabold text-2xl">${product.subscriptionPrice.toFixed(2)}</span>
                  <span className="text-stone-400 text-xs">/ refill</span>
                  <span className="text-amber-600 text-xs font-semibold">(Save 15%)</span>
                </div>
              </button>

              {/* Option 2: One-Time */}
              <button
                onClick={() => setIsSubscription(false)}
                className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 ${
                  !isSubscription
                    ? 'border-emerald-800 bg-emerald-50/30'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center space-x-2 text-stone-900 font-bold">
                  <input
                    type="radio"
                    checked={!isSubscription}
                    onChange={() => {}}
                    className="h-4 w-4 text-emerald-700 focus:ring-emerald-700 border-stone-300"
                  />
                  <span>One-Time Purchase</span>
                </div>
                <div className="mt-2 text-stone-500 text-xs">
                  A single glass bottle shipped once. No recurring shipments or commitments.
                </div>
                <div className="mt-4 flex items-baseline space-x-1">
                  <span className="text-stone-900 font-bold text-2xl">${product.price.toFixed(2)}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Add to Cart & Buy Now Controls */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center bg-stone-50 p-4 rounded-2xl border border-stone-100">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between border border-stone-200 bg-white rounded-full px-4 py-2 sm:py-2.5">
                <span className="text-xs text-stone-500 font-semibold uppercase mr-4">Quantity:</span>
                <div className="flex items-center space-x-4 font-bold text-stone-800">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:text-emerald-700 transition-colors w-6 text-center"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-emerald-700 transition-colors w-6 text-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-grow inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-full text-white bg-emerald-800 hover:bg-emerald-950 font-bold shadow transition-all duration-200 hover:shadow-md"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Ritual — ${((isSubscription ? product.subscriptionPrice : product.price) * quantity).toFixed(2)}
              </button>
            </div>

            {/* Stripe Buy Now Button */}
            {stripeLink && (
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-amber-400 rounded-full text-stone-900 bg-amber-400 hover:bg-amber-500 font-bold shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Buy Now — ${product.price.toFixed(2)} (via Stripe)
              </a>
            )}
          </div>

          {/* Notification Toast */}
          {addedNotification && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 flex items-start space-x-3 shadow-sm animate-fade-in">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">Successfully added to ritual!</p>
                <p className="text-xs text-emerald-700/90 mt-0.5">
                  Your cart has been updated. <Link to="/cart" className="underline font-semibold hover:text-emerald-900">View Cart &amp; Checkout</Link>
                </p>
              </div>
            </div>
          )}

          {/* Subscription explanation detail */}
          {isSubscription && (
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/55 text-xs text-stone-600 flex items-start space-x-2">
              <Calendar className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-stone-800 block mb-0.5">Refill Schedule:</span>
                Refill shipments occur every 30 days. We send a fresh eco-cartridge or glass bottle directly in minimal packaging. You save **15% on every shipment** and can edit or cancel easily within your account page.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Section for description/ingredients/directions */}
      <div className="border-t border-stone-100 pt-12">
        <div className="border-b border-stone-200">
          <nav className="flex space-x-8">
            {(['description', 'ingredients', 'directions'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold border-b-2 uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'border-emerald-800 text-emerald-800 font-bold'
                    : 'border-transparent text-stone-400 hover:text-stone-600 hover:border-stone-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-8 prose prose-stone max-w-4xl text-stone-600 leading-relaxed text-sm sm:text-base space-y-4">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <p className="text-stone-800 text-lg font-light leading-relaxed">
                {product.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm flex items-center">
                    <Leaf className="h-4 w-4 text-emerald-700 mr-1.5" />
                    Clean Commitment
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Glow &amp; Green is 100% committed to zero synthetics, fillers, parabens, glycols, or artificial fragrances.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm flex items-center">
                    <Info className="h-4 w-4 text-emerald-700 mr-1.5" />
                    Packaging Integrity
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Housed in Miron protective ultraviolet glass to block the complete spectrum of visible light and keep active botanicals fresh.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-4 bg-emerald-50/20 p-6 rounded-2xl border border-emerald-100/30">
              <h4 className="font-serif font-bold text-stone-900 text-lg">Fully Disclosed Ingredients</h4>
              <p className="font-mono text-sm tracking-tight text-emerald-950 leading-relaxed bg-white p-4 rounded-xl border border-emerald-50">
                {product.ingredients}
              </p>
              <p className="text-xs text-stone-400 italic">
                Our formulas are updated from time to time as part of our commitment to innovation. Please refer to the ingredient list on the product package you receive for the most up to date list of ingredients.
              </p>
            </div>
          )}

          {activeTab === 'directions' && (
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <h4 className="font-serif font-bold text-stone-900 text-lg">How to Integrate Into Your Ritual</h4>
              <p className="text-stone-700 text-sm sm:text-base">
                {product.directions}
              </p>
              <div className="text-xs text-emerald-800 font-semibold mt-4">
                Tip: Store in a cool, dark place out of direct sunlight to maintain the potency of the botanical compounds.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
