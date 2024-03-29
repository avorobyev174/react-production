import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'pages/ArticleDetails/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
  args: {
    articleDetailsId: '1',
  },
  decorators: [ StoreDecorator({}) ],
}
