<template>
  <info-window class="mx-auto">
    <reduce />
  </info-window>
</template>

<script>
import Reduce from "../components/levels/Reduce";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    Reduce
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
