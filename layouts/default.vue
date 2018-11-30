<template>
  <v-app>
    <v-navigation-drawer
      v-model="showMenu"
      fixed
      app>
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in routeConfig"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app color="pink" dark>
      <v-toolbar-side-icon @click="showMenu = !showMenu"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container v-if="birthday">
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <v-spacer />
      <span>&copy; 2018 Joshua</span>
      <v-spacer />
    </v-footer>



    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      @click="birthdayDialogVisible = true"
    >
      <v-icon>cake</v-icon>
    </v-btn>

    <v-dialog
      v-model="birthdayDialogVisible"
      persistent
      lazy
      width="300"
    >
      <v-toolbar dark color="pink">
        <v-toolbar-title>寶寶生日</v-toolbar-title>
      </v-toolbar>

      <v-date-picker
        color="pink"
        full-width
        scrollable
        v-model="birthday"
        @input="saveBirthday"
      />
    </v-dialog>
  </v-app>
</template>

<script>
// import dayjs from 'dayjs'
import routeConfig from '@/assets/config/router.config'

export default {
  data () {
    return {
      title: 'Baby Website',
      showMenu: false,
      routeConfig,

      birthday: '',
      birthdayDialogVisible: false
    }
  },
  methods: {
    saveBirthday () {
      this.$store.commit('setBirthday', {
        birthday: this.birthday
      })

      this.birthdayDialogVisible = false
    }
  },
  mounted () {
    const birthday = localStorage.getItem('birthday')

    if (birthday) {
      this.$store.commit('setBirthday', {
        birthday
      })
      this.birthday = birthday
    } else {
      this.birthdayDialogVisible = true
    }
  }
}
</script>
