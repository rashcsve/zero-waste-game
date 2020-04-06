<template>
  <div
    class="fixed inset-x-0 bottom-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <!-- Background Overlay -->
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <!-- Modal Window -->
    <div
      class="px-4 pt-5 pb-8 mx-auto overflow-hidden transition-all transform bg-white rounded-lg shadow-xl h-modal sm:max-w-screen-xl sm:w-full sm:p-6"
    >
      <div class="flex items-center justify-center">
        <div
          class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"
        >
          <img src="../assets/images/exam.png" alt="exam" class="w-6" />
        </div>
        <!-- TODO Add the title - Initial / Level -->
        <!-- <h3 class="ml-4 text-2xl font-bold">{{ title }}</h3> -->
      </div>
      <!-- For the initial test - first question to start the game -->
      <div v-if="button && !showChatWindow" class="flex flex-col items-center">
        <h2
          class="mb-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >
          {{ title }}
        </h2>
        <button v-if="button" @click="callApi(firstUserAnswerToStartTheGame)">
          {{ button }}
        </button>
      </div>
      <!-- Usual test chat window -->
      <chat-window v-if="showChatWindow" class="w-full h-full" />
    </div>
  </div>
</template>

<script>
import ChatWindow from "./ChatWindow";
import api from "../services/api";
import { mapMutations } from "vuex";

export default {
  components: {
    ChatWindow
  },
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },
    button: {
      type: String,
      default: "",
      required: false
    }
  },
  data() {
    return {
      showChatWindow: false,
      firstUserAnswerToStartTheGame: "Chci zjistit úroveň znalostí"
    };
  },
  methods: {
    ...mapMutations(["setChatbotFirstQuestion"]),
    async callApi(msg) {
      const message = await api.askAssistant(msg, this.$store.state.sessionId);
      if (message.output.intents[0].intent === "Initial_Test-Start") {
        this.setChatbotFirstQuestion({
          firstMessage: "Vítám na úvodním testu!",
          secondMessage: message.output.generic[0]
        });
        this.showChatWindow = true;
      }
    }
  }
};
</script>
