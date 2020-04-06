<template>
  <section class="flex mx-auto mt-10">
    <div class="w-hp">
      <h1>{{ title }}</h1>
      <h3>{{ perex }}</h3>
      <router-link :to="button.link" class="w-64 h-20 mt-8 text-2xl button">{{
        button.title
      }}</router-link>
    </div>
    <img src="../assets/images/homepage.svg" alt="hero image" />
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      title: "Nauč se základům Zero Waste",
      perex: "Udělej krok vpřed do nového života",
      button: {
        title: "Spustit Hru",
        link: "/game"
      }
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
