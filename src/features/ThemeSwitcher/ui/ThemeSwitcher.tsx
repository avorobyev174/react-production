import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ETheme } from '@/shared/const/theme';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [ className ])}
      theme={EButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      { theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export const MemoizedThemeSwitcher = memo(ThemeSwitcher);
