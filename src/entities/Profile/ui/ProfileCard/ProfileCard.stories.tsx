import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'av',
      age: 28,
      country: ECountry.RUSSIA,
      lastname: 'vorob',
      first: 'alex',
      city: 'mgn',
      currency: ECurrency.EUR
    }
  }
}

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
