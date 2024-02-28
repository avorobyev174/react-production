import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'pages/ArticleDetails/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
