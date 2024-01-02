import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entites/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <Counter/>
      { t('Главная') }
    </div>
  );
};

export default MainPage;
