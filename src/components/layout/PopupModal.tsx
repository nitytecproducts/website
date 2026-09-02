// src/components/layout/PopupModal.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiZap, FiUsers, FiTrendingUp } from 'react-icons/fi';

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [neverShow, setNeverShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('nitytec-popup-seen');
    if (!seen) {
      const t = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
    if (neverShow) localStorage.setItem('nitytec-popup-seen', 'true');
  };

  const features = [
    { icon: <FiTrendingUp className="w-4 h-4" />, text: 'Boost your business growth' },
    { icon: <FiUsers className="w-4 h-4" />,      text: 'Trusted by 500+ companies' },
    { icon: <FiZap className="w-4 h-4" />,         text: '24/7 dedicated support' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-2xl bg-[#0d0d0d] border border-white/[0.09] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="w-3.5 h-3.5" />
            </button>

            {/* Header */}
            <div className="px-7 pt-7 pb-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center">
                  <span className="font-playfair font-bold text-white text-base">N</span>
                </div>
                <div>
                  <h2 className="font-playfair font-bold text-white text-xl leading-tight">
                    Welcome to Nitytec.
                  </h2>
                  <p className="text-gray-500 text-xs mt-0.5">Precision Intelligence</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-7 py-6 flex flex-col gap-5">
              <h3 className="font-playfair font-bold text-white text-lg leading-snug">
                Transform Your Digital Presence.
              </h3>

              <div className="flex flex-col gap-2.5">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 text-gray-400 text-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                      {f.icon}
                    </div>
                    {f.text}
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] px-4 py-3 text-center">
                <p className="text-white text-sm">
                  <span className="text-gray-400">Special Offer —</span>{' '}
                  <span className="font-medium">20% off your first project.</span>
                </p>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={neverShow}
                  onChange={(e) => setNeverShow(e.target.checked)}
                  className="w-3.5 h-3.5 rounded accent-white bg-transparent border-white/20"
                />
                <span className="text-xs text-gray-500">Don't show this again</span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={close}
                  className="flex-1 py-2.5 rounded-xl border border-white/[0.08] text-gray-400 text-sm hover:text-white hover:border-white/20 transition-colors"
                >
                  Maybe Later
                </button>
                <button
                  onClick={close}
                  className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5"
                >
                  Get Started
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
