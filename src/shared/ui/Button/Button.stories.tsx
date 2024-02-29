import type { Meta, StoryObj } from '@storybook/react'
import { Button, EButtonSize, EButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'text',
  },
}

export const Clear: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.CLEAR,
  },
}

export const ClearInverted: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.CLEAR_INVERTED,
  },
}

export const OutlineSizeM: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.OUTLINE,
  },
}

export const OutlineSizeL: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.L,
  },
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.XL,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.OUTLINE,
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ],
}

export const BackgroundTheme: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.BACKGROUND,
  },
}

export const BackgroundThemeInverted: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.BACKGROUND_INVERTED,
  },
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.M,
  },
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.L,
  },
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.OUTLINE,
    disabled: true,
  },
}
