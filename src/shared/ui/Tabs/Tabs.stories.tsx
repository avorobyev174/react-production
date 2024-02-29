import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    tabs: [
      { value: 'tab1', content: 'tab1' },
      { value: 'tab2', content: 'tab2' },
      { value: 'tab3', content: 'tab3' },
    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
  },
  decorators: [],
}
