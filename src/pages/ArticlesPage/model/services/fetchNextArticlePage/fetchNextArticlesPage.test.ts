import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from '../../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { EArticleType, EArticleView } from '@/entities/Article';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

jest.mock(
  'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList',
);

describe('fetchNextArticlesPage test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: EArticleView.SMALL,
        _inited: false,
        type: EArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ replace: false });
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
        view: EArticleView.SMALL,
        _inited: false,
        type: EArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
