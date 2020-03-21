<template>
  <!-- Send data on first load - output from watson TODO: Modal window for test -->
  <!-- <Initial v-if="sessionId" /> -->
  <!-- {{ sessionId }} -->
  <info-window>
    <general-info v-if="true" />
    <recycle />
    <reuse />
    <reduce-refuse />
  </info-window>
</template>

<script>
import { mapActions } from "vuex";
// import Initial from "../components/Initial";
import GeneralInfo from "../components/levels/GeneralInfo";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import ReduceRefuse from "../components/levels/ReduceRefuse";
import InfoWindow from "../components/InfoWindow";

export default {
  name: "Home",
  components: {
    // Initial,
    InfoWindow,
    Recycle,
    Reuse,
    GeneralInfo,
    ReduceRefuse
  },
  data() {
    return {
      sessionId: null,
      firstLevel: true // Store var ?
    };
  },
  async created() {
    // await this.getSessionId();
    // this.sessionId = this.$store.state.sessionId;
  },
  methods: {
    ...mapActions(["getSessionId"])
  }
};
</script>
