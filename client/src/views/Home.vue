<template>
  <info-window>
    <general-info v-if="getFirstLevelActive" />
    <recycle v-if="getSecondLevelActive" />
    <reuse v-if="getThirdLevelActive" />
    <reduce-refuse v-if="getLastLevelActive" />
  </info-window>
</template>

<script>
import GeneralInfo from "../components/levels/GeneralInfo";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import ReduceRefuse from "../components/levels/ReduceRefuse";
import InfoWindow from "../components/InfoWindow";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    InfoWindow,
    Recycle,
    Reuse,
    GeneralInfo,
    ReduceRefuse
  },
  computed: {
    ...mapGetters([
      "getFirstLevelActive",
      "getSecondLevelActive",
      "getThirdLevelActive",
      "getLastLevelActive"
    ])
  }
};
</script>
