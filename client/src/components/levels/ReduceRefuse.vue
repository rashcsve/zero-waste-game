<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div v-if="whatIsIt || all" class="mb-6">
      <h3 class="mb-2">Co je zredukování a zamitnutí?</h3>
      <div class="flex">
        <div class="mr-6 w-30">
          <img src="../../assets/images/reduce.png" alt="reduce" class="w-24 mb-2" />
          <img src="../../assets/images/refuse.png" alt="refuse" class="w-24" />
        </div>
        <p>
          <b>Reduce</b> znamená zredukovat, co potřebujeme a nemůžeme zamítnout.
          <br />
          <b>Refuse</b> znamená zamítnout vše, co nepotřebujeme.
          <br />
          <br />Zamýšlet se nad tím, jestli nějaké věci skutečně potřebujeme a vybírat ze všech variant nejvhodnější. Věci, které jsou opravdu nutné, bychom měli kupovat v rozumném počtu.
        </p>
      </div>
    </div>
    <!-- Sekce "Tipy" -->
    <div v-if="tips || all" class="mb-6">
      <h3 class="mb-2">Tipy</h3>
      <div v-for="(tip, index) in tipsData" :key="index" class="flex items-center mb-6">
        <img
          v-if="!tip.alignRight"
          :src="require(`../../assets/images/reduce-refuse/${tip.icon}.png`)"
          :alt="tip.icon"
          class="w-24 mr-4"
        />
        <div>
          <b>{{ tip.title }}</b>
          <br />
          {{ tip.perex }}
        </div>
        <img
          v-if="tip.alignRight"
          :src="require(`../../assets/images/reduce-refuse/${tip.icon}.png`)"
          :alt="tip.icon"
          class="w-24 ml-4"
        />
      </div>
    </div>
    <!-- Sekce "Mapa" -->
    <div v-if="map || all">
      <h3 class="mb-2">Nakupujte v obchodech bez obalu</h3>
      <p class="mb-2">V speciálních obchodech lze koupit vše od mouky, přes těstoviny, luštěniny, kafe až po ořechy nebo čokoládu bez obalu.</p>
      <iframe class="w-full mb-6 h-map" :src="mapLink"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Zredukování a zamitnutí",
      whatIsIt: false,
      tips: false,
      map: false,
      mapLink: "https://mapa.reduca.cz/",
      all: true,
      tipsData: [
        {
          icon: "observe",
          title: "Pozorujte svůj odpad",
          perex:
            "Dívejte se na obsah svého koše a postupně eliminujte výrobky. Zjistěte, co vyhazujete nejvíce.",
          alignRight: false
        },
        {
          icon: "walk",
          title:
            "Nejezděte autem nebo MHD, pokud by cesta pěšky trvala méně než 30 minut",
          perex:
            "Pokud máte auto, rozmyslete si předem, kdy ho použijete a kdy necháte stát v garáži. Zkuste auto sdílet. Zkoušejte alternativy - spolujízdu, městskou dopravu, na kole nebo pěšky. ",
          alignRight: true
        },
        {
          icon: "buy",
          title: "Nakupujte s rozumem",
          perex:
            "Vyhněte se zboží, které je zabalené v zbytečných obalech. Nenakupujte jednorázové produkty. Kupujte ne balenou zeleninu na váhu. Upřednostňujte papírový, skleněný nebo hliníkový obal před plastovým. Pijte kohoutkovou vodu místo balené. Vyhněte se impulzivním nákupům s prázdným žaludkem.",
          alignRight: false
        },
        {
          icon: "minimal",
          title: "Staňte se minimalisty",
          perex:
            "Říkejte “NE” častěji, přestaňte do svého života zvát věci, které ve skutečnosti nepotřebujete a jen vám berou čas. Dejte přednost kvalitě před kvantitou. Zamyslete se nad zbytečnostmi.",
          alignRight: true
        },
        {
          icon: "laundry",
          title: "Pračku naplňte vždy celou",
          perex:
            "Praním nedostatečně naplněné pračky plýtváme energií. V optimálně naplněné pračce by měl zůstat mezi prádlem a bubnem prostor, do kterého se vejde výška dlaně. K tomu používejte ekodrogerii bez škodlivých látek. Perte oblečení, až když je skutečně špinavé.",
          alignRight: false
        },
        {
          icon: "gift",
          title: "Darujte zážitky místo věcí",
          perex:
            "Darujte zážitky a služby, které nemají ekologickou stopu a nekradou prostor v domácnostech. Vzpomínky se uskladňují lépe a nezaberou tolik místa. Také nepotřebují balicí papír.",
          alignRight: true
        }
      ]
    };
  }
};
</script>
