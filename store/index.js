import {
  setStorage
} from '@/assets/utils'

export const state = () => ({
  birthday: ''
})

export const mutations = {
  setBirthday (state, { birthday }) {
    state.birthday = birthday

    setStorage('birthday', birthday)
  }
}
