import type { Meta, StoryObj } from '@storybook/react'
import { MemoizedThemeSwitcher as ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
