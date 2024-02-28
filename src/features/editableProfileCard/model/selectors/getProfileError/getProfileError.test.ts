import { type IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError test', () => {
  test('should return value', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: 'error'
      }
    }
    expect(getProfileError(state as IStateSchema)).toBe('error');
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}
    expect(getProfileError(state as IStateSchema)).toBe(undefined);
  })
})
