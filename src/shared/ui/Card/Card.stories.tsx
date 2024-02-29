import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text="text" title="title" />,
  },
  decorators: [],
}
