import { type ILoginSchema } from '@/features/AuthByUserName';
import { loginActions, loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';

describe('loginSlice test', () => {
  test('test set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: 'test1' };
    expect(loginReducer(
      state as ILoginSchema,
      loginActions.setUserName('test2')
    )).toEqual({ username: 'test2' })
  })

  test('test set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '123' };
    expect(loginReducer(
      state as ILoginSchema,
      loginActions.setPassword('1234')
    )).toEqual({ password: '1234' })
  })
})
