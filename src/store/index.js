import Vue from "vue";
import Vuex from "vuex";

import api from "../services/api";

Vue.use(Vuex);

const defaultLevels = () => {
  return {
    first: {
      active: false,
      show: false,
      progress: 0
    },
    second: {
      active: false,
      show: false,
      progress: 20
    },
    third: { active: false, show: false, progress: 40 },
    fourth: { active: false, show: false, progress: 60 },
    last: { active: false, show: false, progress: 80 }
  };
};
const levels = defaultLevels();

export default new Vuex.Store({
  state: {
    sessionId: null,
    initialTestWasDone: false,
    active: "",
    isGame: false,
    gameOver: false,
    showHomepage: false,
    levels: levels
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
    getFourthLevel(state) {
      return state.levels.fourth;
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
    emptyCart(state) {
      Object.assign(state, defaultLevels());
    },
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
      console.log(state.levels[curLevel].show);
    }
  },
  actions: {
    async getSessionId({ commit }) {
      const sessionId = await api.getId();
      commit("setSessionId", sessionId);
      // return state.sessionId;
    }
  }
});
