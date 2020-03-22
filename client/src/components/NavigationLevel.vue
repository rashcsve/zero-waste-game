<template>
  <!-- TODO Fix button style, test routing -->
  <router-link
    :to="{name: level.routeLink}"
    class="btn-level"
    :class="{'active': level.active, 'current': level.current, 'disabled': level.disabled}"
  >{{ level.title }}</router-link>
</template>

<script>
export default {
  props: {
    level: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style>
.btn-level {
  @apply px-1 py-4 ml-8 text-sm font-medium leading-5 whitespace-no-wrap border-b-2 border-transparent;
}
.level-btn:focus {
  @apply outline-none;
}
.active {
  @apply text-gray-600;
}
.active:hover {
  @apply text-gray-700 border-gray-700;
}
.current {
  @apply border-gray-700;
}
.disabled {
  @apply text-gray-500 cursor-not-allowed pointer-events-none;
}
</style>