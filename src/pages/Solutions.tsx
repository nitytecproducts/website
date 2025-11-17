// src/pages/Solutions.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiGlobe, 
  FiSmartphone, 
  FiServer, 
  FiCloud,
  FiBook,
  FiBarChart2,
  FiUsers,
  FiMapPin,
  FiShoppingCart,
  FiMessageSquare,
  FiDatabase,
  FiShield
} from 'react-icons/fi';
import { 
  FaRobot,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
} from 'react-icons/fa';
import { 
  SiGoogleclassroom,
 
} from 'react-icons/si';

const Solutions: React.FC = () => {
  const solutions = [
    {
      category: 'Learning Management',
      icon: <FaGraduationCap className="w-8 h-8" />,
      items: [
        'LMS Platforms',
        'Online Course Systems',
        'Student Portals',
        'Progress Tracking',
        'Assessment Tools',
        'Virtual Classrooms'
      ],
      features: ['Interactive Learning', 'Progress Tracking', 'Multi-format', 'Engaging']
    },
    {
      category: 'CRM Systems',
      icon: <FiUsers className="w-8 h-8" />,
      items: [
        'Customer Relationship Management',
        'Sales Automation',
        'Lead Management',
        'Customer Support',
        'Marketing Automation',
        'Analytics & Reporting'
      ],
      features: ['Customer Focused', 'Automated Workflows', '360° View', 'Integrated']
    },
    {
      category: 'Local Connecting Platforms',
      icon: <FiMapPin className="w-8 h-8" />,
      items: [
        'Community Marketplaces',
        'Local Service Platforms',
        'Event Management Systems',
        'Location-based Services',
        'Review & Rating Systems',
        'Payment Integration'
      ],
      features: ['Location-based', 'Community Driven', 'Real-time', 'Trust Building']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end digital solutions powered by cutting-edge technology to drive your business forward
            </p>
          </motion.div>

          {/* All Solutions Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center text-black mr-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {solution.category}
                  </h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {solution.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="flex items-center text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1">
                  {solution.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center border border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Solution?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;