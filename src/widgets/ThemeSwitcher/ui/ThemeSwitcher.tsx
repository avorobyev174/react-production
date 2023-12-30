import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss'
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, EThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ EThemeButton.CLEAR }
      className={ classNames(styles.ThemeSwithcer, {}, [ className ])}
      onClick={ toggleTheme }
    >
      { theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
