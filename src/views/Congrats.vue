<template>
  <section class="mx-auto">
    <!-- TODO Add page and logic for game over (chci ukoncit hru => route to hp) -->
    <h1>{{ title }}</h1>
    <p class="my-4 w-congrats">{{ perex }}</p>
    <!-- TODO Update texts and add button to share blahblahblah -->
    <img src="../assets/images/congrats.svg" alt="congrats" class="mx-auto" />
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "Gratuluji!",
      perex:
        "Výborně, teď jsi profík a znáš základy Zero Waste. Doufám, že sis to užil(a) a bylo to pro tebe přínosné. Budu ráda, jestli se se mnou podělíš o své emoce a zkušenosti.",
      perexSecond:
        "Můžeš se považovat za odborníka. Našim cílem je hlavně dobrý pocit z toho, že dělámě něco pro naši planetu. Ale jestli se někomu chceš pochlubit nebo o v Zero waste vzdelat další lidi, můžeš svůj výsledek nasdílet na Facebooku nebo si stáhnout náš “certifikát”. "
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
