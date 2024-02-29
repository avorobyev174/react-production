import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ],

}

export const Dark: Story = {
  args: {},
  decorators: [ StoreDecorator({}), ThemeDecorator(ETheme.DARK) ],
}
