<template>
    <div class="white">
        <v-container>
            <div class="text-lg-h5 text-sm-h4 text-h6 text-center text-uppercase">Контакты</div>
            <v-row align="stretch" justify="center">
                <v-col cols="2" md="1" class="text-center" v-for="(contact, i) in contacts" :key="i">
                    <a :href="contact.href" target="_blank" class="text-decoration-none">
                        <v-img :src="contact.icon" width="100%"/>
                    </a>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Contacts',
    data: () => ({
      contacts: [
        {
          icon: require('../assets/icons/telegram.svg'),
          href: 'https://t.me/eugene_kei'
        },
        {
          icon: require('../assets/icons/whatsapp.svg'),
          href: 'https://wa.me/79140014016'
        },
        {
          icon: require('../assets/icons/instagram.svg'),
          href: 'https://www.instagram.com/eugenekei'
        },
        // viber работает не на всех устройствах, нужен код для определения устройства. Пока закомментирую.
        // {
        //   icon: require('../assets/icons/viber.svg'),
        //   href: 'viber://chat:79140014016'
        // },
        {
          icon: require('../assets/icons/skype.svg'),
          href: 'skype:eugene_kei'
        },
      ],
    })
  }
</script>
