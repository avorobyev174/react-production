import { type RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = buildSvgLoader()
  const babelLoader = buildBabelLoader(isDev)
  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [ { loader: 'file-loader' } ]
  };

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
