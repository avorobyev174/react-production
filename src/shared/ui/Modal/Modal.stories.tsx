import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!'
  }
}
