'use client';

import { useTheme as useThemeContext } from '../app/components/providers/ThemeProvider';

export const useTheme = () => {
  return useThemeContext();
};