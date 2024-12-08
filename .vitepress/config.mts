import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Атлас дефектов",
  description: "АТЛАС ОТКЛОНЕНИЙ ПАРАМЕТРОВ ТЕХНОЛОГИЧЕСКОГО ПРОЦЕСС",
  cleanUrls: true,
  appearance: false,
  locales: {
    root: {
      lang: 'ru',
      label: 'Russian',
    }
  },
  base: '/atlas',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: 'Детальные причины',
    },
    i18nRouting: true,
    logo: '/assets/logo.svg',
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            displayDetails: 'Открыть подробный список',
          }
        }
      }
    },
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Атлас', link: '/atlas' }
    ],

    sidebar: [
      {
        text: 'Качественные показатели чугуна и шлака',
        items: [
          { text: 'Химсостав чугуна [Si],%​', link: '/atlas/si/' },
          { text: 'Химсостав чугуна [S],%​', link: '/atlas/s/' },
          { text: 'Основность (CaO/SiO2) шлака​', link: '/atlas/osnovnost/' },
          { text: 'Температура чугуна на выпуске, °С', link: '/atlas/temperatura/' }
        ]
      },
      {
        text: 'Показатели организации отработки продуктов плавки​',
        items: [
          { text: 'Количество ковшей чугуна за выпуск​​', link: '/atlas/kovshi/' },
          { text: 'Длительность стадии между выпусками чугуна​​', link: '/atlas/dlitelnost-stadii/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'vk', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
