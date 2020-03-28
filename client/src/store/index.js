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
        show: ""
      },
      second: {
        active: false,
        show: ""
      },
      third: { active: false, show: "" },
      last: { active: false, show: "" }
    },
    firstChatbotQuestion: {}
  },
  getters: {
    getFirstLevelActive(state) {
      return state.levels.first.active;
    },
    getSecondLevelActive(state) {
      return state.levels.second.active;
    },
    getThirdLevelActive(state) {
      return state.levels.third.active;
    },
    getLastLevelActive(state) {
      return state.levels.last.active;
    },
    getFirstLevelShow(state) {
      return state.levels.first.show;
    },
    getSecondLevelShow(state) {
      return state.levels.second.show;
    },
    getThirdLevelShow(state) {
      return state.levels.third.show;
    },
    getLastLevelShow(state) {
      return state.levels.last.show;
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
