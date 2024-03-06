import { type IStateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../selectors/articlesDetails';

describe('articleDetails test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state: DeepPartial<IStateSchema> = {
      articlesDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBe(true);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBe(false);
  });

  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as IStateSchema)).toBe('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsError(state as IStateSchema)).toBe(undefined);
  });
});
