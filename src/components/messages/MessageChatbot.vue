<template>
  <!-- TODO Add the time (using moment) -->
  <div class="flex max-w-sm mb-2">
    <div class="flex items-end py-2 ">
      <img src="../../assets/images/avatar.svg" alt="avatar" class="mr-3" />
      <main class="px-3 py-2 bg-white rounded shadow-lg">
        <p class="text-sm font-bold text-teal">Asistent Wejstík</p>
        <p v-if="textMessage" class="mt-1 text-sm">{{ textMessage }}</p>
        <div v-if="optionMessage">
          <p class="mt-1 mb-2 text-sm">{{ optionMessage.title }}</p>
          <ul>
            <li v-for="(opt, i) in optionMessage.options" :key="i" class="mb-2">
              <button
                @click="sendToMessageList(opt.value.input.text)"
                class="h-10 font-normal leading-none button button--dark"
              >
                {{ opt.label }}
              </button>
            </li>
          </ul>
        </div>
      </main>
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
