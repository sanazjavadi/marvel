import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export const usersComputed = {
  ...mapState('users', ['users']),
}

export const usersMethods = {
  ...mapActions('users', ['signUp']),
}

export const projectsComputed = {
  ...mapState('project', ['projects', 'pages']),
}

export const projectsMethods = {
  ...mapActions('project', [
    'fetchProjects',
    'fetchPages',
    'createNewProject',
    'removeProject',
  ]),
  ...mapMutations('project', ['CREATE_NEW_PROJECT']),
}
export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])
