<template>
    <v-app>
        <v-main class="grey lighten-5">
            <top-banner/>
            <avatar/>
            <skills/>
            <price/>
            <projects/>
            <contacts/>
            <copyright/>
        </v-main>
    </v-app>
</template>

<script>
  import TopBanner from './components/TopBanner'
  import Avatar from './components/Avatar'
  import Skills from './components/Skills'
  import Projects from './components/Projects'
  import Price from './components/Price'
  import Contacts from './components/Contacts'
  import Copyright from './components/Copyright'

  export default {
    name: 'App',

    components: {
      TopBanner,
      Avatar,
      Skills,
      Projects,
      Price,
      Contacts,
      Copyright
    },

    data: () => ({
      //
    }),
  }
</script>