<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ perex }}</p>
    <img src="../assets/images/personal.png" alt="congrats" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "Gratuluji!",
      perex:
        "Teď jsi profík a znáš základy Zero Waste. Doufám, že sis to užil(a) a bylo to pro tebe přínosné. Budu ráda, jestli se se mnou podělíš o své emoce a zkušenosti."
    };
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"])
  }
};
</script>
