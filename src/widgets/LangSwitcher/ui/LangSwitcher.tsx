import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={ classNames('', {}, [ className ])}
      theme={ EButtonTheme.CLEAR }
      onClick={ toggle }
    >
      { short ? t('Короткий язык') : t('Язык') }
    </Button>
  );
};

export const MemoizedLangSwitcher = memo(LangSwitcher);
