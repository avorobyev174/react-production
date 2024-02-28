import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/AddNewComment/model/slice/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/article-details-page/model/slices';

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: TReducersList
) => (Story: StoryFn) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultReducers, ...asyncReducers } }>
    <Story/>
  </StoreProvider>
);
