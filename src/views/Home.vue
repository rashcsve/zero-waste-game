<template>
  <main>
    <section class="container flex mx-auto mt-10">
      <div class="w-hp">
        <h1>{{ title }}</h1>
        <h3>{{ perex }}</h3>
        <div class="flex items-center">
          <router-link :to="button.link" class="w-auto mt-8 text-xl button">{{
            button.title
          }}</router-link>
          <!-- TODO Add smooth scroll -->
          <a :href="anchor.link" class="h-auto mt-8 ml-4 text-xl nav-link">{{ anchor.title }}</a>
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
      perex: "Snižme naši uhlíkovou stopu a buďme ohleduplní k naší planetě",
      button: {
        title: "Chci zjistit, jak jsem na tom",
        link: "/game"
      },
      anchor: {
        title: "Co je Zero Waste?",
        link: "#zero-waste"
      },
      citation:
        "“Odmítej, co nepotřebuješ; redukuj, co potřebuješ, ale nemusíš mít; zužitkuj; recykluj a kompostuj”"
    };
  },
  created() {
    this.setShowHomepageStatus(false);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
