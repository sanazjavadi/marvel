import axios from '@src/axios/index'
import Vue from 'vue'

export const state = {
  users: [],
  profile: [],
  token: '',
}

export const getters = {}

export const mutations = {
  //  adding new user to our state
  SIGN_UP(state, payload) {
    state.users.push(payload.user)
  },
}

export const actions = {
  // posting new user
  signUp({ commit }, payload) {
    axios
      .post('/auth/register', {
        email: payload.newUserEmail,
        password: payload.newUserpassword,
      })
      .then((res) => {
        if (res.data) {
          const newUser = {
            user: res.data.user,
          }
          commit('SIGN_UP', newUser)
          localStorage.setItem('token', res.data.token.accessToken)
        }
      })
      .catch((err) => {
        console.log(err.response || err)
        if (err.response.data.errors) {
          err.response.data.errors.map((e) => {
            e.messages.map((m) => {
              Vue.notify({
                group: 'foo',
                title: 'Important message',
                text: m,
                type: 'warn',
              })
            })
          })
        }
      })
  },
  signIn({ commit }, payload) {
    axios
      .post('/auth/login', {
        email: payload.email,
        password: payload.password,
      })
      .then((res) => {
        if (res.data) {
        }
      })
  },
  getProfile({ commit }) {
    axios
      .get('/users/profile')
      .then((res) => {
        console.log(res.data || res)
      })
      .catch((err) => {
        console.log(err.response || err)
      })
  },

  forgotPassword({ commit }, payload) {
    axios.post('')
  },
}
