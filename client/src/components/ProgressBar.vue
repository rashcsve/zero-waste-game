<template>
  <div class="relative w-full h-2 overflow-hidden bg-gray-200 rounded-full">
    <div
      class="h-full bg-gray-500 rounded-full progressbar"
      role="progressbar"
      :style="{width: `${percentage}%`}"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span class="flex items-center h-full">
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