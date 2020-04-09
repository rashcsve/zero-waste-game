<template>
  <nav class="flex items-center justify-between h-24 px-10 py-6 ">
    <div class="flex items-center flex-shrink-0 text-gray-700">
      <router-link
        to="/game"
        class="h-8 mr-8 button"
        v-if="!isGame && showHomepage && !gameOver"
        >{{ button }}</router-link
      >
      <router-link v-if="showHomepage" :to="{ name: 'Home' }">Domů</router-link>
      <div class="flex flex-wrap items-center p-4 pr-0" v-if="isGame">
        <span>Umíš Zero Waste na </span>
        <progress-bar :percentage="getLevelProgress" class="ml-4">
          <span class="flex justify-end w-48 pr-2 text-xs text-white"
            >{{ getLevelProgress }}%</span
          >
        </progress-bar>
      </div>
    </div>
    <div class="z-50 flex h-full">
      <router-link :to="zeroWaste.link" class="nav-link"
        >{{ zeroWaste.title }}
      </router-link>
      <section>
        <p
          class="cursor-pointer nav-link"
          @click="toggleMenu"
          :class="{ 'nav-link--active': open }"
        >
          {{ main }}
        </p>
        <div v-if="open" @click="toggleMenu">
          <div
            v-for="item in Object.keys(levels)"
            :key="item"
            class="text-center"
          >
            <navigation-level
              :level="levels[item]"
              :current="item.active"
              @click="toggleMenu"
            />
          </div>
        </div>
      </section>
      <router-link :to="zeroWaste.link" class="nav-link"
        >{{ about.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>
import NavigationLevel from "../components/NavigationLevel";
import ProgressBar from "../components/ProgressBar";
import { mapGetters } from "vuex";

export default {
  components: {
    ProgressBar,
    NavigationLevel
  },
  data() {
    return {
      open: false,
      button: "Spustit hru",
      zeroWaste: {
        title: "Co je Zero Waste",
        link: "/#zero-waste"
      },
      about: {
        title: "O projektu",
        name: "About" 
      },
      main: "Základní principy",
      levels: {
        firstLevel: {
          title: "Refuse",
          disabled: false
        },
        secondLevel: {
          title: "Reduce",
          disabled: false
        },
        thirdLevel: {
          title: "Reuse",
          disabled: false
        },
        fourthLevel: {
          title: "Recycle",
          disabled: false
        },
        lastLevel: {
          title: "Rot",
          disabled: false
        }
      }
    };
  },
  watch: {
    getActiveLevel(newValue) {
      if (newValue === "first") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
      } else if (newValue === "second") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
      } else if (newValue === "third") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
        this.thirdLevel.active = true;
        this.thirdLevel.disabled = false;
      } else if (newValue === "last") {
        this.firstLevel.active = true;
        this.firstLevel.disabled = false;
        this.secondLevel.active = true;
        this.secondLevel.disabled = false;
        this.thirdLevel.active = true;
        this.thirdLevel.disabled = false;
        this.lastLevel.active = true;
        this.lastLevel.disabled = false;
      }
    }
  },
  computed: {
    ...mapGetters([
      "getGameStatus",
      "getFirstLevel",
      "getSecondLevel",
      "getThirdLevel",
      "getFourthLevel",
      "getLastLevel",
      "getActiveLevel",
      "getGameOverStatus",
      "getShowHomepageStatus"
    ]),
    isGame() {
      return this.getGameStatus;
    },
    gameOver() {
      return this.getGameOverStatus;
    },
    showHomepage() {
      return this.getShowHomepageStatus;
    },
    getLevelProgress() {
      if (this.getFirstLevel.active === true) {
        return this.getFirstLevel.progress;
      } else if (this.getSecondLevel.active === true) {
        return this.getSecondLevel.progress;
      } else if (this.getThirdLevel.active === true) {
        return this.getThirdLevel.progress;
      } else if (this.getFourthLevel.active === true) {
        return this.getFourthLevel.progress;
      } else if (this.getLastLevel.active === true) {
        return this.getLastLevel.progress;
      }
      return 0;
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    }
  }
};
</script>
