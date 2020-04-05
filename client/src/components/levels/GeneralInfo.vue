<template>
  <section>
    <h2>{{ title }}</h2>
    <div>
      <!-- Sekce "Co je Zero Waste" -->
      <div class="mb-10">
        <p>
          <b>Zero Waste</b> (česky “život bez odpadů”) je
          <b>soubor zásad nebo životní styl</b> zaměřený na předcházení a
          <b>minimalizaci vzniku odpadů</b> a znovu používání zdrojů.
        </p>
        <p class="mt-4 main-idea">
          <b>Hlavní cíl</b> je minimalizace vzniku odpadu, znovu používání
          zdrojů
        </p>
      </div>
      <!-- Sekce "5R" -->
      <div>
        <h3 class="mb-2 text-title">5R nebo 5Z</h3>
        <carousel
          :per-page="1"
          navigationEnabled
          navigationNextLabel=""
          navigationPrevLabel=""
        >
          <slide
            class="flex px-10 mb-4"
            v-for="item in fiveRData"
            :key="item.icon"
          >
            <section>
              <h4>{{ item.title }}</h4>
              <p class="mb-4 font-bold">{{ item.mainIdea }}</p>
              <span>{{ item.perex }}</span>
            </section>
            <img
              :src="require(`../../assets/images/${item.icon}.png`)"
              :alt="item.cion"
              class="h-40 ml-4"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Zero Waste",
      fiveRData: [
        {
          icon: "refuse",
          title: "Refuse nebo Zamítnout",
          mainIdea: "Zamítnout, co nepotřebujeme.",
          perex:
            "Zamýšlet se nad tím, jestli nějaké nové věci skutečně potřebujeme a vybírat ze všech variant nejvhodnější. Např. nekupovat nové oblečení nebo elektroniku každou sezónu."
        },
        {
          icon: "reduce",
          title: "Reduce nebo Zredukovat",
          mainIdea: "Zredukovat, co potřebujeme a nemůžeme zamítnout.",
          perex:
            "Věci, které jsou opravdu nutné, bychom měli kupovat v rozumném počtu. Měli bychom preferovat bezobalové zboží nebo produkty při nákupech. Kupovat jen tolik jídla, kolik můžeme sníst bez vyhazování. Zredukovat je také možné spotřebu energií (elektřiny, plynu, vody apod)."
        },
        {
          icon: "reuse",
          title: "Reuse nebo Znovupoužít",
          mainIdea:
            "Znovupoužít, co spotřebováváme a nemůžeme zamítnout nebo zredukovat.",
          perex:
            " Vyhýbat se jednorázovým produktům a mít znovupoužitelná řešení. Např. místo jednorázových kelímku používat vlastní kelímek ze skla, místo igelitových sáčků na ovoce a zeleninu mít látkové. Více nakupovat věci z druhé ruky a půjčovat."
        },
        {
          icon: "recycle",
          title: "Recycle nebo Zrecyklovat",
          mainIdea:
            "Zrecyklovat, co nemůžeme zamítnout, zredukovat nebo znovupoužít.",
          perex:
            "K tomu slouží především barevné kontejnery na třídění odpadu, které lze snadno najít ve městě. Dávat pozor na elektrické spotřebiče, pro které existují speciální místa."
        },
        {
          icon: "rot",
          title: "Rot nebo Zkompostovat",
          mainIdea: "Zkompostovat zbytek.",
          perex:
            "Veškerý bioodpad z naší domácnosti by měl stát kompostem. Ovoce a zeleninu od ledna roku 2020 můžeme kompostovat i v Praze ve speciálních veřejných kompostérech. Taky je možné si založit vlastní kompost na zahrádce."
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
