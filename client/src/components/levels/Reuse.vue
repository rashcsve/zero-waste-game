<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div v-if="whatIsIt || all" class="mb-6">
      <h3 class="mb-2">Co je znovupoužití?</h3>
      <div class="flex">
        <img src="../../assets/images/reuse.png" alt="reuse" class="w-24 h-24 mr-6" />
        <p>
          <b>Re-use</b> znamená nevyhazovat a používat znova to, co spotřebováváme a nemůžeme zamítnout nebo zredukovat.
        </p>
      </div>
    </div>
    <!-- Sekce "Tipy" -->
    <div v-if="tips || all" class="mb-6">
      <h3 class="mb-2">Tipy</h3>
      <p
        class="mb-6"
      >K Zero Waste životu vede dlouhá cesta. Každá velká změna ale začíná malými krůčky. Tak znovupoužití lze rozdělit na několik základních kroků.</p>
      <div v-for="(tip, index) in tipsData" :key="index" class="flex items-center mb-6">
        <img
          v-if="!tip.alignRight"
          :src="require(`../../assets/images/reuse/${tip.icon}.png`)"
          :alt="tip.icon"
          class="w-24 mr-4"
        />
        <div>
          <b>{{ tip.title }}</b>
          <div>
            {{ tip.perex }}
            <span v-if="tip.link">
              <a :href="tip.link.url" target="_blank">{{ tip.link.title }}</a>.
            </span>
          </div>
        </div>
        <img
          v-if="tip.alignRight"
          :src="require(`../../assets/images/reuse/${tip.icon}.png`)"
          :alt="tip.icon"
          class="w-24 ml-4"
        />
      </div>
    </div>
    <!-- Sekce "Výměny" -->
    <div v-if="swaps || all" class="mb-6">
      <h3 class="mb-2">Výměny</h3>
      <p
        class="mb-6"
      >Jedním z nejdůležitějších kroků je nákup opakovaně využitelných produktů místo jednorázových. K mnoha produktů je možné najít znovupoužitelné alternativy, které v dlouhém období značně ušetří peněženku.</p>
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
      whatIsIt: false,
      tips: false,
      swaps: false,
      all: true,
      tipsData: [
        {
          icon: "rental",
          alignRight: false,
          title: "Vypůjčování místo nakupování",
          perex:
            "Není třeba všechno kupovat a není třeba ani všechno vlastnit. Sdílení, půjčování, výměny, to je cesta k udržitelnějšímu životu. Choďte do knihovny místo do knihkupectví. Půjčujte si oblečení, květiny, knihy, hračky, domácí potřeby."
        },
        {
          icon: "second-hand",
          alignRight: true,
          title: "Nakupování již použitého v second-handech a bazarech",
          perex:
            "Než začnete nakupovat (staré) nové věci, zkuste si udělat pořádek ve skříni a nepotřebné kusy zrecyklovat, prodat či odnést na potřebná místa (H&M, Marks & Spencer). Nakupujte z druhé ruky vše, co můžete. Nekupujte rychlou módu."
        },
        {
          icon: "purchase",
          alignRight: false,
          title:
            "Shánění věcí z druhé ruky, ale naopak i navracení do oběhu a jejich darování nebo prodej",
          link: {
            title: "Vinted",
            url: "https://www.vinted.cz/"
          },
          perex:
            "Nevyhazujte staré věci, ale prodejte je někomu dalšímu. A tak to dělejte se vším. To samé obráceně. Ne všechny použité věci jsou špatné. K tomuto koloběhu věcí ideálně slouží facebook Marketplace nebo třeba aplikace "
        },
        {
          icon: "repair",
          alignRight: true,
          title: "Oprava",
          link: {
            title: "Opravárna",
            url: "https://www.opravarna.cz/"
          },
          perex:
            "Spousta lidí neumí opravovat poškozené různé věci. Proto vždy, když se něco pokazilo, kupují nové. Dnes je ale snazší a hlavně ekologičtější si nechávat věci opravovat. Např. skvělá služba je "
        },
        {
          icon: "reuse",
          alignRight: false,
          title:
            "Využití věcí pro jiný účel, než pro který byly původně stvořeny",
          perex:
            "Například používejte staré oblečení k čistění domácnosti. Není nic jednoduššího, než rozstříhat staré tričko a použít ho jako hadr."
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
