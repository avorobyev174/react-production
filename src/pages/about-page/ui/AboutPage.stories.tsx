import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ],
}

export const Dark: Story = {
  args: {},
  decorators: [ StoreDecorator({}), ThemeDecorator(ETheme.DARK) ],
}
