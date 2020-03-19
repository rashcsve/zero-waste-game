import Vue from "vue";
import Vuex from "vuex";

import api from "../services/api";

Vue.use(Vuex);

/*
  TODO: Add state for: 
          sessionID (?)
          progressBar
          each level 3 states
          test (boolean)
*/
export default new Vuex.Store({
  state: {
    sessionId: null
  },
  mutations: {
    setSessionId(state, payload) {
      state.sessionId = payload;
    }
  },
  actions: {
    async getSessionId({ commit }) {
      let sessionId;
      // TODO: Ask about client storage
      // if (localStorage.getItem("sessionId")) {
      //   sessionId = localStorage.getItem("sessionId");
      // } else {
        sessionId = await api.getId();
        localStorage.setItem("sessionId", JSON.stringify(sessionId));
      // }
      commit("setSessionId", sessionId);
    }
  },
  modules: {}
});
