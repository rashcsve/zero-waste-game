<template>
  <section class="mx-auto">
    <h1>{{ title }}</h1>
    <p class="my-4 w-congrats" v-html="perex"></p>
    <!-- TODO Update texts and add button to share blahblahblah -->
    <!-- <img src="../assets/images/congrats.svg" alt="congrats" class="mx-auto" />
     -->
    <certificate name="Zero Wejstík" class="mx-auto" />
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Certificate from "../components/Certificate";
export default {
  components: {
    Certificate
  },
  data() {
    return {
      title: "Gratuluji!",
      perex:
        "Výborně, teď jsi profík a znáš základy Zero Waste. Doufám, že sis to užil(a) a bylo to pro tebe přínosné. Budu ráda, jestli se se mnou <a href='https://www.facebook.com/profile.php?id=100010497007068' target='_blank' class='underline hover:text-yellow-500'>podělíš o své emoce a zkušenosti</a>.",
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
