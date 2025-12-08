// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PopupModal from './components/layout/PopupModal';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup was shown in current session
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden w-full">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {showPopup && <PopupModal />}
      </div>
    </Router>
  );
}

export default App;