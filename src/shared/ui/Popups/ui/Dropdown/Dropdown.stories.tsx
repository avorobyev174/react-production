import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown';
import { Button } from 'shared/ui/Button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>{ 'Open' }</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  },
  decorators: []
}
