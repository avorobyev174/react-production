import type { Meta, StoryObj } from '@storybook/react'
import { MemoizedNavbar as NavBar } from './NavBar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NavBar> = {
  title: 'widget/NavBar',
  component: NavBar,
  argTypes: {}
}
const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '1'
}
export default meta
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}

export const Dark: Story = {
  args: {},
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({}) ]
}

export const AuthNavbar: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: __API__ + '/notifications',
        method: 'GET',
        status: 200,
        response: [
          { ...notification, id: '1' },
          { ...notification, id: '2' },
        ]
      },
    ],
  },
  decorators: [ ThemeDecorator(ETheme.DARK), StoreDecorator({
    user: { authData: {} }
  }) ]
}
