<template>
  <v-app>
    <v-navigation-drawer
      v-model="showMenu"
      fixed
      app
    >
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
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="showMenu = !showMenu"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2018 Joshua</span>
    </v-footer>
  </v-app>
</template>

<script>
import routeConfig from '@/assets/routeConfig'

export default {
  data () {
    return {
      title: 'Website',
      showMenu: false,
      routeConfig
    }
  }
}
</script>
