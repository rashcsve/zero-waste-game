<template>
  <div id="app" class="flex flex-col h-full">
    <navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>
