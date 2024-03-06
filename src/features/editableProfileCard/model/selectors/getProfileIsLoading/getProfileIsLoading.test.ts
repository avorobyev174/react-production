import { type IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as IStateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileIsLoading(state as IStateSchema)).toBe(undefined);
  });
});
