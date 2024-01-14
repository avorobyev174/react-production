import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={ classNames(styles.LoginForm, {}, [ className ])}>
      <Input
        placeholder={ t('Ввведите имя') }
        className={ styles.input } type="text"
        autofocus
      />
      <Input
        placeholder={ t('Ввведите пароль') }
        className={ styles.input } type="text"
      />
      <Button className={ styles.loginBtn }>
        { t('Войти') }
      </Button>
    </div>
  );
};
