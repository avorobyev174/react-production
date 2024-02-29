import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'Vasya' },
      text: 'hello',
    },
  },
  decorators: [ StoreDecorator({}) ],
}

export const IsLoading: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'Vasya' },
      text: 'hello',
    },
    isLoading: true,
  },
  decorators: [ StoreDecorator({}) ],
}
