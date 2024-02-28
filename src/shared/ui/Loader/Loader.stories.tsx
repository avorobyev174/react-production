import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
