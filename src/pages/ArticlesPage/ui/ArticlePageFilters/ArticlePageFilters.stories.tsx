import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePageFilters } from './ArticlePageFilters';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlePageFilters> = {
  title: 'entities/Article/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ArticlePageFilters>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ],
}
