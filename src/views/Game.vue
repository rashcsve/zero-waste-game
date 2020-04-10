<template>
  <div class="flex justify-between h-full container-max-height">
    <info-window>
      <initial v-if="!initialTestWasDone" />
      <refuse v-if="getFirstLevel.active" />
      <reduce v-if="getSecondLevel.active" />
      <reuse v-if="getThirdLevel.active" />
      <recycle v-if="getFourthLevel.active" />
      <rot v-if="getLastLevel.active" />
    </info-window>
    <!-- TODO Add loading status
      <section v-else>
      <h2>Něco se pokazilo, nejde se připojit k serveru...</h2>
    </section>-->
    <chat-window />
  </div>
</template>

<script>
import Refuse from "../components/levels/Refuse";
import Recycle from "../components/levels/Recycle";
import Reuse from "../components/levels/Reuse";
import Reduce from "../components/levels/Reduce";
import Rot from "../components/levels/Rot";
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
    Refuse,
    Reduce,
    Rot
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
      "getFourthLevel",
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
