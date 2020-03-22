<template>
  <info-window>
    <general-info v-if="isFirstLevel" />
    <recycle v-if="isSecondLevel" />
    <reuse v-if="isThirdLevel" />
    <reduce-refuse v-if="isFourthLevel" />
  </info-window>
</template>

<script>
import GeneralInfo from "../components/levels/GeneralInfo";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import ReduceRefuse from "../components/levels/ReduceRefuse";
import InfoWindow from "../components/InfoWindow";

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
    isFirstLevel() {
      return this.$store.state.firstLevel;
    },
    isSecondLevel() {
      return this.$store.state.secondLevel;
    },
    isThirdLevel() {
      return this.$store.state.thirdLevel;
    },
    isFourthLevel() {
      return this.$store.state.fourthLevel;
    }
  }
};
</script>
