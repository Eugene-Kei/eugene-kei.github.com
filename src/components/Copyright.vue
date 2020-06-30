<template>
    <div class="black white--text">
        <v-container>
            <v-row align="stretch" justify="center" class="text-caption">
                <v-col class="text-center">
                    <span>Разработка сайта: </span>
                    <a href="/" class="white--text">Евгений Копытов</a>
                </v-col>
                <v-col class="text-center">
                    <span>Powered by: </span>
                    <a href="https://vuetifyjs.com" target="_blank" class="white--text">Vuetify</a>
                    <br class="hidden-sm-and-up">
                    <span> and </span>
                    <a href="https://vuejs.org" target="_blank" class="white--text">Vue.js</a>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Copyright'
  }
</script>