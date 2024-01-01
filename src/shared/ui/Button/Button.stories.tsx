import type { Meta, StoryObj } from '@storybook/react'
import { Button, EThemeButton } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'text'
  }
}

export const Clear: Story = {
  args: {
    children: 'text',
    theme: EThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'text',
    theme: EThemeButton.OUTLINE
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'text',
    theme: EThemeButton.OUTLINE
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
