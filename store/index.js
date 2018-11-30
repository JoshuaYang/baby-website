export const state = () => ({
  birthday: ''
})

export const mutations = {
  setBirthday (state, { birthday }) {
    state.birthday = birthday

    localStorage.setItem('birthday', birthday)
  }
}
