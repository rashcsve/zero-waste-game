<template>
  <section v-if="showInfo || !isGame">
    <h2>1. {{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex mt-4 mb-6">
      <main>
        <p class="text-lg" v-html="mainIdea"></p>
        <p
          class="w-5/6 py-2 my-3 ml-4 leading-tight main-idea"
          v-html="question"
        ></p>
        <p v-html="perex"></p>
        <p class="my-2">
          <i class="text-md">{{ citation.text }}</i
          ><br />
          <span class="text-xs leading-none">{{ citation.author }}</span>
        </p>
      </main>
      <img src="../../assets/images/refuse.svg" alt="refuse" />
    </div>
    <!-- Sekce "Tipy" -->
    <div class="mb-6">
      <carousel
        :per-page="1"
        navigationEnabled
        navigationNextLabel
        navigationPrevLabel
      >
        <slide
          v-for="(tip, index) in tipsData"
          :key="index"
          class="flex px-10 mb-4"
        >
          <img
            :src="require(`../../assets/images/reduce-refuse/${tip.icon}.svg`)"
            :alt="tip.icon"
            class="h-40 mr-4"
          />
          <section>
            <h3 class="mb-2 text-title">{{ tip.title }}</h3>
            <span v-html="tip.perex"></span>
          </section>
        </slide>
      </carousel>
    </div>
    <!-- Sekce "Mapa" -->
    <div>
      <h3 class="mb-2 text-title">Nakupujte v obchodech bez obalu</h3>
      <p class="mb-2">
        V speciálních obchodech lze koupit vše od mouky, přes čokoládu až po
        kosmetiku bez obalu. Tady najdeš mapu, která ti ukáže podobné obchody v
        tvém okolí.
      </p>
      <iframe class="w-full mb-6 h-map" :src="mapLink"></iframe>
    </div>
  </section>
  <section v-else class="flex flex-col items-center">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-title">
      {{ info }}
    </h2>
    <p>{{ whatToDo }}</p>
    <div class="mt-8">
      <img
        src="../../assets/images/first.svg"
        alt="first level"
        class="text-center"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Refuse",
      info: "Vítám na první úrovni!",
      whatToDo: "Podívej se vpravo, tam najdeš návod :)",
      mapLink: "https://mapa.reduca.cz/",
      mainIdea: "Refuse znamená <b>zamítni vše, co nepotřebuješ</b>.",
      perex:
        "Nejdůležitější je odmítnout odpad a zamýšlet se nad tím, co kupuji a jak to kupuji. Ekologické problémy začínají přebytkem.",
      citation: {
        text: "“All in all, we have more stuff and less happiness”,",
        author: "McKibben, Deep Ecology: Economy as if the World Mattered"
      },
      question: "Základní otázkou je<br><b>“doopravdy to potřebuji?”</b>",
      tipsData: [
        {
          icon: "minimal",
          title: "Staň se minimalista",
          perex:
            "Říkej “<b>NE</b>” častěji, <b>přestaň</b> do svého života zvát věci, které ve skutečnosti <b>nepotřebuješ</b> a jen ti berou čas. <br>Dej přednost <b>kvalitě před kvantitou</b>. <br><b>Zamysli se nad zbytečnostmi</b>."
        },
        {
          icon: "buy",
          title: "Nakupuj s rozumem",
          perex:
            "Nenakupuj jednorázové produkty. Kupuj <b>ne balenou zeleninu na váhu</b>. Upřednostňuj <b>papírový, skleněný nebo hliníkový obal</b> před plastovým. Pij kohoutkovou vodu místo balené. <b>Vyhni se impulzivním nákupům s prázdným žaludkem</b>."
        }
      ]
    };
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" }),
    showInfo() {
      return this.$store.state.levels.first.show;
    }
  }
};
</script>
