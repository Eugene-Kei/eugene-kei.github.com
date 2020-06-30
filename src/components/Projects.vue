<template>
    <v-container>
        <v-row align="stretch" justify="space-between">
            <v-col cols="12">
                <div class="text-lg-h5 text-sm-h4 text-h6 text-center text-uppercase">Проекты</div>
            </v-col>
            <v-col cols="12" sm="6" md="4" v-for="(project, index) in dynamicProjects" :key="index">
                <v-card height="100%" class="d-flex flex-column">
                    <v-card-title class="subtitle-2">
                        {{project.title}}
                    </v-card-title>
                    <v-divider/>
                    <div>
                        <v-img
                                :src="project.image"
                                max-height="306px"
                        ></v-img>
                    </div>
                    <v-divider/>
                    <v-card-text v-html="nToBr(project.text)" class="pt-6"/>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-col v-for="(link, i) in project.links" :key="i" class="text-center">
                            <v-btn x-small text color="primary" :href="link.href" target="_blank">
                                {{link.anchor}}
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Projects',
    data: () => ({
      projects: [
        {
          image: require('../assets/img/pfdo.png'),
          title: 'АИС "Портал ПФДО"',
          text: 'Портал персонифицированного дополнительного образования.\n' +
            'Командная разработка портала для ООО "Институт развития персонифицированных систем управления".\n' +
            'Крупный проект на yii2.\n' +
            'С проектом работал больше 2 лет.\n' +
            'Занимался разработкой/доработкой отдельных модулей и REST API.',
          links: [
            {
              anchor: 'Сайт',
              href: 'https://pfdo.ru',
            },
          ],
        },
        {
          image: require('../assets/img/moscow.jpg'),
          title: 'Душевная Москва',
          text: 'Портал социально ориентированных некоммерческих организаций города Москвы.\n' +
            'Командная разработка сайта в компании энсайн.\n' +
            'Проект на yii2 (более 4000 человекочасов).\n' +
            'Над проектом работали больше половины года.\n' +
            'Я занимался разработкой/доработкой отдельных модулей и интеграцией верстки (дниамику на jQuery тоже писал).',
          links: [
            {
              anchor: 'Сайт',
              href: 'https://душевная.москва',
            },
          ],
        },
        {
          image: require('../assets/img/mintrud.jpg'),
          title: 'Минтруд России',
          text: 'Сайт Министерства труда и социальной защиты Российской Федерации.\n' +
            'Командная разработке сайта в компании энсайн (yii2).\n' +
            'Мой вклад в проект небольшой. Сделал пару разделов и привязал верстку к их публичным страницам.',
          links: [
            {
              anchor: 'Сайт',
              href: 'https://rosmintrud.ru',
            },
          ],
        },
        {
          image: require('../assets/img/gazobeton.jpg'),
          title: 'Газобетон-строй',
          text: 'Официальный поставщик автоклавного газобетона на территории Красноярского края, республики Хакассии и республики Тыва.\n' +
            'Разработка бэкенда для студии ОMEGA DESIGN.\n' +
            'За основу была взята самописная CMS студии ОMEGA DESIGN (Yii 1).\n' +
            'Очень большая часть CMS была дописана в соответствии с требованиями проекта.',
          links: [
            {
              anchor: 'Сайт',
              href: 'https://gazobeton24.ru',
            },
          ],
        },
        {
          image: require('../assets/img/gogomap.png'),
          title: 'Go Go Map',
          text: 'Помогаем находить лучшие туристические места и маршруты.\n' +
            'Работа для студии ОMEGA DESIGN.\n' +
            'Доработка сайта на Yii 1.\n' +
            'Корректировка выборки объектов из базы данных по удаленности от выбранного города.\n' +
            'Отрисовка информации об объектах на карте (API яндекс карт).\n' +
            'Внедрение изменений в верстке.\n' +
            'Корректировка работы визуального редактора страницы объекта (для наглядного редактирования страницы администратором проекта).',
          links: [
            {
              anchor: 'Сайт',
              href: 'http://gogomap.ru',
            },
          ],
        },
        {
          image: require('../assets/img/cybercoon.png'),
          title: 'Московский питомник',
          text: 'Cybercoon.ru Разведение и продажа Мейн Кунов.\n' +
            'Работа для студии ОMEGA DESIGN.\n' +
            'Доработка сайта на Yii 1.\n' +
            'Внесение правок для сео оптимизации.\n' +
            'Добавление фильтра выборки котят.\n' +
            'Исправление багов.',
          links: [
            {
              anchor: 'Сайт',
              href: 'http://cybercoon.ru',
            },
          ],
        },
        {
          image: require('../assets/img/specmash.jpg'),
          title: 'Спецмаш',
          text: 'Продажа спец техники в Красноярске.\n' +
            'Первая работа для студии ОMEGA DESIGN.\n' +
            'Привязка верстки к самописной CMS на Yii 1, с небольшой доработкой самой CMS.',
          links: [
            {
              anchor: 'Сайт',
              href: 'http://www.спецмаш24.рф',
            },
          ],
        },
        {
          image: require('../assets/img/micro-school-crm.jpg'),
          title: 'Простая CRM на Yii 2',
          text: 'Небольшая CRM система для школ танцев. Возможность управлять клиентами, группами, расписанием, абонементами и платежами.\n' +
            'Есть партнерская программа.\n' +
            'Разработана на Yii 2 + MySQL.\n' +
            'Проект создавался, когда я только начал изучать ООП и Yii2.\n' +
            'Проект заброшен, давно им не занимаюсь!',
          links: [
            {
              anchor: 'Код на github',
              href: 'https://github.com/Eugene-Kei/Yii2-micro-school-crm',
            },
          ],
        },
        {
          image: require('../assets/img/smith-anderson-thumb.jpg'),
          title: 'Smith Anderson',
          text: 'Пример неадаптивной верстки из PSD шаблона. Без CSS фреймворков.',
          links: [
            {
              anchor: 'Просмотр',
              href: '/css-templates/smith-anderson',
            },
            {
              anchor: 'Скачать PSD',
              href: 'https://eugene-kei.github.io/css-templates/smith-anderson/smith-anderson.psd',
            },
          ],
        },
        {
          image: require('../assets/img/kyte-thumb.jpg'),
          title: 'Kyte',
          text: 'Пример неадаптивной верстки из PSD шаблона. Без CSS фреймворков.',
          links: [
            {
              anchor: 'Просмотр',
              href: 'https://eugene-kei.github.io/css-templates/kyte',
            },
            {
              anchor: 'Скачать PSD',
              href: 'https://eugene-kei.github.io/css-templates/kyte/kyte.psd',
            },
          ],
        },
      ],
    }),
    methods: {
      nToBr: text => text.replace(/(\r)*\n/g, '<br>'),
    },
    computed: {
      /**
       * Обрезает последние элементы массива, если они нарушают ровное количество в гриде
       *
       * @returns {[]}
       */
      dynamicProjects () {
        let slice = 0

        if (this.$vuetify.breakpoint.smOnly) {
          slice = this.projects.length % 2
        } else if (this.$vuetify.breakpoint.mdAndUp) {
          slice = this.projects.length % 3
        }

        if (slice > 0) {
          return this.projects.slice(0, slice * -1)
        } else {
          return this.projects
        }
      },
    }
  }
</script>