<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex ">
      <p class="w-perex">
        <b>Re-use</b> znamená nevyhazovat a používat znova to, co spotřebováváme
        a nemůžeme zamítnout nebo zredukovat.
      </p>
      <img src="../../assets/images/reuse-people.svg" alt="reuse" class="ml-10 -mt-10 w-carousel-image" />
    </div>
    <!-- Sekce "Tipy" -->
    <div class="mb-6 -mt-8">
      <h3 class="mb-2 text-title">Tipy</h3>
      <p class="mb-6">
        K Zero Waste životu vede dlouhá cesta. Každá velká změna ale začíná
        malými krůčky. Tak znovupoužití lze rozdělit na několik základních
        kroků.
      </p>
      <carousel :per-page="1" navigationEnabled navigationNextLabel navigationPrevLabel>
        <slide v-for="(tip, index) in tipsData" :key="index" class="flex px-10 mb-4">
          <img
            :src="require(`../../assets/images/reuse/${tip.icon}.svg`)"
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
    <!-- Sekce "Výměny" -->
    <div class="mb-6">
      <h3 class="mb-2 text-title">Výměny</h3>
      <p class="mb-6">
        Jedním z nejdůležitějších kroků je nákup <b>opakovaně využitelných produktů</b>
        místo jednorázových. K mnoha produktů je možné najít znovupoužitelné
        alternativy, které v dlouhém období značně ušetří peněženku.
      </p>
      <div class="flex flex-wrap">
        <div
          v-for="(swap, index) in swapsData"
          :key="index"
          class="w-2/5 p-6 m-4 rounded shadow-lg verflow-hidden p"
        >
          <div class="flex items-center">
            <a :href="swap.link" target="_blank">
              <div class="w-20 h-20">
                <img :src="require(`../../assets/images/swaps/${swap.icon}.png`)" :alt="swap.title" />
              </div>
            </a>
            <div class="mb-2 ml-4 text-xl font-bold text-center">{{ swap.title }}</div>
          </div>
          <div>
            <div class="py-4">
              <p>{{ swap.perex }}</p>
            </div>
            <div class="flex justify-center">
              <a
                :href="swap.link"
                target="_blank"
                class="inline-block w-24 px-3 py-1 mr-2 text-sm font-semibold text-center bg-gray-200 rounded-full"
              >Koupit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Znovupoužití",
      tipsData: [
        {
          icon: "rental",
          title: "Půjčení místo nakupování",
          perex:
            "Není třeba všechno kupovat a není třeba ani všechno vlastnit. <b>Sdílení, půjčování, výměny</b>, to je cesta k udržitelnějšímu životu. Choďte do <b>knihovny</b> místo do knihkupectví. <b>Půjčujte si</b> oblečení, květiny, knihy, hračky, domácí potřeby."
        },
        {
          icon: "second-hand",
          title: "Second-hand a bazary",
          perex:
            "Než začnete nakupovat staré/nové věci, zkuste si udělat pořádek ve skříni a nepotřebné kusy <b>zrecyklovat, prodat</b> či <b>odnést na potřebná místa</b> (H&M, Marks & Spencer). <br>Nakupujte <b>z druhé ruky</b> vše, co můžete. <br>Nekupujte rychlou módu."
        },
        {
          icon: "purchase",
          title:
            "Darování nebo prodej",
          perex:
            "Nevyhazujte staré věci, ale <b>prodejte</b> je někomu dalšímu. A tak to dělejte se vším. To samé obráceně. Ne všechny použité věci jsou špatné. <br>K tomuto <b>koloběhu věcí</b> ideálně slouží <b>facebook Marketplace</b> nebo třeba aplikace <a href='https://www.vinted.cz/' target='_blank'><b>Vinted</b></a>"
        },
        {
          icon: "repair",
          title: "Oprava",
          perex:
            "Spousta lidí neumí opravovat poškozené různé věci. Proto vždy, když se něco pokazilo, kupují nové. Dnes je ale snazší a hlavně ekologičtější si nechávat <b>věci opravovat</b>. Např. skvělá služba je <a href='https://www.opravarna.cz/' target='_blank'><b>Opravárna</b></a>"
        },
        {
          icon: "reuse",
          alignRight: false,
          title:
            "Pro jiný účel",
          perex:
            "Využívejte věcí pro <b>jiný účel</b>, než pro který byly původně stvořeny. <br>Například používejte staré oblečení k čistění domácnosti. Není nic jednoduššího, než rozstříhat staré tričko a použít ho jako hadr."
        }
      ],
      swapsData: [
        {
          icon: "water",
          title: "Láhev na pití",
          perex:
            "Skvělým pomocníkem pro dodržování pitného režimu je láhev na vodu. Lahve mohou být skleněné, nerezové nebo plastové. Ze skla ale voda chutná nejlépe a navíc se udržuje mnohem lépe než plast, nepoškrábe se.",
          link: "https://www.econea.cz/lahve-na-vodu/"
        },
        {
          icon: "fruit-bag",
          title: "Pytlíky na ovoce a zeleninu",
          perex:
            "Ne vždy je nutné zabalovat ovoce nebo zeleninu do pytlíku. Ale pokud je třeba, tak raději použijte látkové pytlíky s utahovací šnůrkou. Budou sloužit dlouhé měsíce a zároveň chránit naši planetu před plastovou pohromou.",
          link: "https://www.econea.cz/sacky-na-nakup-ovoce-a-zeleniny/"
        },
        {
          icon: "food-bag",
          title: "Tašky na nákup",
          perex:
            "Odmítněte plastovou tašku! Noste si tašku svojí, i kdyby to měla být taška plastová. Už jen tímto krokem výrazně lze snížit svou produkci odpadu. Místo plastové tašky si můžete pořídit starou dobrou síťovku nebo plátěnku.",
          link: "https://www.econea.cz/nakupni-tasky-a-kosiky/"
        },
        {
          icon: "toothbrush",
          title: "Zubní kartáček",
          perex:
            "Klasické zubní kartáčky jsou zpravidla vyrobené z plastu. Za celý život člověk použije a vyhodí tím pádem hodně plastu, proto je lepší sáhnout po šetrnější alternativě z recyklovaného plastu či bioplastu nebo bambusu.",
          link: "https://www.econea.cz/zubni-kartacky/"
        },
        {
          icon: "lunch-box",
          title: "Nádoby na jídlo",
          perex:
            "Jídlo se dá pohodlně zabalit. K tomu je možné pořídit styové boxy z nerezu, recyklovaného plastu či bambusu.",
          link: "https://www.econea.cz/nadoby-a-obaly-na-svacinu-ci-obed/"
        },
        {
          icon: "coffee-cup",
          title: "Kelímky na kávu nebo čaj",
          perex:
            "Pokud si často kupujete kávu nebo čaj s sebou, lze pořídit krásný termohrnek a výrazně tak snížit produkci odpadu.",
          link:
            "https://www.econea.cz/znovupouzitelne-hrnky-na-kavu-a-caj-sebou/"
        }
      ]
    };
  }
};
</script>
