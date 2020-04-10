/* eslint-disable no-unused-vars */
<template>
  <section class="relative mb-8 -mt-4 bg-gray-100 w-hp chat-window">
    <div class="relative flex flex-col flex-1 h-full pt-4 pl-2 pr-4">
      <!-- Message Feed -->
      <message-list
        :feed="feed"
        ref="baby"
        @selectedOption="setUserMessage"
        id="chat-window"
        class="mb-20 overflow-x-auto overflow-y-scroll"
      />
      <!-- Input -->
      <div
        class="absolute bottom-0 flex items-end flex-1 py-4 w-input bg-grey-lighter"
      >
        <div
          class="relative flex items-center flex-1 bg-white rounded-full h-14 shadow-input"
        >
          <input
            class="w-full px-6 py-2 rounded-full max-w-input focus:outline-none"
            type="text"
            name="message"
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

import MessageList from "./messages/MessageList";

export default {
  components: {
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
      userMessage: "",
      chatbotMessage: ""
    };
  },
  mounted() {
    this.firstFeed.forEach(msg => {
      this.pushToFeed(msg);
    });
  },
  computed: {
    ...mapGetters(["getCurrentActiveLevel"])
  },
  methods: {
    ...mapMutations([
      "emptyCart",
      "setFirstVars",
      "setLevelShow",
      "setLevelActive",
      "setGameOverStatus",
      "setInitialTestStatus"
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
      // Parse chatbot message
      let messageWithAuthor = {};
      if (msg.response_type === "text") {
        messageWithAuthor = { author: author, textMessage: msg.text };
      } else if (typeof msg === "string") {
        messageWithAuthor = { author: author, textMessage: msg };
      } else {
        messageWithAuthor = { author: author, optionMessage: msg };
      }
      return messageWithAuthor;
    },
    sendUserMessage() {
      if (!this.userMessage || this.userMessage === "") {
        // TODO Add error validation
        return;
      }
      // Add message to feed
      let userFullMessage = { author: "user", contents: this.userMessage };
      this.pushToFeed(userFullMessage);

      // call API
      this.callApi(this.userMessage);
    },
    async callApi(msg) {
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
          this.emptyCart();
          this.setInitialTestStatus(false);
          this.$router.push({ name: "Congrats" });
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
          } else if (
            message.context.skills["main skill"].user_defined["level-test"] ===
            true
          ) {
            this.setLevelShow({ show: "test", level: chatbotLevel });
          }
        }
      }
    },
    routeToNextLevel(msg, level) {
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
