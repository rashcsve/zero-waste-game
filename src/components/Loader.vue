<template>
  <pulse-loader color="#4B4F51" :loading="loading" :size="size" sizeUnit="px" />
</template>

<script>
import { PulseLoader } from "@saeris/vue-spinners";

export default {
  components: {
    PulseLoader
  },
  watch: {
    deep: true,
    loading(newv) {
      console.log("waa", newv);
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      size: 8
    }
  }
};
</script>
