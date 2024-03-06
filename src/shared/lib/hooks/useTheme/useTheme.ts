import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ETheme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage';

interface UseTheme {
  toggleTheme: () => void;
  theme: ETheme;
}

export function useTheme(): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ETheme;
    switch (theme) {
      case ETheme.DARK:
        newTheme = ETheme.LIGHT;
        break;
      case ETheme.LIGHT:
        newTheme = ETheme.ORANGE;
        break;
      case ETheme.ORANGE:
        newTheme = ETheme.DARK;
        break;
      default:
        newTheme = ETheme.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || ETheme.LIGHT, toggleTheme };
}
