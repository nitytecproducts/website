// src/pages/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiMessageCircle,
  FiPhone,
  FiCalendar
} from 'react-icons/fi';
import { 
  FaWhatsapp,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Us',
      detail: 'hello@nitytec.com',
      subtitle: 'We\'ll respond quickly'
    },
    {
      icon: <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Global Office',
      detail: 'Remote Team Worldwide',
      subtitle: 'Serving clients globally'
    },
    {
      icon: <FiClock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      subtitle: 'Quick turnaround guaranteed'
    }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://twitter.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://linkedin.com/company/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://github.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://instagram.com/nitytec',
      color: 'hover:bg-white hover:text-black'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://wa.me/15551234567',
      color: 'hover:bg-white hover:text-black'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://t.me/nitytec',
      color: 'hover:bg-white hover:text-black'
    }
  ];

  const quickActions = [
    {
      icon: <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Live Chat',
      description: 'Chat with our team instantly',
      action: 'Start Chat'
    },
    {
      icon: <FiCalendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Book Meeting',
      description: 'Schedule a video call',
      action: 'Book Now'
    },
    {
      icon: <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Join Community',
      description: 'Connect with other developers',
      action: 'Join Discord'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
          >
            Let's Build
            <br />
            <span className="text-gray-300">
              Something Amazing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Ready to transform your ideas into reality? Get in touch with our team and let's create 
            exceptional digital experiences together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800"
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Project Inquiry</h2>
              <p className="text-gray-400 text-sm sm:text-base">Tell us about your project and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm sm:text-base"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm sm:text-base"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="" className="text-gray-500">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="" className="text-gray-500">Select timeline</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-4 months">3-4 months</option>
                    <option value="5-6 months">5-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none placeholder-gray-500 text-sm sm:text-base"
                  required
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? "none" : "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    <span className="text-sm sm:text-base">Processing...</span>
                  </div>
                ) : (
                  'Send Message →'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-gray-900 p-3 sm:p-4 rounded-xl border border-gray-800 hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base truncate">{info.title}</p>
                      <p className="text-gray-300 font-medium text-sm truncate">{info.detail}</p>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Follow Us On</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Stay connected and get the latest updates about our projects and insights.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 rounded-xl border border-gray-700 bg-gray-800 flex flex-col items-center justify-center text-center group transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <span className="mb-1 text-white group-hover:text-black transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-black transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-2 sm:space-y-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 sm:p-4 rounded-xl border border-gray-700 bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center text-black">
                          {action.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-white text-xs sm:text-sm truncate">{action.title}</p>
                          <p className="text-gray-400 text-xs truncate">{action.description}</p>
                        </div>
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium group-hover:text-black transition-colors whitespace-nowrap ml-2">
                        {action.action}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;