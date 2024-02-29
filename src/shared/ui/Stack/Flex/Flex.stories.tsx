import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const ColumnGap4: Story = {
  args: {
    gap: '4',
    direction: 'column',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}

export const ColumnGap16: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>123</div>
        <div>345</div>
        <div>678</div>
      </>
    ),
  },
  decorators: [],
}
