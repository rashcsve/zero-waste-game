<template>
  <section id="zero-waste" class="container mx-auto">
    <header class="flex">
      <img src="../assets/images/men.svg" alt="men" />
      <div class="ml-8">
        <h2>{{ title }}</h2>
        <div class="my-2">
          <p>
            <b>Zero Waste</b> (česky “život bez odpadů”) je
            <b>soubor zásad nebo životní styl</b> který vyžaduje přijmutí
            zodpovědnosti za své nákupy a nakládání s odpadky.
          </p>
          <p class="my-8 main-idea">
            Hlavní cíl je <b>minimalizace vzniku odpadu</b>, znovu používání
            zdrojů,<br />
            přiblížit se té nule co nejvíce
          </p>
          <p>
            “Zero Waste není trend, to je nutnost, v budoucnu budeme muset
            všichni být Zero Waste. Naše zacházení s odpady a zároveň i s
            materiály a surovinami není do budoucna udržitelné. Takhle to prostě
            nemůže být věčně.” -
            <i>Bea Johnson, autorka knihy Domácnost bez odpadu</i>
          </p>
        </div>
      </div>
    </header>
    <!-- Sekce "5R" -->
    <div class="flex flex-wrap items-center justify-around my-16">
      <div
        class="flex flex-col justify-center p-6 w-perex verflow-hidden h-r-box"
      >
        <h5 class="mb-2 text-2xl font-bold">5R nebo 5Z</h5>
        <p>
          Podle Bea Johnson,
          <br />
          autorky knihy
          <a
            href="https://www.databazeknih.cz/knihy/domacnost-bez-odpadu-322720"
            target="_blank"
            class="italic text-center"
          >
            Domácnost bez odpadu</a
          >, <br /><b>Zero Waste se řídí pěti pravidly</b>,<br />tzv. 5R nebo 5Z
        </p>
        <router-link :to="button.link" class="mt-4 button">{{
          button.title
        }}</router-link>
      </div>
      <div
        class="flex flex-col items-center p-6 my-4 rounded shadow-lg w-perex h-r-box verflow-hidden"
        v-for="item in fiveRData"
        :key="item.icon"
      >
        <img
          :src="require(`../assets/images/${item.icon}.svg`)"
          :alt="item.cion"
          class="h-40 ml-4"
        />
        <h3 class="mt-4 leading-tight text-center">{{ item.title }}</h3>
        <p class="mt-2 text-center">{{ item.mainIdea }}</p>
      </div>
    </div>
    <router-link :to="button.link" class="mx-auto mb-16 button"
      >Spustit hru</router-link
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Co je Zero Waste",
      button: {
        title: "Zjistit více",
        link: "/game"
      },
      fiveRData: [
        {
          icon: "refuse",
          title: "Refuse nebo Zamítnout",
          mainIdea: "Zamítni, co nepotřebuješ"
        },
        {
          icon: "reduce",
          title: "Reduce nebo Zredukovat",
          mainIdea: "Zredukuj, co potřebuješ a nemůžeš zamítnout"
        },
        {
          icon: "reuse",
          title: "Reuse nebo Znovupoužít",
          mainIdea:
            "Znovupoužij, co spotřebováváš a nemůžeš zamítnout nebo zredukovat"
        },
        {
          icon: "recycle",
          title: "Recycle nebo Zrecyklovat",
          mainIdea:
            "Zrecykluj, co nemůžš zamítnout, zredukovat nebo znovupoužít"
        },
        {
          icon: "rot",
          title: "Rot nebo Zkompostovat",
          mainIdea: "Zkompostuj zbytek"
        }
      ]
    };
  }
};
</script>
