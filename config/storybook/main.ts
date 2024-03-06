import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    if (config?.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/shared': path.resolve(__dirname, '../../src/shared/'),
        '@/widgets': path.resolve(__dirname, '../../src/widgets/'),
        '@/pages': path.resolve(__dirname, '../../src/pages/'),
        '@/entities': path.resolve(__dirname, '../../src/entities/'),
        '@/app': path.resolve(__dirname, '../../src/app/'),
        '@/features': path.resolve(__dirname, '../../src/features/'),
      };
    }
    return config;
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
};
export default config;
