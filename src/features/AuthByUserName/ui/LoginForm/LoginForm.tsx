import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { ETextTheme, Text } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUserName, getLoginError, getLoginIsLoading, getLoginPassword } from '@/features/AuthByUserName';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: TReducersList = {
  loginForm: loginReducer
}

export const LoginForm = ({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [ dispatch ]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [ dispatch ]);

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUserName({ username, password }));
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [ onSuccess, username, password, dispatch ]);

  return (
    <DynamicModuleLoader
      name="loginForm"
      reducers={ initialReducers }
    >
      <div className={ classNames(styles.LoginForm, {}, [ className ?? '' ])}>
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
    </DynamicModuleLoader>
  );
};

const MemoizedLoginForm = memo(LoginForm);
export default MemoizedLoginForm;
