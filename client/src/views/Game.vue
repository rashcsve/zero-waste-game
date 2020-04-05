<template>
  <div class="flex justify-between h-full container-max-height">
    <info-window>
      <initial v-if="!initialTestWasDone" />
      <general-info v-if="getFirstLevel.active" />
      <recycle v-if="getSecondLevel.active" />
      <reuse v-if="getThirdLevel.active" />
      <reduce-refuse v-if="getLastLevel.active" />
    </info-window>
    <!-- TODO Add loading status
      <section v-else>
      <h2>Něco se pokazilo, nejde se připojit k serveru...</h2>
    </section>-->
    <chat-window />
  </div>
</template>

<script>
import GeneralInfo from "../components/levels/GeneralInfo";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import ReduceRefuse from "../components/levels/ReduceRefuse";
import InfoWindow from "../components/InfoWindow";
import ChatWindow from "../components/ChatWindow";
import Initial from "../components/Initial";

import { mapGetters } from "vuex";
export default {
  components: {
    Initial,
    ChatWindow,
    InfoWindow,
    Recycle,
    Reuse,
    GeneralInfo,
    ReduceRefuse
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters([
      "getActiveLevel",
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getLastLevel"
    ]),
    initialTestWasDone() {
      return this.$store.state.initialTestWasDone;
    }
  }
};
</script>

<style lang="css">
.container-max-height {
  max-height: calc(100vh - 96px);
}
</style>