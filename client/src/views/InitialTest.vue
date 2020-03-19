<template>
  <!-- TODO: Rename to test ? -->
  <div>
    <!-- TODO: Add chat window -->
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      button: "",
      question: ""
    };
  },
  created() {
    this.callApi("Chci zjistit úroveň znalostí", this.$store.state.sessionId);
  },
  methods: {
    async callApi() {
      const message = await api.askAssistant("", this.$store.state.sessionId);
      this.question = message.output.generic[0].text;
    },
    nextStep() {
      // Route to initial test page
    }
  }
};
</script>