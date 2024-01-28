import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { useContext } from 'react';

interface UseTheme {
  toggleTheme: () => void;
  theme: ETheme;
}

export function useTheme (): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme: theme || ETheme.LIGHT, toggleTheme };
}
