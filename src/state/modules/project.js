import axios from '@src/axios/index.js'

export const state = {
  projects: [],
  pages: [],
}

export const getters = {
  numberOfProjects(state) {
    if (state.projects.length === 0) {
      return true
    } else return false
  },
}

export const mutations = {
  CACHE_PROJECTS(state, projects) {
    state.projects = projects
  },
  CACHE_PAGES(state, payload) {
    state.pages = payload
  },
  REMOVE_PROJECT(state, id) {
    state.projects = state.projects.filter((project) => {
      return project._id !== id
    })
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
  removeProject({ commit }, id) {
    commit('REMOVE_PROJECT', id)
    // axios
    //   .delete(`/projects/:${id}`)
    //   .then((res) => {
    //     commit('REMOVE_PROJECT', res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err.response || err)
    //   })
  },
}
