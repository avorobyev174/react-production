import { type StoryFn } from '@storybook/react';
import { type ETheme, ThemeProvider } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={ theme }>
    <div className={ `app ${theme}` }>
      <Story/>
    </div>
  </ThemeProvider>
);
