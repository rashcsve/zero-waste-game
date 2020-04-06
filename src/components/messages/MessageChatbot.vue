<template>
  <!-- TODO Add the time (using moment) -->
  <div class="flex max-w-sm mb-2">
    <div class="px-3 pt-4 pb-2 rounded shadow-xl">
      <p class="text-sm font-bold text-teal">Zero Waste Guru - Asistent</p>
      <p v-if="textMessage" class="mt-1 text-sm">{{ textMessage }}</p>
      <div v-if="optionMessage">
        <p class="mt-1 mb-2 text-md">{{ optionMessage.title }}</p>
        <ul>
          <li v-for="(opt, i) in optionMessage.options" :key="i" class="mb-2">
            <button @click="sendToMessageList(opt.value.input.text)" class="button button--dark">
              {{ opt.label }}
            </button>
          </li>
        </ul>
      </div>
      <!-- <p class="mt-1 text-xs text-right text-grey-dark">12:45 pm</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageChatbot",
  props: {
    textMessage: {
      type: String,
      default: "",
      required: false
    },
    optionMessage: {
      type: Object,
      default: () => {},
      required: false
    }
  },
  methods: {
    sendToMessageList(message) {
      this.$emit("selectedOption", message);
    }
  }
};
</script>
