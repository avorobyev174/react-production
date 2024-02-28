import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfilePageHeader } from './EditableProfilePageHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfilePageHeader> = {
  title: 'features/EditableProfilePageHeader',
  component: EditableProfilePageHeader,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof EditableProfilePageHeader>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
