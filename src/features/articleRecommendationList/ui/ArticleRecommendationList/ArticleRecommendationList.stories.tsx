import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationList } from './ArticleRecommendationList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
