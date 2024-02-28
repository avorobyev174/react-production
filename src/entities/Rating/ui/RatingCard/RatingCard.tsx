import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface IRatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: IRatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel
  } = props;
  const { t } = useTranslation();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ starCount, setStarCount ] = useState(0);
  const [ feedback, setFeedback ] = useState('');

  const onSelectedStars = useCallback((selectedStarsCount: number) => {
    setStarCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [ hasFeedback, onAccept ])

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starCount, feedback);
  }, [ feedback, onAccept, starCount ]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starCount);
  }, [ onCancel, starCount ]);

  const modalContent = (
    <>
      <Text title={ feedbackTitle }/>
      <Input value={ feedback } placeholder={ t('Ваш отзыв') } onChange={ setFeedback }/>
    </>
  );

  return (
    <Card className={ classNames('', {}, [ className ]) }>
      <VStack align="center" gap="8">
        <Text title={ title }/>
        <StarRating size={ 40 } onSelect={ onSelectedStars } />
      </VStack>
      <BrowserView>
        <Modal isOpen={ isModalOpen } lazy>
          <VStack max gap="32">
            { modalContent }
            <HStack
              max
              gap="16"
              justify="center"
            >
              <Button theme={ EButtonTheme.OUTLINE_RED } onClick={ cancelHandler }>
                { t('Закрыть') }
              </Button>
              <Button onClick={ acceptHandler }>
                { t('Отправить') }
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={ isModalOpen } lazy onClose={ cancelHandler }>
          <VStack max gap="32">
            { modalContent }
            <Button
              onClick={ acceptHandler }
              size={ EButtonSize.L }
              fullWidth
            >
              { t('Отправить') }
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
