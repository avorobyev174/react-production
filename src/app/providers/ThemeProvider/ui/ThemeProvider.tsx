import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { ETheme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface IThemeProviderProps {
  initialTheme?: ETheme;
  children: ReactNode;
}
const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState<ETheme>(
    initialTheme || defaultTheme || ETheme.LIGHT,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
