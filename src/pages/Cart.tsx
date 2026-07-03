import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { STRIPE_LINKS, FULL_RITUAL_SET_LINK } from '../data/stripeLinks';
import { 
  ShoppingBag, Trash2, ArrowLeft, ShieldCheck, 
  Truck, Calendar, CheckCircle, Gift, ExternalLink 
} from 'lucide-react';

export const Cart: React.FC = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartSubtotal, 
    cartCount 
  } = useCart();

  // Billing / Shipping Form State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  
  // UI Flow State
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');

  const shippingCost = cartSubtotal >= 50 ? 0 : 5.99;
  const carbonOffset = 0.99;
  const [includeOffset, setIncludeOffset] = useState(true);
  
  const totalCost = cartSubtotal + shippingCost + (includeOffset ? carbonOffset : 0);

  // Check if cart has all 5 products (any quantity) — qualifies for bundle
  const allProductIds = cart.map(item => item.product.id);
  const hasAllFiveProducts = ["verdant-dew-gentle-cleanser", "emerald-mist-balancing-toner", "phyto-glow-regenerative-serum", "luminous-leaf-whipped-moisturizer", "aura-bloom-face-oil"].every(
    id => allProductIds.includes(id)
  );

  if (checkoutStep === 'success') {
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 bg-white border border-stone-100 rounded-3xl shadow-xl text-center space-y-6">
        <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
          <CheckCircle className="h-10 w-10 text-emerald-700" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">Payment Secured via Stripe</span>
          <h2 className="text-3xl font-serif font-semibold text-stone-900">Your Skincare Ritual is Set!</h2>
          <p className="text-stone-500 text-sm">
            Thank you for shopping clean with Glow &amp; Green, <span className="font-semibold text-stone-700">{name}</span>. 
            We have sent a receipt and shipment tracker to <span className="font-semibold text-stone-700">{email}</span>.
          </p>
        </div>

        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-left space-y-3">
          <div className="flex justify-between text-xs text-stone-500 border-b border-stone-200/50 pb-2">
            <span>Delivery Address:</span>
            <span className="text-stone-800 font-medium">{address}, {city}, {zip}</span>
          </div>
          <div className="flex justify-between text-xs text-stone-500">
            <span>Shipping Commitment:</span>
            <span className="text-emerald-800 font-bold flex items-center">
              <Truck className="h-3.5 w-3.5 mr-1" /> Carbon-Neutral Shipping
            </span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-stone-400">
          <p>Stripe will send you a payment receipt by email.</p>
          <p>For subscriptions: Refill shipments occur automatically every 30 days. You will receive an email notice 3 days before any auto-shipment triggers.</p>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-800 hover:bg-emerald-950 text-white rounded-full font-bold text-sm transition-colors shadow"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Clean Beauty Journey
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto my-24 text-center space-y-6 px-4">
        <div className="h-16 w-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto border border-stone-100">
          <ShoppingBag className="h-8 w-8 text-stone-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Your Cart is Empty</h2>
          <p className="text-stone-500 text-sm">
            Invest in your skin's health. Explore our premium natural botanical formulations today.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center px-8 py-3 bg-emerald-800 text-white rounded-full font-bold text-sm hover:bg-emerald-950 shadow-sm transition-colors"
        >
          Explore Clean Skincare
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-serif font-semibold text-stone-900">
          {checkoutStep === 'checkout' ? 'Complete Secure Checkout' : 'Your Skincare Cart'}
        </h1>
        <p className="text-stone-500 text-sm">
          {checkoutStep === 'checkout' 
            ? 'Enter your shipping address to prepare your order.' 
            : `Review your selections. ${cartCount} items currently in cart.`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cart list or checkout fields */}
        <div className="lg:col-span-8 space-y-6">
          {checkoutStep === 'cart' ? (
            /* CART LIST */
            <div className="space-y-4">
              {cart.map((item) => {
                const price = item.isSubscription ? item.product.subscriptionPrice : item.product.price;
                const stripeLink = STRIPE_LINKS[item.product.id];
                return (
                  <div
                    key={`${item.product.id}-${item.isSubscription}`}
                    className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4 transition-all duration-200 hover:border-stone-200"
                  >
                    {/* Top row: product info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 rounded-xl overflow-hidden bg-stone-50 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium text-stone-900 hover:text-emerald-800 text-base">
                            <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                          </h3>
                          <p className="text-stone-400 text-xs">{item.product.volume}</p>
                          {item.isSubscription ? (
                            <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              <Calendar className="h-3 w-3 text-emerald-700 mr-1" />
                              Monthly Refill
                            </span>
                          ) : (
                            <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              One-Time Shipment
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4">
                        <div className="flex items-center space-x-3 border border-stone-200 rounded-full px-3 py-1 bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity - 1)}
                            className="hover:text-emerald-700 text-stone-500 font-bold transition-colors w-4"
                          >
                            -
                          </button>
                          <span className="font-semibold text-stone-800 text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity + 1)}
                            className="hover:text-emerald-700 text-stone-500 font-bold transition-colors w-4"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-stone-900 font-bold block text-base">
                            ${(price * item.quantity).toFixed(2)}
                          </span>
                          <span className="text-stone-400 text-xs block">
                            (${price.toFixed(2)} each)
                          </span>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id, item.isSubscription)}
                          className="text-stone-300 hover:text-red-500 p-2 rounded-full hover:bg-stone-50 transition-all duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Buy this item now via Stripe */}
                    {stripeLink && (
                      <div className="flex justify-end pt-2 border-t border-stone-50">
                        <a
                          href={stripeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-full bg-amber-400 text-stone-900 hover:bg-amber-500 transition-all duration-200 shadow-sm hover:shadow"
                        >
                          Buy This Item Only — ${item.product.price.toFixed(2)}
                          <ExternalLink className="h-3 w-3 ml-1.5" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-between items-center pt-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center text-emerald-800 hover:text-emerald-950 text-sm font-semibold transition-colors group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                  Add more botanicals
                </Link>
                <button
                  onClick={clearCart}
                  className="text-xs text-stone-400 hover:text-red-600 transition-colors"
                >
                  Clear all items
                </button>
              </div>
            </div>
          ) : (
            /* BILLING & SHIPPING — no fake card fields */
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-100 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-semibold text-stone-900 pb-2 border-b border-stone-100">
                Billing &amp; Delivery Details
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Clara Myers"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50/50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-700/50 focus:border-emerald-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="clara@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50/50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-700/50 focus:border-emerald-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="123 Sagebrush Lane, Apt 4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50/50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-700/50 focus:border-emerald-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Portland"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="block w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50/50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-700/50 focus:border-emerald-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Zip / Postal Code</label>
                  <input
                    type="text"
                    required
                    placeholder="97201"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="block w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50/50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-700/50 focus:border-emerald-700"
                  />
                </div>
              </div>

              {/* Stripe Checkout buttons — no fake card section */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h2 className="text-xl font-serif font-semibold text-stone-900">
                  Checkout via Stripe
                </h2>
                <p className="text-xs text-stone-500">
                  Your payment is processed securely on Stripe's hosted checkout page. We never see or store your card details.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Full Ritual Set link when all 5 items present */}
                  {hasAllFiveProducts ? (
                    <a
                      href={FULL_RITUAL_SET_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { setCheckoutStep('success'); clearCart(); }}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-emerald-800 hover:bg-emerald-950 text-white rounded-full font-bold text-sm transition-all duration-200 shadow hover:shadow-md"
                    >
                      <ShieldCheck className="mr-2 h-5 w-5" />
                      Get Full Ritual Set — $170
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  ) : (
                    <div className="flex-1 space-y-2">
                      <p className="text-xs font-bold text-stone-600 uppercase tracking-wider">Buy individually via Stripe:</p>
                      <div className="flex flex-wrap gap-2">
                        {cart.map((item) => {
                          const link = STRIPE_LINKS[item.product.id];
                          if (!link) return null;
                          return (
                            <a
                              key={item.product.id}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => { setCheckoutStep('success'); clearCart(); }}
                              className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-full bg-amber-400 text-stone-900 hover:bg-amber-500 transition-all duration-200 shadow-sm"
                            >
                              {item.product.name} — ${item.product.price.toFixed(2)}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="inline-flex items-center text-stone-500 hover:text-stone-800 text-xs font-semibold"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart Selections
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Cost Summary Panel */}
        <div className="lg:col-span-4 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-100 shadow-sm space-y-6">
          <h2 className="text-xl font-serif font-semibold text-stone-900 pb-2 border-b border-stone-200/50">
            Order Summary
          </h2>

          <div className="space-y-4">
            {/* Cart Items Checklist */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {cart.map((item) => {
                const price = item.isSubscription ? item.product.subscriptionPrice : item.product.price;
                return (
                  <div key={`${item.product.id}-${item.isSubscription}`} className="flex justify-between text-xs text-stone-600">
                    <span className="line-clamp-1 flex-grow">
                      {item.product.name} <span className="font-bold text-stone-400">x{item.quantity}</span>
                    </span>
                    <span className="font-medium text-stone-800 ml-4">${(price * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            <hr className="border-stone-200/50" />

            {/* Calculations block */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-800">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Carbon-Neutral Shipping</span>
                <span className="font-semibold text-stone-800">
                  {shippingCost === 0 ? (
                    <span className="text-emerald-800 uppercase font-bold text-[10px]">Free</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-stone-600 bg-white p-3 rounded-xl border border-stone-100">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="carbonOffset"
                    checked={includeOffset}
                    onChange={(e) => setIncludeOffset(e.target.checked)}
                    className="rounded text-emerald-700 focus:ring-emerald-700 h-4 w-4 border-stone-300"
                  />
                  <label htmlFor="carbonOffset" className="text-xs text-stone-500 flex flex-col cursor-pointer">
                    <span className="font-bold text-stone-700 flex items-center">
                      <Gift className="h-3 w-3 text-emerald-600 mr-1" /> Offset Carbon Emissions
                    </span>
                    <span>Fund active forestry with $0.99</span>
                  </label>
                </div>
                {includeOffset && <span className="text-xs font-bold text-stone-800">$0.99</span>}
              </div>
            </div>

            <hr className="border-stone-200/50" />

            <div className="flex justify-between items-baseline text-stone-900 font-bold">
              <span className="text-base font-serif">Estimated Total</span>
              <span className="text-2xl font-serif">${totalCost.toFixed(2)}</span>
            </div>

            {hasAllFiveProducts && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800">
                <span className="font-bold">Bundle deal available!</span> All 5 products detected in your cart. Save when you purchase the <strong>Full Ritual Set ($170)</strong> via the checkout button.
              </div>
            )}
          </div>

          {/* Checkout triggers */}
          {checkoutStep === 'cart' && (
            <div className="space-y-4 pt-2">
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-emerald-800 hover:bg-emerald-950 text-white font-bold rounded-full text-sm transition-all duration-200 shadow hover:shadow-md"
              >
                Proceed to Checkout
              </button>
              <div className="flex items-center justify-center space-x-1.5 text-stone-400 text-[10px] uppercase font-bold tracking-widest text-center">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span>Checkout via Stripe Secure</span>
              </div>
            </div>
          )}

          <div className="text-[11px] text-stone-500 bg-stone-100 p-4 rounded-xl border border-stone-200/40 text-center space-y-1">
            <span className="font-bold text-stone-700 block">Stripe Secure Guarantee</span>
            Glow &amp; Green values your security. All payment info is handled on Stripe's secure, PCI-compliant hosted checkout. We never save raw cards on our database.
          </div>
        </div>
      </div>
    </div>
  );
};
