import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/authByUserName/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddNewComment/testing';
import { articleDetailsPageReducer } from '@/pages/article-details-page/testing';

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: TReducersList,
) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
