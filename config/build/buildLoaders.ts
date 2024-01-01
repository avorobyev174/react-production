import { type RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const babelLoader = {
    test: /\.(?:js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ ['@babel/preset-env', { targets: 'defaults' }] ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: [ 'ru', 'en' ],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [ { loader: 'file-loader' } ]
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [
    babelLoader,
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader
  ]
}
