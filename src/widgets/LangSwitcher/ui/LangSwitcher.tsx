import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, EThemeButton } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={ classNames('', {}, [ className ])}
      theme={ EThemeButton.CLEAR }
      onClick={ toggle }
    >
      { t('Язык') }
    </Button>
  );
};
