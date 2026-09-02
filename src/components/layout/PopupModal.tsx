// src/components/layout/PopupModal.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiX, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const stats = [
  { val: '100+', label: 'Products Shipped' },
  { val: '98%',  label: 'Client Retention' },
  { val: '24/7', label: 'Support' },
];

const tags = ['AI Tools', 'Automation', 'Analytics', 'Productivity', 'Cloud'];

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [neverShow, setNeverShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('nitytec-popup-seen');
    if (!seen) {
      const t = setTimeout(() => setIsOpen(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
    if (neverShow) localStorage.setItem('nitytec-popup-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        /* Backdrop */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #0e0e14 0%, #080810 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Purple ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(100,80,200,0.18) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 w-7 h-7 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <FiX className="w-3.5 h-3.5" />
            </button>

            {/* Top: Logo + headline */}
            <div className="relative z-10 px-7 pt-7 pb-6">
              {/* Logo row */}
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <span className="font-playfair font-bold text-white text-sm">N</span>
                </div>
                <span className="font-playfair font-bold text-white text-sm tracking-tight">Nitytec.</span>
                <span
                  className="ml-auto text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(100,80,200,0.15)', color: '#a89cef', border: '1px solid rgba(100,80,200,0.25)' }}
                >
                  New
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-playfair font-bold text-white leading-[1.08] tracking-tight text-[1.9rem]">
                Build smarter.<br />Ship faster.
              </h2>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Join teams using Nitytec's precision tools to eliminate repetitive work and focus on what matters.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-gray-500 px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div
              className="relative z-10 grid grid-cols-3 divide-x mx-7 rounded-xl mb-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', divideColor: 'rgba(255,255,255,0.06)' }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center py-3 gap-0.5"
                  style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <span className="font-playfair font-bold text-white text-lg">{s.val}</span>
                  <span className="text-gray-600 text-[10px] tracking-wide">{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Offer banner */}
            <div
              className="relative z-10 mx-7 mb-5 px-4 py-3 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(100,80,200,0.1)', border: '1px solid rgba(100,80,200,0.2)' }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                style={{ background: 'rgba(100,80,200,0.2)' }}
              >
                ✦
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">20% off</span>{' '}
                <span className="text-gray-400">your first project — limited time.</span>
              </p>
            </div>

            {/* Footer */}
            <div className="relative z-10 px-7 pb-7 flex flex-col gap-3">
              {/* Buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={close}
                  className="flex-1 py-2.5 rounded-xl text-gray-500 text-sm hover:text-gray-300 transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  Later
                </button>
                <Link to="/products" className="flex-1" onClick={close}>
                  <button className="w-full py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5">
                    Explore Products
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>

              {/* Contact link */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={neverShow}
                    onChange={(e) => setNeverShow(e.target.checked)}
                    className="w-3 h-3 accent-white"
                  />
                  <span className="text-[11px] text-gray-600">Don't show again</span>
                </label>
                <Link to="/contact" onClick={close}>
                  <button className="text-[11px] text-gray-600 hover:text-white transition-colors flex items-center gap-1">
                    Contact us <FiArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
