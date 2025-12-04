'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Heart, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { SOCIAL_LINKS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mo7amed4522', label: 'GitHub Profile' },
    { icon: Linkedin, href: '#', label: 'LinkedIn Profile' },
    { icon: Mail, href: 'mailto:khaled.mohamed@example.com', label: 'Send Email' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Technologies',
      links: [
        { label: 'Go', href: 'https://golang.org' },
        { label: 'Flutter', href: 'https://flutter.dev' },
        { label: 'TypeScript', href: 'https://www.typescriptlang.org' },
        { label: 'Next.js', href: 'https://nextjs.org' },
        { label: 'AWS', href: 'https://aws.amazon.com' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resume', href: '#' },
        { label: 'GitHub', href: 'https://github.com/mo7amed4522' },
        { label: 'Blog', href: '#' },
        { label: 'Email', href: 'mailto:khaled.mohamed@example.com' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Brand & Description */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                  KM
                </div>
                <span className="text-xl font-bold">Khaled Mohamed</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Backend & Mobile Engineer passionate about building scalable solutions with Go, Flutter, and cloud technologies.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                        whileHover={{ x: 4 }}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a href="mailto:khaled.mohamed@example.com" className="text-slate-400 hover:text-white transition-colors duration-200">
                    khaled.mohamed@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-400">Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-400">+971 50 123 4567</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-slate-400 text-sm"
            >
              <span>© {currentYear} Khaled Mohamed</span>
              <span>•</span>
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js & TypeScript</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 text-sm text-slate-400"
            >
              <span>All rights reserved</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUp className="w-4 h-4" />}
              onClick={scrollToTop}
              className="shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Scroll to top"
            >
              Top
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
