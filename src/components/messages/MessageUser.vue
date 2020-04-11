<template>
  <div class="flex justify-end my-2">
    <div class="px-3 py-2 text-white bg-gray-500 rounded-lg shadow-lg">
      <p class="text-sm">{{ message }}</p>
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
