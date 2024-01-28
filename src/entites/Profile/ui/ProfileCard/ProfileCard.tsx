import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entites/Profile/model/selectors/getProfileData/getProfileData';
// import { getProfileIsLoading } from 'entites/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
// import { getProfileError } from 'entites/Profile/model/selectors/getProfileError/getProfileError';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={ classNames(styles.ProfileCard, {}, [ className ])}>
      <div className={ styles.header }>
        <Text title={ t('Профиль') } />
        <Button className={ styles.editButton } theme={ EButtonTheme.OUTLINE }>
          { t('Редактировать') }
        </Button>
      </div>
      <div className={ styles.data }>
        <Input value={ data?.first } placeholder={ t('Ваше имя') } className={ styles.input }/>
        <Input value={ data?.lastname } placeholder={ t('Ваше фамилия') } className={ styles.input }/>
      </div>
    </div>
  );
};
