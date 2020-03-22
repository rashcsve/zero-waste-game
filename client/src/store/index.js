import Vue from "vue";
import Vuex from "vuex";

import api from "../services/api";

Vue.use(Vuex);

/*
  TODO Refactor - Add state modules!!!!! for: 
          sessionID (?)
          progressBar
          each level 3 states
          test (boolean)
*/
export default new Vuex.Store({
  state: {
    sessionId: null,
    initialTestWasDone: false,
    test: false,
    firstLevel: false,
    secondLevel: false,
    thirdLevel: false,
    fourthLevel: false,
    firstChatbotQuestion: ""
  },
  mutations: {
    setSessionId(state, payload) {
      state.sessionId = payload;
    },
    setInitialTestStatus(state, payload) {
      state.initialTestWasDone = payload;
    },
    // TODO: Rename. State for the test modal
    setTest(state, payload) {
      state.test = payload;
    },
    setFirstLevel(state, payload) {
      state.firstLevel = payload;
    },
    setSecondLevel(state, payload) {
      state.secondLevel = payload;
    },
    setThirdLevel(state, payload) {
      state.thirdLevel = payload;
    },
    setFourthLevel(state, payload) {
      state.fourthLevel = payload;
    },
    setChatbotFirstQuestion(state, payload) {
      state.firstChatbotQuestion = payload;
    }
  },
  actions: {
    async getSessionId({ commit }) {
      let sessionId;
      // TODO Ask about client storage to store the session id for multiple 
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
