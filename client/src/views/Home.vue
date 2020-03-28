<template>
  <info-window>
    <general-info v-if="getFirstLevel.active" />
    <recycle v-if="getSecondLevel.active" />
    <reuse v-if="getThirdLevel.active" />
    <reduce-refuse v-if="getLastLevel.active" />
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
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getLastLevel"
    ])
  }
};
</script>
