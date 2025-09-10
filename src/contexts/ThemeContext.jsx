// Theme switching has been removed. Retain a no-op provider for compatibility
// in case any component still imports from this module.
import { Fragment } from 'react';

export const ThemeProvider = ({ children }) => <Fragment>{children}</Fragment>;

export const useTheme = () => ({
  theme: 'dark',
  isTransitioning: false,
  toggleTheme: () => {},
  setLightTheme: () => {},
  setDarkTheme: () => {},
  isDark: true,
  isLight: false,
});
