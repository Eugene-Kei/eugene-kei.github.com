<template>
    <v-container>
        <v-row align="stretch" justify="space-between">
            <v-col cols="12" md="4" class="text-center">
                <v-card height="100%" class="d-flex flex-column">
                    <v-card-text class="pt-9">
                        <v-icon color="primary" size="64">{{icons.mdiSchool}}</v-icon>
                        <p class="title text-uppercase black--text mt-6">Специализация</p>
                        <p class="text-left">
                            Специализируюсь на backend разработке.
                            Разрабатываю сайты разной степени сложности на php 7.
                            Коммерческой разработкой начал заниматься с ноября 2015 года.
                            В разработке стараюсь придерживаться принципов DRY, SOLID, KISS, YAGNI.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-card height="100%">
                    <v-card-text class="pt-9">
                        <v-icon color="primary" size="64">{{icons.mdiHammerWrench}}</v-icon>
                        <p class="title text-uppercase black--text mt-6">Навыки</p>
                        <p class="text-left">
                            Есть опыт работы с PHP, Yii, Laravel, MySQL, HTML, CSS, Bootstrap, JavaScript jQuery,
                            Vue.js, Vuetify.js, Go.
                            <br>
                            Доводилось работать с API ВКонтакте, ok.ru amoCRM, dadata.ru и Яндекс карт.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-card height="100%">
                    <v-card-text class="pt-9">
                        <v-icon color="primary" size="64">{{icons.mdiAccount}}</v-icon>
                        <p class="title text-uppercase black--text mt-6">Пара слов о себе</p>
                        <p class="text-left">
                            Человек я жизнерадостный, дружелюбный, ответственный и исполнительный.
                            Отлично лажу с людьми. Увлекаюсь веб разработкой, люблю отдых на природе, немного танцую
                            кизомбу и
                            бачату.
                            Постоянно, что-то изучаю, склонен к самосовершенствованию и самообучению.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import { mdiAccount, mdiHammerWrench, mdiSchool } from '@mdi/js'

  export default {
    name: 'Skills',
    data: () => ({
      icons: {
        mdiAccount,
        mdiHammerWrench,
        mdiSchool,
      }
    })
  }
</script>