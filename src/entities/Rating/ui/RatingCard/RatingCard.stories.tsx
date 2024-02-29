import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof RatingCard>;

export const Normal: Story = {
  args: {},
  decorators: []
}
