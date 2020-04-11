<template>
  <nav
    class="container flex items-center h-24 px-10 py-6 mx-auto"
    :class="{ 'justify-between': isNotHomepage, 'justify-end': !isNotHomepage }"
  >
    <div
      class="flex items-center flex-shrink-0 text-gray-700"
      v-if="isNotHomepage"
    >
      <router-link to="/game" class="h-8 mr-8 button">{{ button }}</router-link>
      <router-link class="hover:text-yellow-500" :to="{ name: 'Home' }"
        >Domů</router-link
      >
    </div>
    <div class="z-50 flex h-full">
      <router-link :to="zeroWaste.link" class="nav-link"
        >{{ zeroWaste.title }}
      </router-link>
      <section>
        <p
          class="cursor-pointer nav-link"
          @click="toggleMenu"
          :class="{ 'nav-link--active': isOpen }"
        >
          {{ main }}
        </p>
        <div v-if="isOpen" @click="toggleMenu">
          <div
            v-for="level in levels"
            :key="level"
            class="flex justify-center ml-8"
          >
            <router-link
              :to="{ name: level }"
              class="text-center hover:text-yellow-500"
              >{{ level }}</router-link
            >
          </div>
        </div>
      </section>
      <router-link :to="about.link" class="nav-link"
        >{{ about.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpen: false,
      button: "Spustit hru",
      zeroWaste: {
        title: "Co je Zero Waste",
        link: "/#zero-waste"
      },
      about: {
        title: "O projektu",
        link: "/#about"
      },
      main: "Základní principy",
      levels: ["Refuse", "Reduce", "Reuse", "Recycle", "Rot"]
    };
  },
  computed: {
    ...mapGetters({
      gameOver: "getGameOverStatus",
      isNotHomepage: "getShowHomepageStatus"
    })
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
