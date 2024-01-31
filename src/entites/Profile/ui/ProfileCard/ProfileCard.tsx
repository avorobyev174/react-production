import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type IProfile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, type ECurrency } from 'entites/Currency';
import { CountrySelect, type ECountry } from 'entites/Country';

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: ECurrency) => void;
  onChangeCountry?: (country: ECountry) => void;
  readonly?: boolean;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  readonly,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry
}: IProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={ classNames(styles.ProfileCard, {}, [ className, styles.loading ])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={ classNames(styles.ProfileCard, { [ styles.loading ]: true }, [ className ])}>
        <Text
          text={ t('Попробуйте обновить страницу') }
          title={ t('Произошла непредвиденная ошибка') }
          theme={ ETextTheme.ERROR }
          align={ ETextAlign.CENTER }
        />
      </div>
    );
  }

  const mods: Mods = {
    [ styles.editing ]: !readonly
  };

  return (
    <div className={ classNames(styles.ProfileCard, mods, [ className ])}>
      <div className={ styles.data }>
        { data?.avatar &&
          <div className={ styles.avatarWrapper }>
            <Avatar src={ data?.avatar } size={ 50 }/>
          </div>
        }
        <Input
          value={ data?.first }
          placeholder={ t('Ваше имя') }
          className={ styles.input }
          onChange={ onChangeFirstname }
          readonly={ readonly }
        />
        <Input
          value={ data?.lastname }
          placeholder={ t('Ваше фамилия') }
          className={ styles.input }
          onChange={ onChangeLastname }
          readonly={ readonly }
        />
        <Input
          value={ data?.age }
          placeholder={ t('Ваш возраст') }
          className={ styles.input }
          onChange={ onChangeAge }
          readonly={ readonly }
        />
        <Input
          value={ data?.city }
          placeholder={ t('Ваш город') }
          className={ styles.input }
          onChange={ onChangeCity }
          readonly={ readonly }
        />
        <Input
          value={ data?.username }
          placeholder={ t('Ваш никнейм') }
          className={ styles.input }
          onChange={ onChangeUsername }
          readonly={ readonly }
        />
        <Input
          value={ data?.avatar }
          placeholder={ t('Ваш аватар') }
          className={ styles.input }
          onChange={ onChangeAvatar }
          readonly={ readonly }
        />
        <CurrencySelect
          className={ styles.input }
          value={ data?.currency }
          onChange={ onChangeCurrency }
          readonly={ readonly }
        />
        <CountrySelect
          className={ styles.input }
          value={ data?.country }
          onChange={ onChangeCountry }
          readonly={ readonly }
        />
      </div>
    </div>
  );
};
