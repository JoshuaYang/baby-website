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
        text: 'hello'
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
