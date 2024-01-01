import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/'
  }
}

export default meta
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}

export const SecondaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
