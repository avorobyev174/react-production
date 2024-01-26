import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUserName, getLoginError, getLoginIsLoading, getLoginPassword } from 'features/AuthByUserName';

export interface ILoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [ username, password, dispatch ]);

  return (
    <DynamicModuleLoader
      // eslint-disable-next-line i18next/no-literal-string
      name="loginForm"
      removeAfterUnmount={ true }
      reducers={ initialReducers }
    >
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
    </DynamicModuleLoader>
  );
};

const MemoizedLoginForm = memo(LoginForm);
export default MemoizedLoginForm;
