import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100$',
    height: 200,
  },
  decorators: [],
}

export const NormalDark: Story = {
  args: {
    width: '100$',
    height: 200,
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ],
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [],
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ],
}
