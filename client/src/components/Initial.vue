<template>
  <modal :title="title" :button="button" />
</template>

<script>
import Modal from "../components/Modal";

import api from "../services/api";

export default {
  components: {
    Modal
  },
  data() {
    return {
      button: "",
      title: ""
    };
  },
  created() {
    // Firts call to Watson API
    this.callApi();
  },
  methods: {
    async callApi() {
      const message = await api.askAssistant("", this.$store.state.sessionId);
      console.log(message);
      if (message) {
        this.title = message.output.generic[0].text;
        this.button = message.output.generic[1].options[0].label;
      }
    }
  }
};
</script>