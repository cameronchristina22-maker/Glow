import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/logo.png" alt="Glow & Green Logo" className="h-9 w-auto object-contain rounded-md" />
              <span className="font-serif text-xl font-bold tracking-wide text-[#2D6A4F]">
                Glow <span className="text-[#d4a373]">&amp;</span> Green
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-emerald-800 border-b-2 border-emerald-700 pb-1'
                    : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart Icon & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-stone-700 hover:text-emerald-800 transition-colors duration-200 rounded-full hover:bg-stone-50"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center font-bold rounded-full border border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-stone-700 hover:text-emerald-800 transition-colors rounded-md"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-emerald-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:bg-stone-50 hover:text-emerald-700"
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
