import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: 'widget/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const Normal: Story = {
  args: {},
  decorators: []
}
