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

      <v-spacer></v-spacer>

      <v-icon>face</v-icon>
      <span class="showAge">{{yearAge}}</span>
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
import dayjs from 'dayjs'
import routeConfig from '@/assets/config/router.config'

import {
  getStorage
} from '@/assets/utils'

export default {
  data () {
    return {
      title: 'Baby Wiki',
      showMenu: false,
      routeConfig,

      birthday: '',
      birthdayDialogVisible: false
    }
  },
  computed: {
    yearAge () {
      if (!this.birthday) return

      const today = dayjs()
        .set('h', 0)
        .set('m', 0)
        .set('s', 0)
        .set('ms', 0)
      let birthday = dayjs(this.birthday)

      const year = today.diff(birthday, 'year')
      birthday = birthday.add(year, 'year')

      const month = today.diff(birthday, 'month')
      birthday = birthday.add(month, 'month')

      const day = today.diff(birthday, 'day')

      if (year < 0 || month < 0 || day < 0) {
        return '尚未出生'
      }

      if (year > 0) {
        return `${year}歲${month}月${day}天`
      }

      return `${month}月${day}天`
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
    const birthday = getStorage('birthday')

    if (birthday) {
      this.birthday = birthday

      this.saveBirthday()
    } else {
      this.$toast.show('請設置寶寶生日')
      this.birthdayDialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.showAge {
  display: inline-block;
  margin-left: 5px;
}
</style>
