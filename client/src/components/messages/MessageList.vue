<template>
  <transition-group name="messages-list" tag="div">
    <div v-for="(message, index) in feed" :key="index" class="flex-grow">
      <message-chatbot v-if="message.author === 'chatbot'" :message="message.contents" />
      <message-user v-else :message="message.contents" />
    </div>
  </transition-group>
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
    }
  }
};
</script>

<style>
.messages-list-item {
  transition: all 0.2s;
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