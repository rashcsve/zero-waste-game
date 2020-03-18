<template>
  <div class="home">
    <Test />
    {{ message }}
    {{ sessionId }}
    <button class="h-8 w-32" @click="callApi">Spustit test</button>
  </div>
</template>

<script>
import Test from "@/components/Test";
import api from "../services/api";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Test
  },
  data() {
    return {
      sessionId: null,
      message: null
    };
  },
  async created() {
    await this.getSessionId();
    this.sessionId = this.$store.state.sessionId;
  },
  methods: {
    ...mapActions(["getSessionId"]),
    async callApi() {
      this.message = await api.askAssistant("", this.$store.state.sessionId);
    }
  }
};
</script>
