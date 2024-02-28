import { screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { type IProfile } from '@/entities/Profile';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: IProfile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: ECurrency.USD,
  country: ECountry.MEXICO,
  city: 'Moscow',
  username: 'admin213',
  avatar: 'https://loremflickr.com/640/360'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('EditableProfileCard', () => {
  test('EditableProfileCard change readonly view', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
  })

  test('EditableProfileCard cancel refresh data', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');
    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
  })

  test('EditableProfileCard cancel refresh data', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  })

  test('EditableProfileCard error while save empty firstName input', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  })

  test('EditableProfileCard error while save empty firstName input', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
    expect(mockPutReq).toHaveBeenCalled();
  })
});
