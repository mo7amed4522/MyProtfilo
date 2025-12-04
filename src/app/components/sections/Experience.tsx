'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Building } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/lib/constants';
import { format } from 'date-fns';
import { TimelineItem } from '@/lib/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return format(date, 'MMM yyyy');
  } catch {
    return dateString;
  }
};

const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }
};

const TimelineItemComponent: React.FC<{
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}> = ({ item, index, isLeft }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      custom={index}
      className={`flex items-center mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className={`p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300 ${isLeft ? 'ml-auto md:ml-0' : 'mr-auto md:mr-0'}`}>
          <div className="flex items-center mb-3 md:justify-end">
            <Building className="w-5 h-5 text-slate-500 mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.company}
            </h3>
          </div>

          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 md:justify-end flex md:flex-row flex-col">
            {item.position}
          </h4>

          <div className={`flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4 space-x-4 ${isLeft ? 'md:justify-end' : ''} flex-wrap`}>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {item.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium">
              ({calculateDuration(item.startDate, item.endDate)})
            </div>
          </div>

          <ul className="space-y-2 mb-4 text-slate-700 dark:text-slate-300">
            {item.description.map((desc: string, descIndex: number) => (
              <li key={descIndex} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {item.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="relative">
          <motion.div
            className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          />
          {item.isCurrent && (
            <motion.div
              className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </div>

      {/* Empty Space for Desktop */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

const MobileTimelineItemComponent: React.FC<{
  item: TimelineItem;
  index: number;
}> = ({ item, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      custom={index}
      className="mb-8 relative pl-8"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 -translate-x-1/2">
        {item.isCurrent && (
          <motion.div
            className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 ml-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {item.company}
        </h3>

        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
          {item.position}
        </h4>

        <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 mb-4 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {item.location}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
          </div>
          <div className="text-blue-600 dark:text-blue-400 font-medium">
            ({calculateDuration(item.startDate, item.endDate)})
          </div>
        </div>

        <ul className="space-y-2 mb-4 text-slate-700 dark:text-slate-300">
          {item.description.map((desc: string, descIndex: number) => (
            <li key={descIndex} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-sm leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const timelineItems: TimelineItem[] = EXPERIENCE_DATA.map(exp => ({
    ...exp,
    isCurrent: !exp.endDate,
    duration: calculateDuration(exp.startDate, exp.endDate)
  }));

  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            My journey through software development, building scalable solutions and gaining expertise
            in various technologies and industries.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block" ref={ref}>
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600 -translate-x-1/2"></div>

            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <TimelineItemComponent
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
          >
            {timelineItems.map((item, index) => (
              <MobileTimelineItemComponent
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
              3+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
              5+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Projects Delivered
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
              10+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Technologies Used
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};