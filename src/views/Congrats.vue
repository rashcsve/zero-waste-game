<template>
  <section class="container flex justify-between px-10 mx-auto">
    <div class="mr-16 w-hp">
      <h1>{{ title }}</h1>
      <p class="my-4" v-html="perex"></p>
      <p>{{ certificate }}</p>
      <section class="flex items-center my-4 mr-4 h-14" v-if="!isCertificate">
        <input
          type="text"
          class="w-3/4 py-2 pl-6 rounded-full shadow-lg focus:outline-none"
          placeholder="Napiš svoje jméno"
          v-model="userName"
          @keyup.enter.prevent="showCertificate"
        />
        <button
          type="button"
          @click="showCertificate"
          class="w-40 h-10 leading-none button right-button"
        >
          Chci certifikát
        </button>
      </section>
      <router-link
        v-if="isCertificate"
        class="h-8 mt-4 mr-8 button"
        :to="{ name: 'Home' }"
        >Domů</router-link
      >
    </div>
    <div>
      <certificate v-if="isCertificate" :name="userName" class="mx-auto my-8" />
      <img
        v-else
        src="../assets/images/congrats.svg"
        alt="congrats"
        class="mx-auto"
      />
    </div>
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
      userName: "",
      isCertificate: false,
      title: "Gratuluji!",
      certificate:
        "Jestli chceš dostat osvědčení o absolvování kurzu Zero Waste pro začátečníky, vlož sem svoje jméno a stickni tlačítko:",
      perex:
        "Výborně, teď jsi profík a znáš základy Zero Waste. Doufám, že sis to užil(a) a bylo to pro tebe přínosné.<br>Budu ráda, jestli se se mnou <a href='https://www.facebook.com/profile.php?id=100010497007068' target='_blank' class='underline hover:text-yellow-500'>podělíš o své emoce a zkušenosti</a>.",
      perexSecond:
        "Můžeš se považovat za odborníka. Našim cílem je hlavně dobrý pocit z toho, že dělámě něco pro naši planetu. Ale jestli se někomu chceš pochlubit nebo o v Zero waste vzdelat další lidi, můžeš svůj výsledek nasdílet na Facebooku nebo si stáhnout náš “certifikát”. "
    };
  },
  created() {
    this.setShowHomepageStatus(true);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus"]),
    showCertificate() {
      this.isCertificate = true;
    }
  }
};
</script>
