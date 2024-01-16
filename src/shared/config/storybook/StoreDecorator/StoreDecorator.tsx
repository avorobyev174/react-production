import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (Story: StoryFn) => (
  <StoreProvider initialState={ state }>
    <Story/>
  </StoreProvider>
);
