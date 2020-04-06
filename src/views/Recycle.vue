<template>
  <info-window class="mx-auto">
    <recycle />
  </info-window>
</template>

<script>
import Recycle from "../components/levels/Recycle";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    Recycle
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
