<template>
  <div id="app" class="flex flex-col h-full">
    <navigation />
    <div v-if="sessionId && !closeModal">
      <Initial v-if="!initialTestWasDone" />
      <modal v-else />
    </div>
    <div v-if="closeModal" class="flex justify-between h-full container-max-height">
      <router-view />
      <chat-window />
    </div>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import ChatWindow from "./components/ChatWindow";
import Initial from "./components/Initial";
import Modal from "./components/Modal";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Navigation,
    ChatWindow,
    Initial,
    Modal
  },
  data() {
    return {
      sessionId: null
    };
  },
  async created() {
    await this.getSessionId();
    this.sessionId = this.$store.state.sessionId;
  },
  computed: {
    // TODO Change or remove the condition for the first level
    ...mapGetters(["getFirstLevel", "getActiveLevel"]),
    initialTestWasDone() {
      return this.$store.state.initialTestWasDone;
    },
    closeModal() {
      if (this.getActiveLevel !== "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions(["getSessionId"])
  }
};
</script>

<style>
.container-max-height {
  max-height: calc(100vh - 96px);
}
</style>