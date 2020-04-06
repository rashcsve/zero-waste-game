import Vue from "vue";
import Vuex from "vuex";

import api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionId: null,
    initialTestWasDone: false,
    active: "",
    isGame: false,
    gameOver: false,
    showHomepage: false,
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
    }
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
    },
    getGameStatus(state) {
      return state.isGame;
    },
    getGameOverStatus(state) {
      return state.gameOver;
    },
    getShowHomepageStatus(state) {
      return state.showHomepage;
    }
  },
  mutations: {
    setSessionId(state, payload) {
      state.sessionId = payload;
    },
    setGameStatus(state, payload) {
      state.isGame = payload;
    },
    setGameOverStatus(state, payload) {
      state.gameOver = payload;
    },
    setShowHomepageStatus(state, payload) {
      state.showHomepage = payload;
    },
    setInitialTestStatus(state, payload) {
      state.initialTestWasDone = payload;
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
    }
  },
  actions: {
    async getSessionId({ state, commit }) {
      const sessionId = await api.getId();
      commit("setSessionId", sessionId);
      console.log(state);
      // return state.sessionId;
    }
  }
});
