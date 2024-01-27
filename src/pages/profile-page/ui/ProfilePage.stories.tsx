import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

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
    StoreDecorator({})
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({})
  ]
}
