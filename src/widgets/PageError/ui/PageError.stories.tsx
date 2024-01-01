import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
