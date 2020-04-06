<template>
  <nav class="flex items-center justify-between h-24 px-10 py-6">
    <div class="flex items-center flex-shrink-0 text-gray-700" :class="{'order-2': isGame}">
      <router-link
        to="/game"
        class="h-8 mr-8 button"
        v-if="!isGame && showHomepage && !gameOver"
        >{{ button }}</router-link
      >
      <router-link v-if="showHomepage" :to="{ name: 'Home' }">Domů</router-link>
      <div class="flex flex-wrap items-center p-4 pr-0" v-if="isGame">
        <span>Umíš Zero Waste na </span>
        <progress-bar :percentage="getLevelProgress" class="ml-4">
          <span class="flex justify-end w-48 pr-2 text-xs text-white"
            >{{ getLevelProgress }}%</span
          >
        </progress-bar>
      </div>
    </div>
    <div class="flex" :class="{'order-1': isGame}">
      <navigation-level :level="firstLevel" :current="getFirstLevel.active" class="ml-0" />
      <navigation-level :level="secondLevel" :current="getSecondLevel.active" />
      <navigation-level :level="thirdLevel" :current="getThirdLevel.active" />
      <navigation-level :level="lastLevel" :current="getLastLevel.active" />
    </div>
  </nav>
</template>

<script>
import NavigationLevel from "../components/NavigationLevel";
import ProgressBar from "../components/ProgressBar";
import { mapGetters } from "vuex";

export default {
  components: {
    ProgressBar,
    NavigationLevel
  },
  data() {
    return {
      button: "Spustit hru",
      firstLevel: {
        title: "Zero Waste",
        routeLink: "ZeroWaste",
        disabled: false
      },
      secondLevel: {
        title: "Recyklace",
        routeLink: "Recycle",
        disabled: false
      },
      thirdLevel: {
        title: "Znovupoužití",
        routeLink: "Reuse",
        disabled: true
      },
      lastLevel: {
        title: "Zredukování a zamitnutí",
        routeLink: "ReduceRefuse",
        disabled: true
      }
    };
  },
  watch: {
    getActiveLevel(newValue, oldValue) {
      console.log(oldValue);
      if (newValue === "first") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
      } else if (newValue === "second") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
      } else if (newValue === "third") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
        this.thirdLevel.active = true;
        this.thirdLevel.disabled = false;
      } else if (newValue === "last") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
        this.thirdLevel.active = true;
        this.thirdLevel.disabled = false;
        this.lastLevel.active = true;
        this.lastLevel.disabled = false;
      }
    }
  },
  computed: {
    ...mapGetters([
      "getGameStatus",
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getLastLevel",
      "getActiveLevel",
      "getGameOverStatus",
      "getShowHomepageStatus"
    ]),
    isGame() {
      return this.getGameStatus;
    },
    gameOver() {
      return this.getGameOverStatus;
    },
    showHomepage() {
      return this.getShowHomepageStatus;
    },
    getLevelProgress() {
      if (this.getFirstLevel.active === true) {
        return this.getFirstLevel.progress;
      } else if (this.getSecondLevel.active === true) {
        return this.getSecondLevel.progress;
      } else if (this.getThirdLevel.active === true) {
        return this.getThirdLevel.progress;
      } else if (this.getLastLevel.active === true) {
        return this.getLastLevel.progress;
      }
      return 0;
    }
  }
};
</script>
