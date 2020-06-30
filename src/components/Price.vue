<template>
    <v-parallax height="320" :src="image">
        <v-overlay absolute color="black" opacity=".8">
        <v-row align="center" justify="center">
            <v-col cols="12">
                <p class="text-h3 text-center text-uppercase">Часовая ставка</p>
                <p class="text-h2 text-center mb-0">10$</p>
            </v-col>
        </v-row>
        </v-overlay>
    </v-parallax>
</template>

<script>
  // const gradient = 'to bottom, rgba(0,0,0,.3), rgba(0,0,0,.6)'

  export default {
    name: 'Price',
    computed: {
      image () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs' :
            return require('../assets/img/price-600x640.jpg')
          case 'sm' :
            return require('../assets/img/price-960x640.jpg')
          case 'md':
            return require('../assets/img/price-1264x640.jpg')
          default:
            return require('../assets/img/price-1904x640.jpg')
        }
      }
    }
  }
</script>
