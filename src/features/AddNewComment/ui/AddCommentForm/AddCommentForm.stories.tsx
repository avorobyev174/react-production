import type { Meta, StoryObj } from '@storybook/react'
import { AddCommentForm } from './AddCommentForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
