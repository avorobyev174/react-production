import { type RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = buildSvgLoader()
  const codeBabelLoader = buildBabelLoader({ isDev })
  const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true })
  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [ { loader: 'file-loader' } ]
  };

  return [
    tsxCodeBabelLoader,
    codeBabelLoader,
    fileLoader,
    svgLoader,
    cssLoader
  ]
}
