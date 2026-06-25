import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, isSubscription: boolean) => void;
  removeFromCart: (productId: string, isSubscription: boolean) => void;
  updateQuantity: (productId: string, isSubscription: boolean, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('glow_green_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('glow_green_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, isSubscription: boolean) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.isSubscription === isSubscription
      );

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      }

      return [...prev, { product, quantity, isSubscription }];
    });
  };

  const removeFromCart = (productId: string, isSubscription: boolean) => {
    setCart((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.isSubscription === isSubscription)
    ));
  };

  const updateQuantity = (productId: string, isSubscription: boolean, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, isSubscription);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.isSubscription === isSubscription
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const cartSubtotal = cart.reduce((total, item) => {
    const price = item.isSubscription ? item.product.subscriptionPrice : item.product.price;
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
