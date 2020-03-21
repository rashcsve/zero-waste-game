<template>
  <div id="app" class="flex flex-col h-full">
    <navigation />
    <div class="flex justify-between h-full container-max-height">
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

<style>
.container-max-height {
  max-height: calc(100vh - 96px);
}
</style>