import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildResolves({
  paths: { src },
}: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    alias: {
      '@': src,
    },
    mainFiles: ['index'],
  };
}
