import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
const path = require('path');

export default defineConfig({
  resolve: {
    // alias: [
    //   {
    //     find: '@',
    //     replacement: resolve(__dirname, './src'), // замените './src' на ваш путь, если требуется
    //   },
    //   // {
    //   //   '~': path.resolve(__dirname, './')
    //   // }
    // ],
    alias: {
      '~': path.resolve(__dirname, './')
    }

  },
  test: {
    // ваши настройки для Vitest, если они нужны
  },
});