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
    active: "",
    levels: {
      first: {
        active: false,
        show: "",
        progress: 0
      },
      second: {
        active: false,
        show: "",
        progress: 25
      },
      third: { active: false, show: "", progress: 50 },
      last: { active: false, show: "", progress: 75 }
    },
    firstChatbotQuestion: {}
  },
  getters: {
    getFirstLevel(state) {
      return state.levels.first;
    },
    getSecondLevel(state) {
      return state.levels.second;
    },
    getThirdLevel(state) {
      return state.levels.third;
    },
    getLastLevel(state) {
      return state.levels.last;
    },
    getActiveLevel(state) {
      return state.active;
    }
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
          state.active = lvl;
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
