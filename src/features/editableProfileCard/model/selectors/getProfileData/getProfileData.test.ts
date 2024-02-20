import { type IStateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { ECountry } from 'entites/Country';
import { ECurrency } from 'entites/Currency';

describe('getProfileData test', () => {
  test('should return value', () => {
    const data = {
      username: 'av',
      age: 28,
      country: ECountry.RUSSIA,
      lastname: 'vorob',
      first: 'alex',
      city: 'mgn',
      currency: ECurrency.EUR
    }
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as IStateSchema)).toEqual(data);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}
    expect(getProfileData(state as IStateSchema)).toBe(undefined);
  })
})
