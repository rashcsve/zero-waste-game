<template>
  <section>
    <h2>2. {{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex mt-4 mb-6">
      <main>
        <p class="mb-4 text-lg" v-html="mainIdea"></p>
        <p class="main-idea" v-html="question"></p>
        <p v-html="perex" class="my-4"></p>
      </main>
      <img src="../../assets/images/reduce.svg" alt="reduce" />
    </div>
    <!-- Sekce "Tipy" -->
    <div class="mt-16 mb-6">
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Reduce",
      mainIdea:
        "Reduce znamená <b>zredukuj nebo omez, co potřebuješ a nemůžeš zamítnout</b>.",
      perex: "Snížit spotřebu lze v jakékoli oblasti života.",
      question: "Základní otázkou je <b>“opravdu potřebuji tolik?”</b>",
      tipsData: [
        {
          icon: "observe",
          title: "Pozoruj svůj odpad",
          perex:
            "<b>Dívej se na obsah svého koše</b> a postupně <b>eliminuj</b> výrobky.<br>Zjisti, co vyhazuješ nejvíce."
        },
        {
          icon: "gift",
          title: "Daruj zážitky místo věcí",
          perex:
            "<b>Daruj zážitky a služby</b>, které nemají ekologickou stopu a nekradou prostor v domácnostech. <b>Vzpomínky</b> se uskladňují lépe a nezaberou tolik místa. Také nepotřebují balicí papír."
        },
        {
          icon: "laundry",
          title: "Pračku naplňuj vždy celou",
          perex:
            "Praním nedostatečně naplněné pračky plýtváme energií. V optimálně naplněné pračce by měl zůstat mezi prádlem a bubnem prostor, do kterého <b>se vejde výška dlaně</b>. K tomu používej <b>ekodrogerii bez škodlivých látek</b>. Per oblečení, až když je <b>skutečně špinavé</b>."
        },
        {
          icon: "walk",
          title: "Choď pěšky",
          perex:
            "Pokud máš auto, rozmysli si předem, kdy ho použiješ a kdy <b>necháš stát v garáži</b>. Zkus auto <b>sdílet</b>. Zkoušej alternativy - <b>spolujízdu, městskou dopravu, na kole</b> nebo <b>pěšky</b>. "
        }
      ]
    };
  }
};
</script>
