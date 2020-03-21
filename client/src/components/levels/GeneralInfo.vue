<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co je Zero Waste" -->
    <div v-if="whatIsIt || all" class="mb-6">
      <h3 class="mb-2">Co je Zero Waste?</h3>
      <div class="flex">
        <img src="../../assets/images/zero-waste.png" alt="zero-waste" />
        <p>
          "
          <b>Zero Waste</b> (česky “život bez odpadů”) je
          <i>soubor zásad nebo životní styl zaměřený na předcházení a minimalizaci vzniku odpadů</i> a znovu používání zdrojů.”
          <br />
          <br />
          <b>Hlavní cíl</b> je
          <i>minimalizace vzniku odpadu</i>, znovu používání zdrojů.
        </p>
      </div>
      <p>
        Podle
        <a
          href="https://ekolist.cz/cz/zpravodajstvi/zpravy/produkce-odpadu-v-cr-roste-problemem-je-skladkovani"
          target="_blank"
        >ecolist</a>
        celková produkce komunálních odpadů za rok 2018 v České republice meziročně vzrostla na zhruba
        <i>5,782 milionu tun</i>.
      </p>
    </div>
    <!-- Sekce "5R" -->
    <div v-if="fiveR || all" class="mb-6">
      <h3 class="mb-2">5R nebo 5Z</h3>
      <ul>
        <li class="flex items-center mb-4" v-for="item in fiveRData" :key="item.icon">
          <img
            v-if="!item.alignRight"
            :src="require(`../../assets/images/${item.icon}.png`)"
            :alt="item.cion"
            class="w-24 h-24 mr-4"
          />
          <p>
            <b>{{ item.title }}</b>
            <br />
            <i>{{ item.mainIdea }}</i>
            {{ item. perex }}
          </p>
          <img
            v-if="item.alignRight"
            :src="require(`../../assets/images/${item.icon}.png`)"
            :alt="item.cion"
            class="w-24 h-24 ml-4"
          />
        </li>
      </ul>
    </div>
    <!-- Sekce "Výhody" -->
    <div v-if="advantages || all" class="mb-6">
      <h3 class="mb-2">Výhody</h3>
      <div class="flex">
        <div
          class="flex flex-col items-center w-1/3"
          v-for="(advantage, index) in advantagesData"
          :key="index"
        >
          <div class="flex w-24 h-24">
            <img
              :src="require(`../../assets/images/${advantage.icon}.png`)"
              :alt="advantage.icon"
              class="mb-2"
            />
          </div>
          <p>
            <b>{{ advantage.title }}</b>
          </p>
          <ul class="p-2">
            <li class="text-center" v-for="item in advantage.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Obecné Informace",
      whatIsIt: false,
      fiveR: false,
      advantages: false,
      all: true,
      fiveRData: [
        {
          icon: "refuse",
          title: "Refuse nebo Zamítnout",
          mainIdea: "Zamítnout, co nepotřebujeme.",
          perex:
            "Zamýšlet se nad tím, jestli nějaké nové věci skutečně potřebujeme a vybírat ze všech variant nejvhodnější. Např. nekupovat nové oblečení nebo elektroniku každou sezónu.",
          alignRight: false
        },
        {
          icon: "reduce",
          title: "Reduce nebo Zredukovat",
          mainIdea: "Zredukovat, co potřebujeme a nemůžeme zamítnout.",
          perex:
            "Věci, které jsou opravdu nutné, bychom měli kupovat v rozumném počtu. Měli bychom preferovat bezobalové zboží nebo produkty při nákupech. Kupovat jen tolik jídla, kolik můžeme sníst bez vyhazování. Zredukovat je také možné spotřebu energií (elektřiny, plynu, vody apod).",
          alignRight: true
        },
        {
          icon: "reuse",
          title: "Reuse nebo Znovupoužít",
          mainIdea:
            "Znovupoužít, co spotřebováváme a nemůžeme zamítnout nebo zredukovat.",
          perex:
            " Vyhýbat se jednorázovým produktům a mít znovupoužitelná řešení. Např. místo jednorázových kelímku používat vlastní kelímek ze skla, místo igelitových sáčků na ovoce a zeleninu mít látkové. Více nakupovat věci z druhé ruky a půjčovat.",
          alignRight: false
        },
        {
          icon: "recycle",
          title: "Recycle nebo Zrecyklovat",
          mainIdea:
            "Zrecyklovat, co nemůžeme zamítnout, zredukovat nebo znovupoužít.",
          perex:
            "K tomu slouží především barevné kontejnery na třídění odpadu, které lze snadno najít ve městě. Dávat pozor na elektrické spotřebiče, pro které existují speciální místa.",
          alignRight: true
        },
        {
          icon: "rot",
          title: "Rot nebo Zkompostovat",
          mainIdea: "Zkompostovat zbytek.",
          perex:
            "Veškerý bioodpad z naší domácnosti by měl stát kompostem. Ovoce a zeleninu od ledna roku 2020 můžeme kompostovat i v Praze ve speciálních veřejných kompostérech. Taky je možné si založit vlastní kompost na zahrádce.",
          alignRight: false
        }
      ],
      advantagesData: [
        {
          title: "Finanční",
          icon: "money",
          items: [
            "Snižuje bezvýznamné nakupování.",
            "Zabraňuje potravinovému odpadu.",
            "Ušetří peníze."
          ]
        },
        {
          title: "Osobní",
          icon: "personal",
          items: [
            "Vede k zdravějšímu životnímu stylu.",
            "Vytváří nové a lepší návyky.",
            "Pomáhá zhubnout."
          ]
        },
        {
          title: "Životní",
          icon: "planet",
          items: [
            "Podporuje snížení globálního oteplování.",
            "Pomáhá šetřit zdroje.",
            "Snižuje znečištění."
          ]
        }
      ]
    };
  }
};
</script>
