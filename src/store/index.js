import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    userDetails:null,
    folders: [],
    sets: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setUserDetails(state, userDetails) {
      state.userDetails = userDetails;
    },

    addFolder(state, folder) {
      state.folders.push(folder);
    },

  },
  actions: {
    setUser(context, user){
      context.commit('setUser', user)
    },

    setUserDetails(context, userdetails){
      context.commit('setUserDetails', userdetails)
    },

    addFolder(context, folder){
      context.commit('addFolder', folder)
    }
  },
  modules: {

  },
});
