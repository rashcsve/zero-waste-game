<template>
  <div class="flex flex-col items-center justify-center h-screen mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2
      class="mb-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
    >{{ title }}</h2>
    <!-- Chceš se stát mistrem Zero Waste života? -->
    <button
      type="button"
      class="flex items-center justify-center w-40 h-12 px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700"
      @click="nextStep"
    >{{ button }}</button>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  methods: {
    data() {
      return {
        button: "",
        title: ""
      };
    },
    created() {
      this.callApi();
    },
    async callApi() {
      const message = await api.askAssistant("", this.$store.state.sessionId);
      this.title = message.output.generic[0].text;
      this.button = message.output.generic[1].options[0].label;
    },
    nextStep() {
      // Route to initial test page
      this.$router.push({ name: "InitialTest" });
    }
  }
};
</script>