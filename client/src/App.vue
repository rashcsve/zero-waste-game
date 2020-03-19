<template>
  <div id="app">
    <navigation />
    <div class="flex justify-center">
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
