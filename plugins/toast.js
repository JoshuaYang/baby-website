import Vue from 'vue'
import Toast from '@/components/Toast.vue'

let toastCmp = null

function createToastCmp () {
  const cmp = new Vue(Toast)

  document.body.appendChild(cmp.$mount().$el)

  return cmp
}

function getToastCmp () {
  if (!toastCmp) {
    toastCmp = createToastCmp()
  }

  return toastCmp
}

function show (text) {
  getToastCmp().show({
    text
  })
}

function close () {
  getToastCmp().close()
}

Vue.prototype.$toast = {
  show,
  close
}

export default {
  show,
  close
}
