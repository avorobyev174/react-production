import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from './NavBar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NavBar> = {
  title: 'widget/NavBar',
  component: NavBar,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({}) ]
}

export const AuthNavbar: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({
    user: { authData: {} }
  }) ]
}
