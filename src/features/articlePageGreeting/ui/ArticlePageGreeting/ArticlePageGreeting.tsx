import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isArticlesPageWasOpened } = useJsonSettings();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);
  const onClose = () => setIsOpen(false);

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Text title={t('123')} text={t('3123')} />
    </Modal>
  );
});
