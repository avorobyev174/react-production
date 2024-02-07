import type { Meta, StoryObj } from '@storybook/react'
import { ETextSize, ETextTheme, Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Text>;

export const TitleAndText: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!',
    text: 'test description'
  }
}

export const TitleAndTextError: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!',
    text: 'test description',
    theme: ETextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'test description'
  }
}

export const TitleAndTextDark: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!',
    text: 'test description'
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!'
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}

export const OnlyTextDark: Story = {
  args: {
    text: 'test description'
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}

export const TitleAndTextDarkSizeM: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!',
    text: 'test description',
    size: ETextSize.M
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}

export const TitleAndTextDarkSizeL: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consecrate adipisicing elit!',
    text: 'test description',
    size: ETextSize.L
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ]
}
