// src/pages/Products.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Web Platform Suite',
      description: 'Complete web application development with modern frameworks',
      tech: ['React', 'Next.js', 'Node.js'],
      icon: '🌐'
    },
    {
      name: 'Mobile Solutions',
      description: 'Cross-platform mobile applications for iOS and Android',
      tech: ['React Native', 'Flutter', 'Firebase'],
      icon: '📱'
    },
    {
      name: 'API & Backend Services',
      description: 'Robust backend systems and RESTful APIs',
      tech: ['Python', 'Flask', 'PostgreSQL'],
      icon: '⚙️'
    },
    {
      name: 'Cloud Deployment',
      description: 'Scalable cloud infrastructure and DevOps',
      tech: ['AWS', 'Docker', 'Kubernetes'],
      icon: '☁️'
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
    <div className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products & Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-black text-xl">
                  {product.icon}
                </div>
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-white to-gray-300 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {product.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We specialize in building tailored solutions that perfectly match your business requirements.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Discuss Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;