import { LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext } from '../lib/ThemeContext';
import { type FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;
interface IThemeProviderProps {
  initialTheme?: ETheme;
}
const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
  const [ theme, setTheme ] = useState<ETheme>(initialTheme || defaultTheme)
  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [ theme ])
  return (
    <ThemeContext.Provider value={ defaultProps }>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
