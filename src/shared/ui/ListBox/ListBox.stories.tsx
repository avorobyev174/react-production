import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ListBox>;

export const ListBottomRight: Story = {
  args: {
    direction: 'bottom right',
    value: '123',
    items: [
      { content: '12dsadas3', value: '123123' },
      { content: 'dsadasd', value: '3123' },
      { content: 'dasda', value: '21' }
    ]
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>
  ]
}

export const ListBottomLeft: Story = {
  args: {
    direction: 'bottom left',
    value: '123',
    items: [
      { content: '12dsadas3', value: '123123' },
      { content: 'dsadasd', value: '3123' },
      { content: 'dasda', value: '21' }
    ]
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>
  ]
}

export const ListTopRight: Story = {
  args: {
    direction: 'top right',
    value: '123',
    items: [
      { content: '12dsadas3', value: '123123' },
      { content: 'dsadasd', value: '3123' },
      { content: 'dasda', value: '21' }
    ]
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>
  ]
}

export const ListTopLeft: Story = {
  args: {
    direction: 'top left',
    value: '123',
    items: [
      { content: '12dsadas3', value: '123123' },
      { content: 'dsadasd', value: '3123' },
      { content: 'dasda', value: '21' }
    ]
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>
  ]
}
