<template>
  <!-- TODO Think about CSS - change the nav UI -->
  <nav class="flex items-center justify-between h-24 px-24 py-6 bg-gray-300">
    <div class="flex items-center flex-shrink-0 mr-6 text-gray-700">
      <router-link :to="{name: 'Home'}" class="text-xl font-semibold tracking-tight">Zero Waste</router-link>
      <div class="flex flex-wrap p-4">
        <progress-bar :percentage="getLevelProgress" class="h-5">
          <span class="flex justify-end w-48 pr-2 text-xs text-white">{{ getLevelProgress }}%</span>
        </progress-bar>
      </div>
    </div>
    <div class="flex -mb-px">
      <navigation-level :level="firstLevel" :current="getFirstLevel.active" />
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
      firstLevel: {
        title: "Obecné Info",
        routeLink: "GeneralInfo",
        active: false,
        disabled: true
      },
      secondLevel: {
        title: "Recyklace",
        routeLink: "Recycle",
        active: false,
        disabled: true
      },
      thirdLevel: {
        title: "Znovupoužití",
        routeLink: "Reuse",
        active: false,
        disabled: true
      },
      lastLevel: {
        title: "Zredukování a zamitnutí",
        routeLink: "ReduceRefuse",
        active: false,
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
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getLastLevel",
      "getActiveLevel"
    ]),
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
