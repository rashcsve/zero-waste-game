<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="mb-6">
      <p>
        <b>Reduce</b> znamená zredukovat, co potřebujeme a nemůžeme zamítnout.
        <br />
        <b>Refuse</b> znamená zamítnout vše, co nepotřebujeme.
        <br />
        <br />Zamýšlet se nad tím, jestli nějaké věci
        <b>skutečně potřebujeme</b> a
        <b>vybírat</b> ze všech variant
        <b>nejvhodnější</b>. Věci, které jsou opravdu nutné,
        bychom měli kupovat
        <b>v rozumném počtu</b>.
      </p>
    </div>
    <!-- Sekce "Tipy" -->
    <div class="mb-6">
      <h3 class="mb-2 text-title">Tipy</h3>
      <carousel :per-page="1" navigationEnabled navigationNextLabel navigationPrevLabel>
        <slide v-for="(tip, index) in tipsData" :key="index" class="flex px-10 mb-4">
          <img
            :src="require(`../../assets/images/reduce-refuse/${tip.icon}.svg`)"
            :alt="tip.icon"
            class="h-40 mr-4"
          />
          <section>
            <h4 class="mb-2">{{ tip.title }}</h4>
            <span v-html="tip.perex"></span>
          </section>
        </slide>
      </carousel>
    </div>
    <!-- Sekce "Mapa" -->
    <div>
      <h3 class="mb-2 text-title">Nakupujte v obchodech bez obalu</h3>
      <p class="mb-2">
        V speciálních obchodech lze koupit vše od mouky, přes těstoviny,
        luštěniny, kafe až po ořechy nebo čokoládu bez obalu.
      </p>
      <iframe class="w-full mb-6 h-map" :src="mapLink"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Zredukování a zamitnutí",
      mapLink: "https://mapa.reduca.cz/",
      tipsData: [
        {
          icon: "observe",
          title: "Pozorujte svůj odpad",
          perex:
            "<b>Dívejte se na obsah svého koše</b> a postupně <b>eliminujte</b> výrobky. Zjistěte, co vyhazujete nejvíce."
        },
        {
          icon: "buy",
          title: "Nakupujte s rozumem",
          perex:
            "Nenakupujte jednorázové produkty. Kupujte <b>ne balenou zeleninu na váhu</b>. Upřednostňujte <b>papírový, skleněný nebo hliníkový obal</b> před plastovým. Pijte kohoutkovou vodu místo balené. <br><b>Vyhněte se impulzivním nákupům s prázdným žaludkem</b>."
        },
        {
          icon: "minimal",
          title: "Staňte se minimalisty",
          perex:
            "Říkejte “<b>NE</b>” častěji, <b>přestaňte</b> do svého života zvát věci, které ve skutečnosti <b>nepotřebujete</b> a jen vám berou čas. Dejte přednost <b>kvalitě před kvantitou</b>. <br><b>Zamyslete se nad zbytečnostmi</b>."
        },
        {
          icon: "gift",
          title: "Darujte zážitky místo věcí",
          perex:
            "<b>Darujte zážitky a služby</b>, které nemají ekologickou stopu a nekradou prostor v domácnostech. <b>Vzpomínky</b> se uskladňují lépe a nezaberou tolik místa. Také nepotřebují balicí papír.",
        },
        {
          icon: "laundry",
          title: "Pračku naplňte vždy celou",
          perex:
            "Praním nedostatečně naplněné pračky plýtváme energií. V optimálně naplněné pračce by měl zůstat mezi prádlem a bubnem prostor, do kterého <b>se vejde výška dlaně</b>. K tomu používejte <b>ekodrogerii bez škodlivých látek</b>. Perte oblečení, až když je <b>skutečně špinavé</b>.",
        },
        {
          icon: "walk",
          title:
            "Choďte pěšky",
          perex:
            "Pokud máte auto, rozmyslete si předem, kdy ho použijete a kdy <b>necháte stát v garáži</b>. Zkuste auto <b>sdílet</b>. Zkoušejte alternativy - <b>spolujízdu, městskou dopravu, na kole</b> nebo <b>pěšky</b>. ",
        }
      ]
    };
  }
};
</script>
