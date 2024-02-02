import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard';
// import { ECountry } from 'entites/Country';
// import { ECurrency } from 'entites/Currency';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// import AvatarImg from 'shared/assets/test/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

/* export const Primary: Story = {
  args: {
    data: {
      username: 'av',
      age: 28,
      country: ECountry.RUSSIA,
      lastname: 'vorob',
      first: 'alex',
      city: 'mgn',
      currency: ECurrency.EUR,
      avatar: AvatarImg
    }
  }
} */

export const WithError: Story = {
  args: {
    error: 'error'
  }
}

export const WithLoading: Story = {
  args: {
    isLoading: true
  }
}
