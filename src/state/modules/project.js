import axios from '@src/axios/index.js'

export const state = {
  projects: [],
  pages: [],
}

export const getters = {}

export const mutations = {
  CACHE_PROJECTS(state, payload) {
    state.projects = payload
  },
  CACHE_PAGES(state, payload) {
    state.pages = payload
  },
  REMOVE_PROJECT(state, payload) {
    state.projects.splice(payload.id, 1)
  },
}

export const actions = {
  fetchProjects({ commit }) {
    axios
      .get('/projects')
      .then((res) => {
        commit('CACHE_PROJECTS', res.data.project)
      })
      .catch((err) => {
        console.log(err.response || err)
      })
  },

  createNewProject({ commit, state }, payload) {
    if (state.projects.lenght > 1) {
      return false
    }
    axios
      .post('/projects', {
        name: payload.name,
      })
      .then((res) => {
        if (res.data) {
          commit('CACHE_PROJECTS', res.data)
        } else {
          alert('cant create project')
        }
      })
      .catch((err) => {
        console.log(err.response || err)
      })
  },
  fetchPages({ commit }, payload) {
    axios
      .get(`/pages/:${payload.id}`)
      .then((res) => {
        commit('CACHE_PAGES', res.data)
      })
      .catch((err) => {
        console.log(err.response || err)
      })
  },
  removeProject({ commit }, payload) {
    axios
      .delete(`/projects/:${payload.id}`)
      .then((res) => {
        commit('REMOVE_PROJECT', payload.id)
      })
      .catch((err) => {
        console.log(err.response || err)
      })
  },
}
