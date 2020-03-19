<template>
  <div>
    <!-- Send data on first load - output from watson -->
    <Initial v-if="sessionId" />
    {{ sessionId }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Initial from "../components/Initial";

export default {
  name: "Home",
  components: {
    Initial
  },
  data() {
    return {
      sessionId: null
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
