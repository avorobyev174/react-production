import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ETheme } from '@/shared/const/theme';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();
  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={EButtonTheme.CLEAR}
      onClick={onToggleHandler}
    >
      {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export const MemoizedThemeSwitcher = memo(ThemeSwitcher);
