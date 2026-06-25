import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Search, SlidersHorizontal, Leaf, Sparkles } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract categories
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
          <Leaf className="h-3 w-3" />
          <span>100% Biodegradable &amp; Clean Formulas</span>
        </span>
        <h1 className="text-4xl font-serif font-semibold text-stone-900">
          The Premium Skincare Lineup
        </h1>
        <div className="h-1 w-16 bg-emerald-700 mx-auto rounded-full"></div>
        <p className="text-stone-600 text-base font-light leading-relaxed">
          Each product in our edited starting ritual is hand-crafted with highly concentrated, active plant botanicals. Solve the "toxic beauty" issue by investing in products that provide true skin nutrition and fully transparent ingredient disclosures.
        </p>
      </div>

      {/* 2. Controls: Search and Filter Tabs */}
      <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            placeholder="Search botanicals (e.g. Sage, Vitamin C)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-full bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors"
          />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 text-stone-500 mr-2 text-xs uppercase font-bold tracking-wider">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image & Category Tag */}
              <div className="relative h-72 overflow-hidden bg-stone-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-emerald-950 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">
                  {product.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-emerald-950/80 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full border border-emerald-800/20">
                  {product.volume}
                </span>
              </div>

              {/* Info Block */}
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-stone-500 text-xs italic">{product.subtitle}</p>
                <p className="text-stone-600 text-sm leading-relaxed flex-grow line-clamp-3">
                  {product.description}
                </p>

                {/* Micro Ingredients preview */}
                <div className="text-[11px] text-stone-500 border-t border-stone-50 pt-3 line-clamp-1">
                  <span className="font-semibold text-stone-700">Key Base:</span> {product.ingredients.split(',').slice(0, 3).join(', ')}...
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-stone-500 flex items-center space-x-1">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>Subscription Option</span>
                    </div>
                    <span className="text-stone-900 font-bold text-lg">
                      ${product.price.toFixed(2)}{" "}
                      <span className="text-xs font-normal text-stone-400">/ one-time</span>
                    </span>
                    <span className="text-emerald-700 font-bold text-sm block">
                      ${product.subscriptionPrice.toFixed(2)}{" "}
                      <span className="text-[10px] font-normal text-stone-500">sub refill</span>
                    </span>
                  </div>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="px-5 py-2.5 text-xs font-semibold rounded-full bg-emerald-800 text-white hover:bg-emerald-900 transition-all duration-200 shadow-sm hover:shadow"
                  >
                    Configure Ritual
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-stone-50 rounded-2xl py-20 px-4 text-center max-w-md mx-auto border border-stone-100 space-y-4">
          <SlidersHorizontal className="h-12 w-12 text-stone-300 mx-auto" />
          <h3 className="font-serif text-lg font-medium text-stone-900">No Botanicals Found</h3>
          <p className="text-stone-500 text-sm">
            We couldn't find any products matching your criteria. Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-full bg-emerald-800 text-white hover:bg-emerald-950 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
