import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
  hover = true,
  clickable = false,
  onClick
}) => {
  const baseClasses = 'bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700';

  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : '';
  const clickableClasses = clickable ? 'cursor-pointer' : '';

  const CardContent = (
    <div className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}>
      {children}
    </div>
  );

  if (clickable || onClick) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {CardContent}
      </motion.div>
    );
  }

  return <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {CardContent}
  </motion.div>;
};

export const CardHeader: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => (
  <h3 className={`text-xl font-semibold text-slate-900 dark:text-slate-100 ${className}`}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => (
  <p className={`text-slate-600 dark:text-slate-400 mt-1 ${className}`}>
    {children}
  </p>
);

export const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => (
  <div className={`p-6 pt-2 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => (
  <div className={`p-6 pt-0 flex items-center justify-between ${className}`}>
    {children}
  </div>
);