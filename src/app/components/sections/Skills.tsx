'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Smartphone, Cloud, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { SKILLS_DATA, SkillCategoryData } from '@/lib/constants';

const iconMap = {
  Code: Code,
  Database: Database,
  Server: Server,
  Smartphone: Smartphone,
  Cloud: Cloud,
};

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

const SkillBar: React.FC<{
  skill: { name: string; proficiency: number; years?: number };
  color: string;
  isVisible: boolean;
}> = ({ skill, color, isVisible }) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {skill.name}
        </span>
        <div className="flex items-center space-x-2">
          {skill.years && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {skill.years}y
            </span>
          )}
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {skill.proficiency}%
          </span>
        </div>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${getGradientColors(color)} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.proficiency}%` : 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2
          }}
        />
      </div>
    </motion.div>
  );
};

const getGradientColors = (color: string): string => {
  const gradients: Record<string, string> = {
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600',
    purple: 'from-purple-400 to-purple-600',
    orange: 'from-orange-400 to-orange-600',
    red: 'from-red-400 to-red-600',
  };
  return gradients[color] || gradients.blue;
};

const getIconColors = (color: string): string => {
  const iconColors: Record<string, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400',
  };
  return iconColors[color] || iconColors.blue;
};

const SkillCategory: React.FC<{
  category: SkillCategoryData;
  index: number;
}> = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const Icon = iconMap[category.icon as keyof typeof iconMap] || Code;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      custom={index}
    >
      <Card className="h-full">
        <CardHeader className="pb-4">
          <motion.div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${getIconColors(category.color)}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isExpanded ? 'up' : 'down'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      isVisible={isInView}
                    />
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {category.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill.name}
                  className={`px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400`}
                >
                  {skill.name}
                </span>
              ))}
              {category.skills.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500">
                  +{category.skills.length - 4}
                </span>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const totalSkills = SKILLS_DATA.reduce((total, category) => total + category.skills.length, 0);
  const averageProficiency = Math.round(
    SKILLS_DATA.reduce((total, category) =>
      total + category.skills.reduce((catTotal, skill) => catTotal + skill.proficiency, 0), 0
    ) / totalSkills
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across different domains,
            with proficiency levels based on real-world project experience.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {SKILLS_DATA.length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Categories
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {totalSkills}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Technologies
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {averageProficiency}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Avg. Proficiency
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              3+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Years Experience
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {SKILLS_DATA.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Key Technologies Highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Go', 'Flutter', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL', 'Redis'].map((tech) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium text-slate-700 dark:text-slate-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
