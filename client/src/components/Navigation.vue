<template>
  <!-- TODO Make the compote dynamic including level links -->
  <!-- TODO Think about CSS - change the nav UI -->
  <nav class="flex items-center justify-between h-24 px-24 py-6 bg-gray-300">
    <div class="flex items-center flex-shrink-0 mr-6 text-gray-700">
      <router-link :to="{name: 'Home'}" class="text-xl font-semibold tracking-tight">Zero Waste</router-link>
      <div class="flex flex-wrap p-4">
        <progress-bar :percentage="contentProgress" class="h-5">
          <span class="flex justify-end w-48 pr-2 text-xs text-white">{{contentProgress}}%</span>
        </progress-bar>
      </div>
    </div>
    <div class="flex -mb-px">
      <navigation-level :level="firstLevel" />
      <navigation-level :level="secondLevel" />
      <navigation-level :level="thirdLevel" />
      <navigation-level :level="fourthLevel" />
    </div>
  </nav>
</template>

<script>
import NavigationLevel from "../components/NavigationLevel";
import ProgressBar from "../components/ProgressBar";

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
        active: true,
        current: true,
        disabled: false
      },
      secondLevel: {
        title: "Recyklace",
        routeLink: "Recycle",
        active: false,
        current: false,
        disabled: true
      },
      thirdLevel: {
        title: "Znovupoužití",
        routeLink: "Reuse",
        active: false,
        current: false,
        disabled: true
      },
      fourthLevel: {
        title: "Zredukování a zamitnutí",
        routeLink: "ReduceRefuse",
        active: false,
        current: false,
        disabled: true
      },
      contentProgress: 25 // TODO Store value
    };
  }
};
</script>
