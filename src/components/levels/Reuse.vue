<template>
  <section v-if="showInfo">
    <h2>3. {{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex ">
      <main>
        <p class="mb-4 text-lg" v-html="mainIdea"></p>
        <p v-html="perex" class="my-4"></p>
      </main>
      <img
        src="../../assets/images/reuse-people.svg"
        alt="reuse"
        class="ml-10 -mt-10 w-carousel-image"
      />
    </div>
    <!-- Sekce "Výměny" -->
    <div class="mb-6">
      <h3 class="mb-2 text-title">Výměny</h3>
      <p class="mb-6">
        Jedním z nejdůležitějších kroků je nákup
        <b>opakovaně využitelných produktů</b>
        místo jednorázových. K mnoha produktů je možné najít znovupoužitelné
        alternativy, které v dlouhém období značně ušetří peněženku.
      </p>
      <div class="flex flex-wrap">
        <div v-for="(swap, index) in swapsData" :key="index" class="w-1/4 p-6">
          <div class="flex items-center justify-center">
            <a :href="swap.link" target="_blank">
              <div class="w-20 h-20 ">
                <img
                  :src="require(`../../assets/images/swaps/${swap.icon}.svg`)"
                  :alt="swap.title"
                />
              </div>
            </a>
          </div>
          <div>
            <div class="py-4 text-sm text-center">
              <p>{{ swap.perex }}</p>
            </div>
            <div class="flex justify-center">
              <a
                :href="swap.link"
                target="_blank"
                class="inline-block px-4 py-1 mr-2 text-sm font-semibold text-center text-white bg-gray-300 rounded-full hover:bg-gray-400"
                >{{ swap.title }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sekce "Tipy" -->
    <div class="mb-4">
      <h3 class="mb-2 text-title">Tipy</h3>
      <p class="mb-6">
        Je několik způsobů znovu používat věci
      </p>
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
            :src="require(`../../assets/images/reuse/${tip.icon}.svg`)"
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
  <section v-else class="flex flex-col items-center">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-title">
      {{ info }}
    </h2>
    <p>{{ whatToDo }}</p>
    <div class="mt-8">
      <img
        src="../../assets/images/third.svg"
        alt="first level"
        class="text-center"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Reuse",
      info: "Vítám na třetí úrovni!",
      whatToDo: "Čekám na tebe tam vpravo ;)",
      mainIdea:
        "Reuse znamená <b>nevyhazuj a používej znova to, co spotřebováváš a nemůžeš zamítnout nebo zredukovat</b>.",
      perex:
        "Zakoupená věc by měla sloužit dlouho a být vhodná pro různé účely. A pokud věc prostě přestane být potřebná, může být věnována jiným lidem. Tím ušetříš zdroje a energie.",
      tipsData: [
        {
          icon: "rental",
          title: "Půjčení místo nakupování",
          perex:
            "Není třeba všechno kupovat a není třeba ani všechno vlastnit. <b>Sdílení, půjčování, výměny</b>, to je cesta k udržitelnějšímu životu. Choď do <b>knihovny</b> místo do knihkupectví. <b>Půjčuj si</b> oblečení, květiny, knihy, hračky, domácí potřeby."
        },
        {
          icon: "second-hand",
          title: "Second-hand a bazary",
          perex:
            "Než začneš nakupovat staré/nové věci, zkus si udělat pořádek ve skříni a nepotřebné kusy <b>zrecyklovat, prodat</b> či <b>odnést na potřebná místa</b> (H&M, Marks & Spencer). <br>Nakupuj <b>z druhé ruky vše, co můžeš. <br>Nekupuj rychlou módu."
        },
        {
          icon: "purchase",
          title: "Darování nebo prodej",
          perex:
            "Nevyhazuj staré věci, ale <b>prodej</b> je někomu dalšímu. A tak to dělej se vším. To samé obráceně. Ne všechny použité věci jsou špatné. <br>K tomuto <b>koloběhu věcí</b> ideálně slouží <b>facebook Marketplace</b> nebo třeba aplikace <a href='https://www.vinted.cz/' target='_blank'><b>Vinted</b></a>"
        },
        {
          icon: "repair",
          title: "Oprava",
          perex:
            "Spousta lidí neumí opravovat poškozené různé věci. Proto vždy, když se něco pokazilo, kupují nové. Dnes je ale snazší a hlavně ekologičtější si nechávat <b>věci opravovat</b>. Např. skvělá služba je <a href='https://www.opravarna.cz/' target>Opravárna</b></a>"
        },
        {
          icon: "reuse",
          alignRight: false,
          title: "Pro jiný účel",
          perex:
            "Využívej věcí pro <b>jiný účel</b>, než pro který byly původně stvořeny. <br>Například používej staré oblečení k čistění domácnosti. Není nic jednoduššího, než rozstříhat staré tričko a použít ho jako hadr."
        }
      ],
      swapsData: [
        {
          icon: "water",
          title: "Láhev na pití",
          perex: "Lahve mohou být skleněné, nerezové nebo plastové",
          link: "https://www.zerowastelife.cz/lahve-na-vodu/"
        },
        {
          icon: "food-bag",
          title: "Taška na nákup",
          perex: "Stará dobrá síťovka nebo plátěnka místo plastové tašky",
          link: "https://www.zerowastelife.cz/nakupni-tasky/"
        },
        {
          icon: "lunch-box",
          title: "Nádoba na jídlo",
          perex: "Stylové boxy z nerezu, recyklovaného plastu či bambusu",
          link: "https://www.zerowastelife.cz/nadoby-a-obaly-na-jidlo/"
        },
        {
          icon: "coffee-cup",
          title: "Hrnek",
          perex: "Krásný hrnek na čaj a kávu místo jednorázového kelímku",
          link: "https://www.zerowastelife.cz/hrnky-a-kelimky/"
        }
      ]
    };
  },
  computed: {
    showInfo() {
      return this.$store.state.levels.third.show;
    }
  }
};
</script>
