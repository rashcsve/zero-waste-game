<template>
  <!-- <transition-group name="messages-list" tag="div"> -->
  <div>
    <div
      v-for="(message, index) in feed"
      :key="index"
      class="flex-grow mx-2"
      :class="{ 'pointer-events-none cursor-not-allowed': message.isOld }"
    >
      <message-chatbot
        @selectedOption="sendToChatWindow"
        v-if="message.author === 'chatbot'"
        :textMessage="message.textMessage"
        :optionMessage="message.optionMessage"
      />
      <message-user v-else :message="message.contents" />
    </div>
  </div>
  <!-- </transition-group> -->
</template>

<script>
import MessageUser from "./MessageUser";
import MessageChatbot from "./MessageChatbot";

export default {
  name: "MessageList",
  components: {
    MessageUser,
    MessageChatbot
  },
  props: {
    feed: {
      type: Array,
      default: () => [],
      required: false
    },
    disabledFeed: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  watch: {
    disabledFeed() {
      // Make old messages disabled
      if (this.feed.length > 3 && this.disabledFeed.length > 0) {
        this.feed.forEach(msg => {
          this.disabledFeed.forEach(oldMsg => {
            if (JSON.stringify(msg) === JSON.stringify(oldMsg)) {
              msg.isOld = true;
            }
          });
        });
      }
    }
  },
  methods: {
    sendToChatWindow(message) {
      this.$emit("selectedOption", message);
    }
  }
};
</script>

<style>
.messages-list-item {
  transition: all 1s;
}

.messages-list-enter,
.messages-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.messages-list-leave-active {
  position: absolute;
}
</style>
