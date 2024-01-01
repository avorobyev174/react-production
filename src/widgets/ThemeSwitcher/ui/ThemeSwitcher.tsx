import { classNames } from 'shared/lib/classNames/classNames';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={ classNames('', {}, [ className ])}
      theme={ EButtonTheme.CLEAR }
      onClick={ toggleTheme }
    >
      { theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
