import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [ StoreDecorator({
    loginForm: { username: 'admin', password: '123' }
  }) ]
}

export const WithError: Story = {
  args: {},
  decorators: [ StoreDecorator({
    loginForm: { username: 'admin1', password: '123', error: 'error' }
  }) ]
}

export const WithLoading: Story = {
  args: {},
  decorators: [ StoreDecorator({
    loginForm: { isLoading: true }
  }) ]
}
