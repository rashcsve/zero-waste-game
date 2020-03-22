<template>
  <!-- TODO Add the time (using moment) -->
  <div class="flex justify-end mb-2">
    <div class="px-3 py-4 bg-white rounded">
      <p class="text-sm text-right text-teal">Ty</p>
      <p class="mt-1 text-sm">{{message}}</p>
      <!-- <p class="mt-1 text-xs text-right text-grey-dark">12:45 pm</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageUser",
  props: {
    message: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>
