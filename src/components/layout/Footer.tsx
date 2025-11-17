// src/components/layout/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: ['Web Development', 'Mobile Apps', 'Backend Services', 'Cloud Deployment']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog']
    },
    {
      title: 'Support',
      links: ['Documentation', 'Help Center', 'Contact', 'Status']
    }
  ];

  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: <FiTwitter className="w-5 h-5" />, 
      url: 'https://twitter.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin className="w-5 h-5" />, 
      url: 'https://linkedin.com/company/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    { 
      name: 'GitHub', 
      icon: <FiGithub className="w-5 h-5" />, 
      url: 'https://github.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    { 
      name: 'Instagram', 
      icon: <FiInstagram className="w-5 h-5" />, 
      url: 'https://instagram.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    { 
      name: 'Email', 
      icon: <FiMail className="w-5 h-5" />, 
      url: 'mailto:hello@nitytec.com',
      color: 'hover:bg-white hover:text-black'
    }
  ];

  const MotionLink = motion(Link);

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold">Nitytec</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We create modern, scalable digital solutions using cutting-edge technologies. 
              From concept to deployment, we bring your ideas to life with precision and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <MotionLink 
                      to="/solutions"
                      className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors flex-1 md:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap border border-white"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Nitytec. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;