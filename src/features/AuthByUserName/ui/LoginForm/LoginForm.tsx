import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [ dispatch ]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [ dispatch ]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [ username, password, dispatch ]);

  return (
    <div className={ classNames(styles.LoginForm, {}, [ className ])}>
      <Text text={ t('Форма авторизации') }/>
      { error && <Text text={ t('Вы ввели неверный логин или пароль') } theme={ ETextTheme.ERROR }/> }
      <Input
        placeholder={ t('Ввведите имя') }
        className={ styles.input }
        type="text"
        autofocus
        onChange={ onChangeUserName }
        value={ username }
      />
      <Input
        placeholder={ t('Ввведите пароль') }
        className={ styles.input }
        type="text"
        onChange={ onChangePassword }
        value={ password }
      />
      <Button
        className={ styles.loginBtn }
        theme={ EButtonTheme.OUTLINE }
        onClick={ onLoginClick }
        disabled={ isLoading }
      >
        { t('Войти') }
      </Button>
    </div>
  );
};

export const MemoizedLoginForm = memo(LoginForm);
