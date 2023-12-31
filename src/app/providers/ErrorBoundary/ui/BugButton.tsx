import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
  const [ error, setError ] = useState(false);
  const { t } = useTranslation()
  const onThrow = () => { setError(true); }

  useEffect(() => {
    if (error) {
      throw new Error('123')
    }
  }, [ error ])

  return <Button onClick={ onThrow }>{ t('throw error') }</Button>;
};
