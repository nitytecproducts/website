// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.07] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="text-lg font-bold tracking-tight text-white font-playfair">Nitytec.</span>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          &copy; 2026 Nitytec.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs text-gray-500">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-white transition-colors">Security</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
