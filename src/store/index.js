import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    userDetails:null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setUserDetails(state, userDetails) {
      state.userDetails = userDetails;
    },
  },
  actions: {
    setUser(context, user){
      context.commit('setUser', user)
    },

    setUserDetails(context, userdetails){
      context.commit('setUserDetails', userdetails)
    }
  },
  modules: {

  },
});
