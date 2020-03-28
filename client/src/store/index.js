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
    levels: {
      first: {
        active: false,
        show: false
      },
      second: {
        active: false,
        show: false
      },
      third: { active: false, show: false },
      last: { active: false, show: false }
    },
    firstChatbotQuestion: {}
  },
  mutations: {
    setSessionId(state, payload) {
      state.sessionId = payload;
    },
    // TODO: Dont use it now. Remove after consultation with Naplava (setInit and setTest)
    setInitialTestStatus(state, payload) {
      state.initialTestWasDone = payload;
    },
    setTest(state, payload) {
      state.test = payload;
    },
    setLevelActive(state, payload) {
      Object.keys(state.levels).forEach(lvl => {
        if (lvl === payload) {
          state.levels[lvl].active = true;
        } else {
          state.levels[lvl].active = false;
        }
      });
    },
    setLevelShow(state, { show, level }) {
      let curLevel = {};
      Object.keys(state.levels).forEach(lvl => {
        if (state.levels[lvl].active === true) {
          curLevel = lvl;
        }
      });
      if (curLevel === level) {
        state.levels[curLevel].show = show;
      }
    },
    setChatbotFirstQuestion(state, { firstMessage, secondMessage }) {
      state.firstChatbotQuestion.firstMessage = firstMessage;
      state.firstChatbotQuestion.secondMessage = secondMessage;
    }
  },
  actions: {
    async getSessionId({ commit }) {
      const sessionId = await api.getId();
      commit("setSessionId", sessionId);
    }
  }
});
