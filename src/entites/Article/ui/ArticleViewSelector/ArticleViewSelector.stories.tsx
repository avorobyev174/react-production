import type { Meta, StoryObj } from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'widget/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
  args: {},
  decorators: []
}
