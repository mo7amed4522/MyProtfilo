'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download, Mail, MapPin, Briefcase, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 7, 0],
            x: [0, 7, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl md:text-5xl font-bold shadow-xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              >
                KM
              </motion.div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white dark:border-slate-900" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Backend & Mobile Engineer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 font-medium"
          >
            Building robust solutions with Go, Flutter, and Cloud Technologies
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate software engineer with 3+ years of experience developing scalable backend systems
            and cross-platform mobile applications. Specialized in Go microservices architecture and
            Flutter development, delivering high-quality solutions for modern tech challenges.
          </motion.p>

          {/* Status badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base"
          >
            <div className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Based in UAE</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Backend Developer at Hera Sawda Technologies Co</span>
              <span className="sm:hidden">Backend Developer</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Open for opportunities</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<Github className="w-4 h-4 sm:w-5 sm:h-5" />}
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-6 py-3"
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 py-3"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Download className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="w-full sm:w-auto px-6 py-3"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 max-w-3xl mx-auto"
          >
            {['Go', 'Flutter', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  y: -2
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};