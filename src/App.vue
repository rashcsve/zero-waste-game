<template>
  <div id="app" class="flex flex-col h-full">
    <game-navigation v-if="isGame" />
    <navigation v-else />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import GameNavigation from "./components/GameNavigation";

import { mapGetters } from "vuex";

export default {
  components: {
    Navigation,
    GameNavigation
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" })
  }
};
</script>
