import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto border-t border-stone-800">
      {/* Brand Highlights Section */}
      <div className="bg-stone-950 border-b border-stone-800 py-8 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
              <ShieldCheck className="h-8 w-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-100 text-sm">100% Non-Toxic</h4>
                <p className="text-xs">Certified organic and skin-safe plant botanicals.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
              <Leaf className="h-8 w-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-100 text-sm">Eco-Conscious Packaging</h4>
                <p className="text-xs">100% recyclable glass and compostable cartons.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
              <Truck className="h-8 w-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-100 text-sm">Carbon-Neutral Shipping</h4>
                <p className="text-xs">Free delivery on orders over $50.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
              <RefreshCw className="h-8 w-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-100 text-sm">Flexible Subscriptions</h4>
                <p className="text-xs">Save 15% on refills. Cancel or pause anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                Glow &amp; Green
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm">
              We offer a curated selection of premium, 100% natural, and eco-friendly skincare products. 
              Solving the problem of "toxic beauty" with transparent, effective, and ethically sourced alternatives.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">Shop &amp; Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">Shop All Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">View Cart</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Sign-up */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-xs mb-4">Our Promise</h3>
            <p className="text-xs text-stone-400 mb-2">
              Join us in our mission to clean up the beauty industry. Clean skin. Clean planet.
            </p>
            <div className="text-stone-400 text-xs">
              Contact: support@glowandgreen.com
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Glow &amp; Green Skincare Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
