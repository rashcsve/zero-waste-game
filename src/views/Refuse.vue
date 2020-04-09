<template>
  <info-window class="mx-auto">
    <refuse />
  </info-window>
</template>

<script>
import Refuse from "../components/levels/Refuse";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    Refuse
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
