import type { Meta, StoryObj } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleInfiniteList> = {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ],
}
