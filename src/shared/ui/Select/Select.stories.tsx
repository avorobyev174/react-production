import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Test text',
    options: [
      { value: '123', content: '1' },
      { value: '234', content: '2' },
    ],
  },
}
