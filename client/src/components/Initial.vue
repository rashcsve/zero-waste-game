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
      if (message) {
        this.title = message.generic[0].text;
        this.button = message.generic[1].options[0].label;
      }
    }
  }
};
</script>