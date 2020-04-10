import Vue from "vue";
import Vuex from "vuex";

import api from "../services/api";

Vue.use(Vuex);

const defaultLevels = () => {
  return {
    first: {
      name: "Refuse",
      active: false,
      disabled: true,
      show: false,
      progress: 0
    },
    second: {
      name: "Reduce",
      active: false,
      disabled: true,
      show: false,
      progress: 20
    },
    third: {
      name: "Reuse",
      active: false,
      disabled: true,
      show: false,
      progress: 40
    },
    fourth: {
      name: "Recycle",
      active: false,
      disabled: true,
      show: false,
      progress: 60
    },
    last: {
      name: "Rot",
      active: false,
      disabled: true,
      show: false,
      progress: 80
    }
  };
};
const levels = defaultLevels();

export default new Vuex.Store({
  state: {
    sessionId: null,
    initialTestWasDone: false,
    gameOver: false,
    isGame: false,
    gameIsLoading: false,
    showHomepage: false,
    levels: levels
  },
  getters: {
    getLevels(state) {
      return state.levels;
    },
    getInitialTestStatus(state) {
      return state.initialTestWasDone;
    },
    getLoading(state) {
      return state.gameIsLoading;
    },
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
    setGameOverStatus(state, payload) {
      state.gameOver = payload;
    },
    setShowHomepageStatus(state, payload) {
      state.showHomepage = payload;
    },
    setInitialTestStatus(state, payload) {
      state.initialTestWasDone = payload;
    },
    setGameStatus(state, payload) {
      state.isGame = payload;
    },
    setGameLoading(state, payload) {
      state.gameIsLoading = payload;
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
