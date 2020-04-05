<template>
  <info-window class="mx-auto">
    <general-info />
  </info-window>
</template>

<script>
import GeneralInfo from "../components/levels/GeneralInfo";
import InfoWindow from "../components/InfoWindow";

import { mapMutations } from "vuex";

export default {
  name: "ZeroWaste",
  components: {
    InfoWindow,
    GeneralInfo
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"]),
  }
};
</script>
