<template>
  <div class="page-ai">
    <v-text-field v-model="text"></v-text-field>
    <p>{{transText}}</p>
    <v-btn @click="textPolarHandler">test</v-btn>
  </div>
  
</template>

<script>
import {
  textTrans,
  textChat,
  wordCom,
  textPolar
} from '@/assets/services/ai'

export default {
  data () {
    return {
      text: '',
      transText: ''
    }
  },
  methods: {
    async textTransHandler () {
      const response = await textTrans({
        type: 3,
        text: this.text
      })

      this.transText = response.data.data.trans_text
    },

    async textChatHandler () {
      const response = await textChat({
        session: 'asdf',
        question: this.text
      })

      this.transText = response.data.answer
    },

    async wordComHandler () {
      await wordCom({
        text: this.text
      })
    },

    async textPolarHandler () {
      await textPolar({
        text: this.text
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
