// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastScrollY && y > 80) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-[1.35rem] font-bold text-white tracking-tight leading-none font-playfair">
            Nitytec.
          </span>
        </Link>

        {/* Desktop nav — right-aligned, matching design */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white font-normal'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 w-full h-px bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-black/95 border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'text-white bg-white/[0.08]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
