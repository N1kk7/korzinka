import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'), // замените './src' на ваш путь, если требуется
      },
    ],
  },
  test: {
    // ваши настройки для Vitest, если они нужны
  },
});