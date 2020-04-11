<template>
  <div class="flex w-16">
    <!-- <p class="flex flex-col items-center justify-center mr-2 leading-tight">
      {{ hours | twoDigits }}<br /><span class="text-xs">hod</span>
    </p> -->
    <p
      class="flex flex-col items-center justify-center leading-tight"
      :class="{ 'text-red': colorAlert, 'text-green-500': !colorAlert }"
    >
      {{ minutes | twoDigits }} : {{ seconds | twoDigits }}
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      end: 0,
      interval: 0,
      diff: 0,
      colorAlert: false,
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    }
  },
  methods: {
    ...mapMutations([
      "setTimeoutStatus",
      "setGameStatus",
      "resetLevels",
      "setGameOverStatus"
    ])
  },
  watch: {
    now() {
      this.diff = this.end - this.now;
      if (this.diff <= 300) {
        this.colorAlert = true;
      }
      if (this.diff <= 0) {
        this.diff = 0;
        // Remove interval
        clearInterval(this.interval);
        this.setTimeoutStatus(true);
        this.setGameStatus(false);
        this.resetLevels();
        this.setGameOverStatus(true);
      }
    }
  },
  created() {
    this.end = this.now + 3599; // Set timer for one hour
    this.diff = this.end - this.now;
    this.interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  }
};
</script>
