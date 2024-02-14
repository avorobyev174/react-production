import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
  args: {},
  decorators: [ StoreDecorator({}) ]
}
