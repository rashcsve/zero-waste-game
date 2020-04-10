<template>
  <section v-if="showInfo">
    <h2>1. {{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex mt-4 mb-6">
      <main>
        <p class="mb-4 text-lg" v-html="mainIdea"></p>
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
  <section v-else>
    Info o první úrovně
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Refuse",
      mapLink: "https://mapa.reduca.cz/",
      mainIdea: "Refuse znamená <b>zamítni vše, co nepotřebuješ</b>.",
      perex:
        "Nejdůležitější je odmítnout odpad a zamýšlet se nad tím, co kupuji a jak to kupuji. Ekologické problémy začínají přebytkem.",
      citation: {
        text: "“All in all, we have more stuff and less happiness”,",
        author: "McKibben, Deep Ecology: Economy as if the World Mattered"
      },
      question: "Základní otázkou je <b>“doopravdy to potřebuji?”</b>",
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
            "Nenakupuj jednorázové produkty. Kupuj <b>ne balenou zeleninu na váhu</b>. Upřednostňuj <b>papírový, skleněný nebo hliníkový obal</b> před plastovým. Pij kohoutkovou vodu místo balené. <br><b>Vyhni se impulzivním nákupům s prázdným žaludkem</b>."
        }
      ]
    };
  },
  computed: {
    showInfo() {
      return this.$store.state.levels.first.show;
    }
  }
};
</script>
