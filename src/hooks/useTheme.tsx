import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um themeProvide');
  }

  return context;
}
