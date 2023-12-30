import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins;
}
