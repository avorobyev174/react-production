import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'Vasya' },
        text: 'hello'
      },
      {
        id: '2',
        user: { id: '2', username: 'Peta' },
        text: 'hello !!'
      }
    ]
  },
  decorators: [ StoreDecorator({}) ]
}

export const IsLoading: Story = {
  args: {
    comments: [],
    isLoading: true
  },
  decorators: [ StoreDecorator({}) ]
}
