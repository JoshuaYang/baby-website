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

    <v-toolbar fixed app color="pink lighten-2" dark>
      <v-toolbar-side-icon @click="showMenu = !showMenu"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
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
      <v-date-picker
        full-width
        scrollable
        v-model="date"
        @input="birthdayDialogVisible = false"
      />
    </v-dialog>
  </v-app>
</template>

<script>
import routeConfig from '@/assets/config/router.config'

export default {
  data () {
    return {
      title: 'Baby Website',
      showMenu: false,
      routeConfig,

      date: new Date().toISOString().substr(0, 10),
      birthdayDialogVisible: true
    }
  }
}
</script>
