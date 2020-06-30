<template>
    <v-img
            :src="bgImage"
            :gradient="bannerGradient"
            max-height="100vh"
    >
        <v-row align="center" justify="end" class="white--text fill-height text-uppercase top-banner">
            <v-col xs="12" sm="12" md="7" lg="6">
                <div class="text-lg-h1 text-sm-h2 text-h4 text-center">портфолио</div>
                <div class="text-lg-h2 text-sm-h4 text-h5 text-center">web-разработчика</div>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>
  const gradient = 'to bottom, rgba(0,0,0,.3), rgba(0,0,0,.6)'

  export default {
    name: 'TopBanner',
    data: () => ({
      windowWidth: 0,
    }),
    computed: {
      bannerGradient () {
        if (this.$vuetify.breakpoint.smAndDown) {
          return gradient
        } else {
          return null
        }
      },
      bgImage () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs' :
            return require('../assets/img/top-image-600x338.jpg')
          case 'sm' :
            return require('../assets/img/top-image-960x541.jpg')
          case 'md':
            return require('../assets/img/top-image-1264x712.jpg')
          default:
            return require('../assets/img/top-image-1904x1073.jpg')
        }
      }
    },
  }
</script>