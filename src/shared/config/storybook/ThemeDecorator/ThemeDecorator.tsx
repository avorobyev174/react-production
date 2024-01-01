import { type StoryFn } from '@storybook/react';
import { type ETheme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
  <div className={ `app ${theme}` }>
    <Story/>
  </div>
);
