'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Calendar, Filter, Code, Smartphone, Server } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { useGitHub } from '../../../hooks/useGitHub';
import { ProjectFilter } from '@/lib/types';
import { formatGitHubDate, getLanguageColor } from '@/lib/github';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const filterOptions: { value: ProjectFilter; label: string; icon: React.ReactNode }[] = [
  {
    value: 'all',
    label: 'All Projects',
    icon: <Filter className="w-4 h-4" />
  },
  {
    value: 'mobile',
    label: 'Mobile Apps',
    icon: <Smartphone className="w-4 h-4" />
  },
  {
    value: 'backend',
    label: 'Backend',
    icon: <Server className="w-4 h-4" />
  },
  {
    value: 'fullstack',
    label: 'Full Stack',
    icon: <Code className="w-4 h-4" />
  }
];

export const Projects: React.FC = () => {
  const { projects, loading, error } = useGitHub();
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(project => project.category === filter);
  }, [projects, filter]);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured).slice(0, 3);
  }, [projects]);

  if (loading) {
    return (
      <section id="projects" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8">
              Loading GitHub projects...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl h-48 sm:h-56 mb-4"></div>
                <div className="bg-slate-200 dark:bg-slate-700 h-4 rounded mb-2"></div>
                <div className="bg-slate-200 dark:bg-slate-700 h-3 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-base sm:text-lg text-red-600 dark:text-red-400 mb-8">
              Error loading projects: {error}
            </p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work spanning mobile applications, backend systems, and full-stack solutions.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                filter === option.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.icon}
              <span>{option.label}</span>
              {option.value !== 'all' && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {projects.filter(p => p.category === option.value).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
              >
                <Card hover className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative mb-4">
                      {/* Project image placeholder with gradient */}
                      <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl w-full h-48 sm:h-56 flex items-center justify-center">
                        <div className="bg-slate-300 dark:bg-slate-600 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded-xl w-16 h-16 flex items-center justify-center">
                          <Code className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                        </div>
                      </div>
                      {project.featured && (
                        <motion.div
                          className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05, type: 'spring', stiffness: 300 }}
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>
                    <CardTitle className="text-lg sm:text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="capitalize">{project.category}</span>
                        <span>Updated recently</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View live demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="text-xs sm:text-sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All Projects CTA */}
        {filter === 'all' && projects.length > 6 && (
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="secondary"
              size="lg"
              icon={<Github className="w-5 h-5" />}
              onClick={() => window.open('https://github.com/mo7amed4522', '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};