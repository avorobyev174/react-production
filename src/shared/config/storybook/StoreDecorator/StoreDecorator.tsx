import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  // eslint-disable-next-line react/display-name
) => (Story: StoryFn) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultReducers, ...asyncReducers } }>
    <Story/>
  </StoreProvider>
);
