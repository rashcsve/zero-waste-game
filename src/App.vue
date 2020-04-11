<template>
  <div id="app" class="flex flex-col h-full">
    <navigation v-if="!isGame" />
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import Transition from "./components/Transition";

import { mapGetters } from "vuex";

export default {
  components: {
    Navigation,
    Transition
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" })
  }
};
</script>
