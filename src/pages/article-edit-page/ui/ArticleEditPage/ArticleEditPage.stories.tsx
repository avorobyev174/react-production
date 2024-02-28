import type { Meta, StoryObj } from '@storybook/react'
import { ArticleEditPage } from './ArticleEditPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'widget/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
