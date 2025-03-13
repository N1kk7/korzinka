
import { resolve } from 'path';
// import { readdirSync, readFileSync } from 'fs';


// function loadTranslations(dir) {
//   const translations = {};
//   const files = readdirSync(dir); // Читаем все файлы в папке
//   files.forEach((file) => {
//     if (file.endsWith('.json')) {
//       const key = file.replace('.json', ''); // Убираем расширение файла
//       const content = JSON.parse(readFileSync(resolve(dir, file), 'utf-8')); // Читаем содержимое файла
//       translations[key] = content; // Добавляем содержимое в объект
//     }
//   });
//   return translations;
// }


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: true,

  devtools: { enabled: true },
 
  runtimeConfig: {
    apiSecretPath: 'NUXT_API_SECRET_PATH',
    apiSecretKey: 'NUXT_API_SECRET_KEY',
    jwtSecretKey: 'JWT_SECRET',
    telegramBotToken: 'TELEGRAM_BOT_TOKEN',
    tgChatId: 'TELEGRAM_CHAT_ID',
    public: {
        apiBaseUrl: 'NUXT_PUBLIC_API_BASE_URL',
        apiBaseToken: 'NUXT_PUBLIC_API_BASE_TOKEN',
        novaPostKey:  process.env.NOVA_POST_KEY,
        novaPostUri:  process.env.NOVA_POST_URI,
    }
},
  app: {
    baseURL: '/korzinka', 
  },
  css: [
    '~/styles/default.css',
    '~/styles/tailwind.css',
    '~/styles/main.scss',
  ],
  imports: {
    dirs: ['helpers']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [['@nuxtjs/google-fonts', {
    families: {
      'Montserrat': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Urbanist': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  }], 
  '@nuxtjs/i18n', 
  ['@nuxtjs/tailwindcss', {
      exposeConfig: true,
      viewer: true,
    }
  ], '@pinia/nuxt', '@nuxtjs/i18n'],
  // prisma: {
  //   autoSetupPrisma: true,
  // },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en/common.json",
      },
      {
        code: "ru",
        name: "Русский",
        iso: "ru-RU",
        file: "ru/common.json",
      },
      {
        code: "uk",
        name: "Українська",
        iso: "uk-UA",
        file: "uk/common.json",
      },
    ],
    defaultLocale: "uk",

  },
  plugins: [
    '~/plugins/icon-library.js',
    '~/plugins/vue-google-maps.client.js',
  ],
  alias: {
    '@': './',
    '~': './'
    // '@': '', // Указывает на корневую папку проекта
    // '~': './'  // Альтернативный алиас
  },
  typescript: {
    strict: false,
  },
  experimental: {
    componentIslands: true,
  },
});