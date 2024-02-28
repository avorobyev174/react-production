import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'av',
          age: 28,
          country: ECountry.RUSSIA,
          lastname: 'vorob',
          first: 'alex',
          city: 'mgn',
          currency: ECurrency.EUR,
          avatar: ''
        }
      }
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'av',
          age: 28,
          country: ECountry.RUSSIA,
          lastname: 'vorob',
          first: 'alex',
          city: 'mgn',
          currency: ECurrency.EUR
        }
      }
    })
  ]
}
