<template>
  <div class="relative w-carousel-image h-10 overflow-hidden bg-gray-100 rounded-full">
    <div
      class="h-full bg-green-500 rounded-full progressbar font-bold"
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
