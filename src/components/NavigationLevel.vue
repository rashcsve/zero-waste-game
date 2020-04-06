<template>
  <router-link
    :to="{ name: level.routeLink }"
    class="nav-link"
    :class="{
      'nav-link--active': active || currentPage,
      'nav-link--disabled': level.disabled && !active && isGame,
      'nav-link--not-link': isGame
    }"
    >{{ level.title }}</router-link
  >
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    level: {
      type: Object,
      default: () => {}
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" }),
    currentPage() {
      return this.$route.name === this.level.routeLink;
    }
  }
};
</script>
