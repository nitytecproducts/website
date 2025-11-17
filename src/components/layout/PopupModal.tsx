// src/components/layout/PopupModal.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiCalendar, FiUsers, FiTrendingUp } from 'react-icons/fi';

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [neverShowAgain, setNeverShowAgain] = useState(false);

  useEffect(() => {
    // Check if user has previously opted out
    const hasSeenPopup = localStorage.getItem('nitytec-popup-seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (neverShowAgain) {
      localStorage.setItem('nitytec-popup-seen', 'true');
    }
  };

  const features = [
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      text: "Boost your business growth"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      text: "Trusted by 500+ companies"
    },
    {
      icon: <FiCalendar className="w-6 h-6" />,
      text: "24/7 dedicated support"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-gray-800 to-black p-6 text-white border-b border-gray-800">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-lg">N</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Welcome to Nitytec</h2>
                  <p className="text-gray-400 text-sm">Digital Solutions Partner</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Transform Your Digital Presence
              </h3>
              
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="w-8 h-8 bg-gray-800 text-white rounded-lg flex items-center justify-center border border-gray-700">
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
                <p className="text-white text-sm text-center">
                  🎉 <strong>Special Offer:</strong> Get 20% off on your first project!
                </p>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="neverShow"
                  checked={neverShowAgain}
                  onChange={(e) => setNeverShowAgain(e.target.checked)}
                  className="w-4 h-4 text-white bg-gray-800 border-gray-700 rounded focus:ring-white focus:ring-2"
                />
                <label htmlFor="neverShow" className="text-sm text-gray-400">
                  Don't show this again
                </label>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors font-medium"
                >
                  Maybe Later
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2 border border-white"
                >
                  <span>Get Started</span>
                  <FiArrowRight className="w-4 h-4" />
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