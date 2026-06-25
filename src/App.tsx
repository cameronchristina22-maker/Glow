import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { AboutUs } from './pages/AboutUs';
import { Sustainability } from './pages/Sustainability';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FAFDFC] text-stone-900 font-sans">
          {/* Main Navigation */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/sustainability" element={<Sustainability />} />
            </Routes>
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
