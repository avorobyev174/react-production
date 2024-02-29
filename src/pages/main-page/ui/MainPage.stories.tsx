import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ],
}

export const Dark: Story = {
  args: {},
  decorators: [ StoreDecorator({}), ThemeDecorator(ETheme.DARK) ],
}
