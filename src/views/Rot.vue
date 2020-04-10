<template>
  <info-window class="mx-auto mr-auto">
    <rot />
    <!-- TODO Change rot.svg (at least colors and width) -->
  </info-window>
</template>

<script>
import Rot from "../components/levels/Rot";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    Rot
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
