/* eslint-disable no-unused-vars */
<template>
  <section class="relative mb-8 -mt-4 bg-gray-100 w-hp chat-window">
    <div class="relative flex flex-col flex-1 h-full pt-4 pl-2 pr-4">
      <!-- Message Feed -->
      <message-list
        :feed="feed"
        :disabledFeed="disabledFeed"
        ref="baby"
        @selectedOption="setUserMessage"
        id="chat-window"
        class="mb-32 overflow-x-auto overflow-y-scroll"
        :class="{ 'mb-32': loading }"
      />
      <!-- Input -->
      <div
        class="absolute bottom-0 flex items-end flex-1 w-full py-4 mx-auto bg-grey-lighter"
      >
        <section
          v-if="loading"
          class="absolute flex items-center -mt-4 top-loader left-avatar"
        >
          <img src="../assets/images/avatar.svg" alt="avatar" />
          <loader :loading="loading" class="ml-2" />
        </section>
        <div
          class="relative flex items-center flex-1 mr-4 bg-white rounded-full h-14 shadow-input"
        >
          <input
            class="w-3/4 py-2 pl-6 rounded-full focus:outline-none"
            :class="{ 'cursor-not-allowed': isOption }"
            type="text"
            name="message"
            :disabled="isOption"
            placeholder="Napiš..."
            v-model="userMessage"
            @keyup.enter.prevent="sendUserMessage"
          />
          <!-- Button -->
          <button
            type="button"
            @click="sendUserMessage"
            class="absolute w-24 h-10 leading-none button right-button"
          >
            Odeslat
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../services/api";
import { scrollToBottom } from "../services/scroll.js";
import { mapMutations, mapGetters, mapActions } from "vuex";

import Loader from "./Loader";
import MessageList from "./messages/MessageList";

export default {
  components: {
    Loader,
    MessageList
  },
  props: {
    firstFeed: {
      type: Array
    }
  },
  data() {
    return {
      feed: [],
      disabledFeed: [],
      userMessage: "",
      chatbotMessage: "",
      loading: false,
      isOption: false
    };
  },
  created() {
    this.setGameStatus(true);
    this.firstFeed.forEach(msg => {
      this.pushToFeed(msg);
    });
    this.setGameOverStatus(false);
    this.resetLevels();
    this.setInitialTestStatus(false);
  },
  watch: {
    getGameEnd(newValue) {
      if (newValue) {
        this.userMessage = "Chci ukončit hru";
        this.sendUserMessage();
        this.setGameEnd(false);
      }
    }
  },
  computed: {
    ...mapGetters(["getCurrentActiveLevel", "getGameEnd"])
  },
  methods: {
    ...mapMutations([
      "setGameStatus",
      "resetLevels",
      "setFirstVars",
      "setLevelShow",
      "setLevelActive",
      "setGameOverStatus",
      "setInitialTestStatus",
      "setGameEnd"
    ]),
    ...mapActions(["getSessionId"]),
    setUserMessage(msg) {
      this.userMessage = msg;
      this.sendUserMessage();
    },
    pushToFeed(msg) {
      this.feed.push(msg);
    },
    addAuthorToMessage(author, msg) {
      this.isOption = false;
      // Parse chatbot message
      let messageWithAuthor = {};
      if (msg.response_type === "text") {
        messageWithAuthor = {
          author: author,
          textMessage: msg.text,
          isOld: false
        };
      } else if (typeof msg === "string") {
        messageWithAuthor = { author: author, textMessage: msg, isOld: false };
      } else {
        messageWithAuthor = {
          author: author,
          optionMessage: msg,
          isOld: false
        };
        this.isOption = true;
      }
      return messageWithAuthor;
    },
    sendUserMessage() {
      if (!this.userMessage || this.userMessage === "") {
        return;
      }
      // Add message to feed
      let userFullMessage = { author: "user", contents: this.userMessage };
      this.pushToFeed(userFullMessage);
      scrollToBottom("chat-window");

      // call API
      this.callApi(this.userMessage);
    },
    async callApi(msg) {
      this.loading = true;
      let message = await api.askAssistant(msg, this.$store.state.sessionId);
      this.userMessage = "";
      // Got an assistant message
      if (message) {
        // If the game is over, route to congrats page
        if (
          message.context.skills["main skill"].user_defined["game-over"] ===
          true
        ) {
          this.setGameStatus(false);
          this.setGameOverStatus(true);
          this.resetLevels();
          this.setInitialTestStatus(false);
          if (
            message.context.skills["main skill"].user_defined["user-end"] ===
            true
          ) {
            this.$router.push({ name: "Home" });
          } else {
            this.$router.push({ name: "Congrats" });
          }
        }
        // Parse the answer and route to the next level if needed
        if (
          message.context.skills["main skill"].user_defined["next-level"] ===
          true
        ) {
          const nextLevel =
            message.context.skills["main skill"].user_defined.level;
          this.routeToNextLevel(message, nextLevel);
        } else {
          if (this.feed.length > 3) {
            this.feed.forEach(oldMessage => {
              if (oldMessage.author === "chatbot") {
                this.disabledFeed.push(oldMessage);
              }
            });
          }
          // Show the messages and continue the conveersation
          for (const m in message.output.generic) {
            this.chatbotMessage = message.output.generic[m];
            // Add message to the feed
            const chatbotFullMessage = this.addAuthorToMessage("chatbot", {
              ...this.chatbotMessage
            });
            this.pushToFeed(chatbotFullMessage);
            scrollToBottom("chat-window");
          }
          const chatbotLevel =
            message.context.skills["main skill"].user_defined.level;
          // Set store status vars
          if (
            message.context.skills["main skill"].user_defined["level-info"] ===
            true
          ) {
            this.setLevelShow({ show: true, level: chatbotLevel });
          }
        }
      }
      this.loading = false;
    },
    routeToNextLevel(msg, level) {
      console.log(level);
      this.setLevelActive(level);
      this.setInitialTestStatus(true);

      msg.output.generic.forEach(key => {
        this.pushToFeed(this.addAuthorToMessage("chatbot", key));
      });
      scrollToBottom("chat-window");
    }
  }
};
</script>

<style>
#chat-window {
  scroll-behavior: smooth;
}
</style>
