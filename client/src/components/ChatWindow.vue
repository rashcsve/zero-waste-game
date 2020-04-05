<template>
  <section class="w-1/2 p-10">
    <div class="flex flex-col flex-1 h-full p-6 overflow-auto bg-gray-200" id="chat-window">
      <!-- Message Feed -->
      <message-list :feed="feed" @selectedOption="setUserMessage" />
      <!-- Input -->
      <div class="flex items-end flex-1 py-4 bg-grey-lighter">
        <div class="flex flex-1">
          <input
            class="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
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
            class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-gray-300 focus:shadow-outline-gray active:bg-gray-50 active:text-gray-800"
          >Odeslat</button>
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
  data() {
    return {
      feed: [],
      userMessage: "",
      chatbotMessage: ""
    };
  },
  async mounted() {
    await this.getSessionId();
    await this.callApi("");
    this.setGameStatus(true);
    this.setGameOverStatus(false);
  },
  computed: {
    ...mapGetters(["getCurrentActiveLevel"])
  },
  methods: {
    ...mapMutations([
      "setGameStatus",
      "setFirstVars",
      "setLevelShow",
      "setLevelActive",
      "setGameOverStatus",
      "setInitialTestStatus",
      "setChatbotFirstQuestion"
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
      // Parse cahtbot message
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
      // console.log(message.context.skills["main skill"]);
      if (message) {
        // If the game is over, route to congrats page
        if (
          message.context.skills["main skill"].user_defined["game-over"] ===
          true
        ) {
          this.setGameStatus(false);
          this.setGameOverStatus(true);
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
            this.setLevelShow({ show: "info", level: chatbotLevel });
          } else if (
            message.context.skills["main skill"].user_defined["level-map"] ===
            true
          ) {
            this.setLevelShow({ show: "map", level: chatbotLevel });
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