<template>
  <div v-if="!loading">
    <game-navigation />
    <div
      class="container flex justify-between h-full mx-auto container-max-height"
    >
      <info-window>
        <initial v-if="!getInitialTestStatus" />
        <refuse v-if="getFirstLevel.active" />
        <reduce v-if="getSecondLevel.active" />
        <reuse v-if="getThirdLevel.active" />
        <recycle v-if="getFourthLevel.active" />
        <rot v-if="getLastLevel.active" />
      </info-window>
      <chat-window :firstFeed="firstFeed" />
    </div>
  </div>
  <loader
    v-else
    :loading="loading"
    class="flex items-center justify-center h-full"
  />
</template>

<script>
import Refuse from "../components/levels/Refuse";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import Reduce from "../components/levels/Reduce";
import Rot from "../components/levels/Rot";
import InfoWindow from "../components/InfoWindow";
import ChatWindow from "../components/ChatWindow";
import GameNavigation from "../components/GameNavigation";
import Initial from "../components/Initial";
import Loader from "../components/Loader";

import api from "../services/api";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Initial,
    ChatWindow,
    InfoWindow,
    GameNavigation,
    Loader,
    Recycle,
    Reuse,
    Refuse,
    Reduce,
    Rot
  },
  data() {
    return {
      loading: true,
      firstFeed: []
    };
  },
  async mounted() {
    this.setGameStatus(true);
    this.setGameOverStatus(false);
    this.loading = true;
    await this.getSessionId();
    await this.startDialogWithBot();
    this.loading = false;
  },
  computed: {
    ...mapGetters([
      "getInitialTestStatus",
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getFourthLevel",
      "getLastLevel",
      "getLoading"
    ])
  },
  methods: {
    ...mapMutations(["setGameStatus", "setGameOverStatus"]),
    ...mapActions(["getSessionId"]),
    async startDialogWithBot() {
      let message = await api.askAssistant("", this.$store.state.sessionId);
      if (message) {
        for (const m in message.output.generic) {
          const chatbotMessage = message.output.generic[m];
          // Add message to the feed
          const chatbotFullMessage = {
            author: "chatbot",
            textMessage: chatbotMessage.text
          };
          this.firstFeed.push(chatbotFullMessage);
        }
      }
    }
  }
};
</script>

<style lang="css">
.container-max-height {
  max-height: calc(100vh - 96px);
}
</style>
