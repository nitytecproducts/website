// src/pages/Home.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaAws,
  FaDocker,
  FaGitAlt,
  FaMobileAlt,
  FaGlobeAmericas,
  FaTools,
  FaRocket,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiFlask, 
  SiMongodb, 
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiJest,
  SiCypress
} from 'react-icons/si';
import { 
  FiCode, 
  FiSmartphone, 
  FiGlobe, 
  FiSettings,
  FiCloud,
  FiLayers,
  FiShield,
  FiBarChart,
  FiUsers
} from 'react-icons/fi';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach((element) => {
          const speed = element.getAttribute('data-speed') || '0.5';
          const yPos = -(scrolled * parseFloat(speed));
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techStack = [
    { 
      name: 'Python', 
      icon: <FaPython className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'React', 
      icon: <FaReact className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-800 to-black'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'Flask', 
      icon: <SiFlask className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'PostgreSQL', 
      icon: <SiPostgresql className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'Tailwind', 
      icon: <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'AWS', 
      icon: <FaAws className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'Docker', 
      icon: <FaDocker className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'Redis', 
      icon: <SiRedis className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'Kubernetes', 
      icon: <SiKubernetes className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'GraphQL', 
      icon: <SiGraphql className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    { 
      name: 'Jest', 
      icon: <SiJest className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    { 
      name: 'Cypress', 
      icon: <SiCypress className="w-6 h-6 sm:w-8 sm:h-8" />, 
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800'
    }
  ];

  const services = [
    {
      icon: <FiCode className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development with modern frameworks and best practices'
    },
    {
      icon: <FiSmartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions for iOS and Android platforms'
    },
    {
      icon: <FiGlobe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Web Solutions',
      description: 'Scalable web applications, e-commerce platforms, and progressive web apps'
    },
    {
      icon: <FaServer className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Backend & API',
      description: 'Robust backend systems, RESTful APIs, and microservices architecture'
    },
    {
      icon: <FiCloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD pipelines, and deployment automation'
    },
    {
      icon: <FiSettings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, performance optimization, and technical support'
    },
    {
      icon: <FaDatabase className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for optimal performance'
    },
    {
      icon: <FiLayers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'System Architecture',
      description: 'Scalable system design and architecture for enterprise applications'
    },
    {
      icon: <FiShield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Security & Compliance',
      description: 'Security audits, compliance implementation, and data protection'
    },
    {
      icon: <FiBarChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Analytics & BI',
      description: 'Business intelligence, data analytics, and reporting solutions'
    },
    {
      icon: <FiUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Team Augmentation',
      description: 'Expert developers to augment your existing team and accelerate delivery'
    },
    {
      icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'MVP Development',
      description: 'Rapid Minimum Viable Product development to validate your ideas quickly'
    }
  ];

  return (
    <div ref={parallaxRef} className="min-h-screen bg-black text-white overflow-x-hidden w-full">
      {/* Hero Section - Fixed to prevent horizontal scroll */}
      <section className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-black to-gray-900 w-full"
          data-speed="0.5"
        ></div>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="text-center relative z-10 max-w-7xl mx-auto w-full px-2 sm:px-4"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            Digital
            <span className="block text-gray-300 mt-2 sm:mt-4">
              Excellence
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We create modern, scalable digital solutions using cutting-edge technologies. 
            From concept to deployment, we bring your ideas to life with precision and innovation.
          </motion.p>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link to="/solutions" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Solutions
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-black w-full overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-black to-gray-900 w-full"
          data-speed="0.3"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Tech Stack
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive technology expertise for building robust, scalable, and high-performance solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6 w-full px-2 sm:px-0">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border border-gray-800 text-center group cursor-pointer hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 w-full"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl ${tech.bgColor} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="font-semibold text-white text-xs sm:text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-black w-full overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-black to-gray-900 w-full"
          data-speed="0.4"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Comprehensive Services
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              End-to-end digital solutions tailored to transform your business and drive growth
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-white to-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center text-black mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-black w-full overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-black to-gray-900 w-full"
          data-speed="0.2"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Our Impact
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full"
          >
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '25+', label: 'Technologies' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center bg-gray-900 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800 hover:bg-gray-800 transition-all duration-300 w-full"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-black w-full overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-black to-gray-900 w-full"
          data-speed="0.3"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-gray-800 bg-gray-900/50 backdrop-blur-sm mx-4 sm:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch with our team to discuss your project and bring your vision to life.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;