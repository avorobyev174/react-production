import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'widget/StarRating',
  component: StarRating,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof StarRating>;

export const Normal: Story = {
  args: {},
  decorators: []
}
