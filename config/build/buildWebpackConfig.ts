import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, isDev, paths: { entry, build } } = options;
  return {
    mode,
    entry,
    output: {
      path: build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}