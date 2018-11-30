<template>

  <v-snackbar
    top
    :timeout="3000"
    v-model="active"
    class="application"
    @click="close">

    <v-icon
      dark
      left
      v-if="icon.length > 0">
      {{ icon }}
    </v-icon>

    {{ text }}

    <v-btn
      color="pink"
      flat
      @click="active = false"
    >
      <v-icon>error_outline</v-icon>
    </v-btn>

  </v-snackbar>

</template>


<script>
export default {
  data () {
    return {
      active: false,
      text: '',
      icon: '',
      color: 'info',
      timeout: 3000
    }
  },
  methods: {
    show (options = {}) {
      if (this.active) {
        this.close()
        this.$nextTick(() => this.show(options))
        return
      }
      Object.keys(options).forEach(field => (this[field] = options[field]))
      this.active = true
    },
    close () {
      this.active = false
    }
  }
}
</script>
