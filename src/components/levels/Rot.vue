<template>
  <section v-if="showInfo || !isGame">
    <h2>5. {{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div class="flex mt-4 mb-6">
      <main>
        <p class="mb-4 text-lg" v-html="mainIdea"></p>
        <p v-html="perex" class="my-4"></p>
        <p v-html="anotherPerex" class="my-4"></p>
      </main>
      <img src="../../assets/images/rot.svg" alt="rot" />
    </div>
    <!-- Sekce "Tipy" -->
    <div class="flex flex-wrap justify-around my-16">
      <div
        class="flex-col items-center w-1/2 p-6 my-4 rounded shadow-lg verflow-hidden"
        v-for="item in data"
        :key="item.title"
      >
        <!-- <img
        :src="require(`../assets/images/${item.icon}.svg`)"
        :alt="item.icon"
        class="h-40 ml-4"
      /> -->
        <!-- TODO Add rot images  -->
        <h3 class="mt-4 text-2xl font-bold leading-tight text-center">
          {{ item.title }}
        </h3>
        <div v-for="product in item.products" :key="product">
          <p class="mt-2 leading-none text-center">{{ product }}</p>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="flex flex-col items-center">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-title">
      {{ info }}
    </h2>
    <p>{{ whatToDo }}</p>
    <div class="mt-8">
      <img
        src="../../assets/images/last.svg"
        alt="first level"
        class="text-center"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Rot",
      info: "Vítám na poslední úrovni!",
      whatToDo: "Naposledy se můžeš pobavit se mnou tam vpravo :)",
      mainIdea: "Rot znamená <b>Kompostuj</b>.",
      perex:
        "Bioodpad nechej zetlít na kompostu a <b>vrať přírodě živiny</b>, aby měla z čeho plodit a zelenat se. Kromě toho <b>ulevíš i svému rozpočtu</b>, protože výrazně snížíš množství černých popelnic a poplatků za ně.",
      anotherPerex:
        "Založ si vlastní kompost nebo najdi komunitní komposty ve městě.",
      data: [
        {
          icon: "can-compost",
          title: "Co můžeš kompostovat?",
          products: [
            "Slupky",
            "Čajové sáčky",
            "Kávová sedlina",
            "Vaječné skořápky",
            "Zelenina či ovoce"
          ]
        },
        {
          icon: "cannot-compost",
          title: "Co nemůžeš kompostovat?",
          products: ["Kosti", "Maso", "Kávová sedlina", "Mléčné výrobky"]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" }),
    showInfo() {
      return this.$store.state.levels.last.show;
    }
  }
};
</script>
