<template>
  <div
    class="relative h-8 overflow-hidden bg-gray-100 rounded-full w-carousel-image"
  >
    <div
      class="h-full font-bold bg-green-500 rounded-full progressbar"
      role="progressbar"
      :style="{ width: `${percentage}%` }"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span class="flex items-center h-full px-4">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped>
.progressbar {
  transition: width 0.25s ease;
}
</style>
