<template>
  <main>
    <section class="container flex justify-around mx-auto">
      <div class="mt-12 w-hp">
        <h1 class="leading-none">{{ title }}</h1>
        <h3 class="mt-6 leading-tight" v-html="perex"></h3>
        <div class="flex items-center">
          <router-link
            :to="button.link"
            class="w-auto mt-8 text-lg font-normal button"
            >{{ button.title }}</router-link
          >
          <router-link
            :to="anchor.link"
            class="h-auto mt-8 ml-4 text-xl nav-link"
            >{{ anchor.title }}</router-link
          >
        </div>
      </div>
      <img src="../assets/images/homepage.svg" alt="hero image" />
    </section>
    <!-- Stripe -->
    <section class="my-20 bg-gray-400">
      <p class="py-20 mx-auto text-center text-white w-hp">{{ citation }}</p>
    </section>
    <!-- Info about Zero Waste -->
    <zero-waste />
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import ZeroWaste from "../components/ZeroWaste";

export default {
  name: "Home",
  components: {
    ZeroWaste
  },
  data() {
    return {
      title: "Nauč se základům Zero Waste",
      perex: "Snižme naši uhlíkovou stopu<br>a buďme ohleduplní k naší planetě",
      button: {
        title: "Chci zjistit, jak jsem na tom",
        link: "/game"
      },
      anchor: {
        title: "Co je Zero Waste?",
        link: "/#zero-waste"
      },
      citation:
        "Zero Waste je ojedinělý návod, jak svůj život přetvořit v jednodušší, radostnější a zodpovědnější bytí"
    };
  },
  created() {
    this.setShowHomepageStatus(false);
    this.setGameStatus(false);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus", "setGameStatus"]),
    scrollTo() {
      console.log("scrol");
      document
        .querySelector("#zero-waste")
        .scrollIntoView({ top: 0, behavior: "smooth" });
    }
  }
};
</script>
