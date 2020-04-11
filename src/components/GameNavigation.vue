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
    </div>
  </header>
</template>

<script>
import Countdown from "../components/Countdown";
import ProgressBar from "../components/ProgressBar";
import { mapGetters } from "vuex";

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
      if (this.levels.first.active === true) {
        return this.levels.first.progress;
      } else if (this.levels.second.active === true) {
        return this.levels.second.progress;
      } else if (this.levels.third.active === true) {
        return this.levels.third.progress;
      } else if (this.levels.fourth.active === true) {
        return this.levels.fourth.progress;
      } else if (this.levels.last.active === true) {
        return this.levels.last.progress;
      }
      return 0;
    }
  }
};
</script>
