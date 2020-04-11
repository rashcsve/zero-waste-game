<template>
  <div>
    <section v-if="!loading">
      <main v-if="!getTimeout">
        <game-navigation />
        <div
          class="container flex justify-between h-full mx-auto container-max-height"
        >
          <info-window>
            <initial v-if="!getInitialTestStatus" />
            <transition name="slide-right">
              <refuse v-if="getFirstLevel.active" />
            </transition>
            <transition name="slide-right">
              <reduce v-if="getSecondLevel.active" />
            </transition>
            <transition name="slide-right">
              <reuse v-if="getThirdLevel.active" />
            </transition>
            <transition name="slide-right">
              <recycle v-if="getFourthLevel.active" />
            </transition>
            <transition name="slide-right">
              <rot v-if="getLastLevel.active" />
            </transition>
          </info-window>
          <chat-window :firstFeed="firstFeed" />
        </div>
      </main>
      <info-window v-else class="mx-auto mr-auto text-center">
        <h2>{{ timeout }}</h2>
        <p class="">{{ perex }}</p>
        <div class="flex items-center justify-center my-4">
          <div
            @click="reloadGame"
            class="w-48 text-lg font-normal cursor-pointer button"
          >
            {{ button }}
          </div>
          <router-link to="/" class="h-auto mt-0 ml-4 text-md nav-link">{{
            home
          }}</router-link>
        </div>
        <img
          src="../assets/images/timeout.svg"
          alt="timeout"
          class="mx-auto mt-4 w-congrats"
        />
      </info-window>
    </section>
    <loader
      v-else
      :loading="loading"
      class="flex items-center justify-center h-full"
      style="height: 100vh"
    />
  </div>
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
import { mapGetters, mapActions } from "vuex";
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
      firstFeed: [],
      timeout: "Bohužel čas vypršel :(",
      perex:
        "Můžeš zkusit si zahrát hru znova od začátku nebo vrátit se zpět na domovskou stránku",
      button: "Zkusit znovu",
      home: "Domovská stránka",
      prevHeight: 0
    };
  },
  async mounted() {
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
      "getLoading",
      "getTimeout"
    ])
  },
  methods: {
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
    },
    reloadGame() {
      location.reload();
    }
  }
};
</script>

<style lang="css">
.container-max-height {
  max-height: calc(100vh - 96px);
}
</style>
