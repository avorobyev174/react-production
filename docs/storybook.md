## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { ETheme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
  args: {},
}


type Story = StoryObj<typeof Button>;

export const PrimaryClear: Story = {
  args: {
    text: 'text',
    theme: EButtonTheme.CLEAR,
  },
}

export const SecondaryOutline: Story = {
  args: {
    children: 'text',
    theme: EButtonTheme.OUTLINE,
  },
  decorators: [ ThemeDecorator(ETheme.DARK) ],
}
```
