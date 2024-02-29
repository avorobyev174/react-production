import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({
    user: { authData: {} }
  }) ]
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({
    user: { authData: {} }
  }) ]
}

export const NoAuth: Story = {
  args: {},
  decorators: [ StoreDecorator({
    user: {}
  }) ]
}

export const NoAuthDark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({
    user: {}
  }) ]
}
