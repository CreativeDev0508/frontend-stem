export const state = () => ({
    announcement: null
  })
  
  export const mutations = {
    SET_USER(state, user){
      state.user = user
    }
  }
  
  export const actions = {
    async nuxtServerInit({ commit }, { $strapi }) {
    const user = await $strapi.fetchUser()
    commit('SET_USER', user)
  }
}