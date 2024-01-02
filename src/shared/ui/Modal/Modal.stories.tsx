import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

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
    children: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit'
  }
}

export const ModalDark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit'
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
