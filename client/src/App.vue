<template>
  <div id="app" class="flex flex-col h-full">
    <navigation />
    <div class="flex justify-between h-full">
      <chat-window />
      <router-view />
    </div>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import ChatWindow from "./components/ChatWindow";

export default {
  components: {
    Navigation,
    ChatWindow
  }
};
</script>
