import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entites/Profile';

const defaultReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
) => (Story: StoryFn) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultReducers, ...asyncReducers } }>
    <Story/>
  </StoreProvider>
);
