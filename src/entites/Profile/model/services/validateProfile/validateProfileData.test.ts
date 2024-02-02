import { validateProfileData } from './validateProfileData';
import { ECountry } from 'entites/Country';
import { ECurrency } from 'entites/Currency';
import { EValidateProfileError } from 'entites/Profile';

const data = {
  username: 'av',
  age: 28,
  country: ECountry.RUSSIA,
  lastname: 'vorob',
  first: 'alex',
  city: 'mgn',
  currency: ECurrency.EUR
}

describe('validateProfileData test', () => {
  test('success', async () => {
    const res = validateProfileData(data);
    expect(res).toEqual([]);
  })

  test('without first and last', async () => {
    const res = validateProfileData({ ...data, first: '', lastname: '' });
    expect(res).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA
    ]);
  })

  test('without age', async () => {
    const res = validateProfileData({ ...data, age: undefined });
    expect(res).toEqual([
      EValidateProfileError.INCORRECT_AGE
    ]);
  })

  test('without country', async () => {
    const res = validateProfileData({ ...data, country: undefined });
    expect(res).toEqual([
      EValidateProfileError.INCORRECT_COUNTRY
    ]);
  })

  test('incorrect all', async () => {
    const res = validateProfileData({});
    expect(res).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.INCORRECT_COUNTRY
    ]);
  })
})
