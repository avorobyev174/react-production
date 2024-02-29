import { type StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type ETheme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${ theme }`}>
      <Story />
    </div>
  </ThemeProvider>
);
