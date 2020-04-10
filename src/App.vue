<template>
  <div id="app" class="flex flex-col h-full">
    <navigation v-if="!isGame" />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";

import { mapGetters } from "vuex";

export default {
  components: {
    Navigation
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" })
  }
};
</script>
