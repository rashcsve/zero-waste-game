<template>
  <info-window class="mx-auto">
    <reuse />
  </info-window>
</template>

<script>
import Reuse from "../components/levels/Reuse";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    Reuse
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
