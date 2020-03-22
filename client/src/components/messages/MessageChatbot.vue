<template>
<!-- TODO Add the time (using moment) -->
  <div class="flex max-w-sm mb-2">
    <div class="px-3 py-4 bg-gray-100 rounded">
      <p class="text-sm text-teal">Zero Waste Guru - Asistent</p>
      <p class="mt-1 text-sm font-bold">{{ message }}</p>
      <!-- <p class="mt-1 text-xs text-right text-grey-dark">12:45 pm</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageChatbot",
  props: {
    message: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>
