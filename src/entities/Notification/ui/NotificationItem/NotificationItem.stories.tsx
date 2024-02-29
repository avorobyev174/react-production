import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {},
}
const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '1',
}
export default meta
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {
  args: {
    notification,
  },
  decorators: [],
}
