<template>
    <v-container class="white pt-12 pb-12" fluid>
        <v-row align="center" justify="center" class="mr-0 ml-0">
            <v-col cols="12" class="text-center">
                <v-avatar size="240" class="text-center">
                    <img :src="avatar" alt="Евгений Копытов web-разработчик">
                </v-avatar>
            </v-col>
            <v-col cols="12">
                <div class="text-lg-h3 text-sm-h4 text-h5 text-center">Евгений Копытов</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Avatar',
    data: () => ({
      avatar: require('../assets/img/ava.jpg')
    })
  }
</script>