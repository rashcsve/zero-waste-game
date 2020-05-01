<template>
  <header class="container flex items-center justify-between h-24 py-6 mx-auto">
    <div class="flex">
      <countdown />
      <div class="flex flex-wrap items-center py-4" v-if="getInitialTestStatus">
        <span>Umíš Zero Waste na </span>
        <progress-bar :percentage="getLevelProgress" class="ml-2">
          <span class="flex justify-end w-48 pr-2 text-xs text-white">
            {{ getLevelProgress }}%
          </span>
        </progress-bar>
      </div>
    </div>
    <div class="flex">
      <div
        v-for="level in Object.keys(levels)"
        :key="level"
        class="nav-link"
        :class="{
          'nav-link--active': levels[level].active,
          'nav-link--disabled': levels[level].disabled && !levels[level].active
        }"
      >
        {{ levels[level].name }}
      </div>
      <div @click="endGame" class="cursor-pointer nav-link">Domů</div>
    </div>
  </header>
</template>

<script>
import Countdown from "../components/Countdown";
import ProgressBar from "../components/ProgressBar";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Countdown,
    ProgressBar
  },
  data() {
    return {
      levels: {}
    };
  },
  created() {
    this.levels = { ...this.getLevels };
  },
  computed: {
    ...mapGetters(["getLevels", "getInitialTestStatus"]),
    getLevelProgress() {
      const levels = { ...this.getLevels };
      if (levels.first.active === true) {
        return levels.first.progress;
      } else if (levels.second.active === true) {
        return levels.second.progress;
      } else if (levels.third.active === true) {
        return levels.third.progress;
      } else if (levels.fourth.active === true) {
        return levels.fourth.progress;
      } else if (levels.last.active === true) {
        return levels.last.progress;
      }
      return 0;
    }
  },
  methods: {
    ...mapMutations(["setGameEnd"]),
    endGame() {
      this.setGameEnd(true);
    }
  }
};
</script>
