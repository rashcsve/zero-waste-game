<template>
  <main>
    <section class="container flex justify-around mx-auto">
      <div class="mt-12 w-hp">
        <h1 class="leading-none">{{ title }}</h1>
        <h3 class="mt-6 leading-tight" v-html="perex"></h3>
        <div class="flex items-center">
          <router-link
            :to="button.link"
            class="w-auto mt-8 text-lg font-normal button"
            >{{ button.title }}</router-link
          >
          <router-link
            :to="anchor.link"
            class="h-auto mt-8 ml-4 text-xl nav-link"
            >{{ anchor.title }}</router-link
          >
        </div>
      </div>
      <img src="../assets/images/homepage.svg" alt="hero image" />
    </section>
    <!-- Stripe -->
    <section class="my-20 bg-gray-400">
      <p class="py-20 mx-auto text-center text-white w-hp">{{ citation }}</p>
    </section>
    <!-- Info about Zero Waste -->
    <zero-waste />
    <!-- Stripe -->
    <section class="my-20 bg-yellow-400">
      <p class="py-20 mx-auto text-center w-hp" v-html="myCitation"></p>
    </section>
    <!-- Info about me -->
    <section class="container mx-auto mb-20" id="about">
      <main class="flex justify-between">
        <div class="mr-10">
          <h2>{{ about.title }}</h2>
          <p class="my-2">
            <i>{{ about.date }}</i>
          </p>
          <p class="my-2">{{ about.perexFirst }}</p>
          <p>{{ about.perexSecond }}</p>
          <p class="my-2">{{ about.questions }}</p>
          <p>{{ about.perexThird }}</p>
          <p class="my-2">{{ about.believe }}</p>
        </div>
        <img src="../assets/images/girl.svg" alt="girl about" />
      </main>
      <p
        class="mt-6 mb-2 text-lg"
        v-html="about.bachelor + ' ' + about.enjoy"
      ></p>
      <p class="my-2" v-html="about.feedback"></p>
      <p class="mb-8" v-html="about.me"></p>
    </section>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import ZeroWaste from "../components/ZeroWaste";

export default {
  name: "Home",
  components: {
    ZeroWaste
  },
  data() {
    return {
      title: "Nauč se základům Zero Waste",
      perex: "Snižme naši uhlíkovou stopu<br>a buďme ohleduplní k naší planetě",
      button: {
        title: "Chci zjistit, jak jsem na tom",
        link: "/game"
      },
      anchor: {
        title: "Co je Zero Waste?",
        link: "/#zero-waste"
      },
      citation:
        "Zero Waste je ojedinělý návod, jak svůj život přetvořit v jednodušší, radostnější a zodpovědnější bytí",
      myCitation:
        "Chci to jinak. Chci se naučit být rozumnější.<br>Chci vyčistit hlavu, své okolí a byt. Nechci vynášet odpadky každý den, nechci mít až tolik toho.<br>Chci se změnit.",
      about: {
        title: "O projektu",
        date: "2019, září",
        perexFirst:
          "“Mám hodně odpadu a nevím co s tím. Vidím, že jsou různé popelnice, začínám třídit, ale za chvíli si všímám, že nedělám to správně. Přírodní katastrofy, eko-nadšenci à la Greta, eko-obchody, pytlíky na ovoce a bambusové zubní kartáčky. Vzpomínky na moje dětství a slova babičky, která mě učila být skromná a pečlivá, opravovat, zašívat, znovu používat. Hodně nového oblečení, kosmetiky, dárků, které nepotřebuji a nepoužívám. Spousta krámů v bytě, chemie na policích a z toho všeho špatné svědomí.",
        perexSecond:
          "Nový život, noví lidé kolem mě a hromada myšlenek. Odpad není jen to, co dáváš do barevného kontejneru.",
        perexThird:
          "Není. Není možné žít bez odpadu a problémů, ale dá se snížit množství. Začít přemýšlet více o sobě a prostředí, ve kterém žijeme. Každý z nás je schopen na malý krůček, který je obrovským krokem pro vlastní budoucnost a celé lidstvo.",
        questions: "Zero Waste? Jakože žádný odpad? Je to možné?",

        believe: "Já tomu věřím.“",
        bachelor:
          "Projekt je moje <b>bakalářská práce</b> a zároveň první vlastní digitální dítě, do kterého jsem vložila svou duši, srdce a hodně lásky. Dělala jsem všechno sama, od vymýšlení ideje a analýzy přes psaní textů a kreslení až na vývoj.",
        enjoy:
          "Doufám, že si to užiješ a přinese ti to spoustu nových emocí a myšlenek.",
        feedback:
          "Ráda dostanu feedback, napiš mi třeba na <a href='https://www.facebook.com/profile.php?id=100010497007068' target='_blank' class='underline hover:text-yellow-500'>Facebook</a> do zpráv.",
        me: "Díky,<br>Svetlanka"
      }
    };
  },
  created() {
    this.setShowHomepageStatus(false);
    this.setGameStatus(false);
  },
  methods: {
    ...mapMutations(["setShowHomepageStatus", "setGameStatus"])
  }
};
</script>
