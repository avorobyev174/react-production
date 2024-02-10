import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entites/Profile';
import { type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entites/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddNewComment/model/slice/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/article-details-page/model/slices/ArticleDetailsCommentsSlice';

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesDetailsComments: articleDetailsCommentsReducer
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: TReducersList
) => (Story: StoryFn) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultReducers, ...asyncReducers } }>
    <Story/>
  </StoreProvider>
);
