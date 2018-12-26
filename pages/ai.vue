<template>
  <v-btn @click="testHandler">test</v-btn>
</template>

<script>
import {
  textTrans
  // getWeather
} from '@/assets/services/ai'

export default {
  methods: {
    testHandler () {
      textTrans({
        type: 0,
        text: '幾點了？'
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
