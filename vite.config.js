import { defineConfig } from 'vite';

import posthtml from '@vituum/vite-plugin-posthtml';
import { join, resolve } from 'path';
import svg from 'vite-sprite-svg';
import vituum from 'vituum';

const rootDir = resolve(__dirname, 'src');
const publicDir = resolve(__dirname, 'public');
const root = './src';
const port = 3000;

export default defineConfig(({ command }) => {
  const isDev = command !== 'build';
  return {
    plugins: [
      vituum(),
      posthtml({
        root: root,
      }),
      svg({
        baseDir: rootDir,
        publicDir,
        isDev: isDev,
      }),
    ],
    publicDir: publicDir,
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
    server: {
      port: port,
    },
    resolve: {
      alias: {
        '@components': join(rootDir, 'components'),
        '@pages': join(rootDir, 'pages'),
        '@utils': join(rootDir, 'utils'),
        '@styles': join(rootDir, 'styles'),
        '@assets': join(rootDir, 'assets'),
      },
    },
  };
});
