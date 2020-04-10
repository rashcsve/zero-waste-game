<template>
  <section v-if="showInfo || !isGame">
    <h2>4. {{ title }}</h2>
    <div class="mt-4 mb-6">
      <p class="mb-4 text-lg" v-html="mainIdea"></p>
      <p>
        Recyklace je na čtvrtém místě ve stupnici 5R. V tomto stylu života nejde
        pouze o to začít se zajímat o obsah svého koše a začít více recyklovat.
      </p>
      <p class="my-4 main-idea">
        Recyklace odpadu se skládá ze dvou fází -
        <b>třídění odpadu a samotná recyklace</b>
      </p>
      <p>
        Jakmile spotřebuješ obsah produktu nebo ti doslouží, tak ho vyhodíš.
        Tohle je proces třídění. Recyklace odpadu je pak jakýmkoli způsobem
        využití odpadů, díky němuž je odpad znovu zpracován na výrobky, příp.
        materiály či látky. Cílem recyklace je získat druhotnou surovinu, kterou
        můžou použít k výrobě nových produktů a v některých případech tak úplně
        nebo zcela nahrazovat primární suroviny.
      </p>
      <div class="flex my-4">
        <p>
          Principem Zero Waste však není pouze více recyklovat. Naopak.
          Recyklace nestačí. <b>Žádný materiál se nedá recyklovat nekonečně</b>,
          některý více, některý méně, ale vždy u toho dochází ke ztrátám a
          životnost každého materiálu jednou skončí.
        </p>
        <img
          src="../../assets/images/recycle.svg"
          alt="recycle"
          class="h-40 -mt-12"
        />
      </div>
      <p class="my-4 main-idea">
        <b>Recyklace nechrání životní prostředí</b>, ale přispívá k menší míře
        jeho poškozování
      </p>
    </div>
    <!-- Sekce "Třídění a kontejnery" -->
    <div class="mb-8">
      <h3 class="mb-2 text-title">Třídění</h3>
      <carousel
        :per-page="1"
        navigationEnabled
        navigationNextLabel=""
        navigationPrevLabel=""
      >
        <slide v-for="item in containersData" :key="item.title">
          <recycle-container :container="item" />
        </slide>
      </carousel>
    </div>
    <!-- Sekce "Mapa" -->
    <div>
      <h3 class="mb-4 text-title">Mapa tříděného odpadu</h3>
      <iframe class="w-full mb-6 h-map" :src="mapLink"></iframe>
    </div>
  </section>
  <section v-else class="flex flex-col items-center">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-title">
      {{ info }}
    </h2>
    <p>{{ whatToDo }}</p>
    <div class="mt-8">
      <img
        src="../../assets/images/fourth.svg"
        alt="first level"
        class="text-center"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import RecycleContainer from "../RecycleContainer";
export default {
  components: {
    RecycleContainer
  },
  data() {
    return {
      title: "Recyklace",
      info: "Vítám na čtvrté úrovni!",
      whatToDo: "Co dělat dál zjistíš v boxíku vpravo ;)",
      mainIdea:
        "Recykluj to, <b>co nejde odmítnout, zredukovat a znovu využít</b>.",
      containers: false,
      mapLink: "https://ksnko.praha.eu/map-separated/",
      containersData: [
        {
          color: "yellow",
          image: "plastic",
          title: "Plast",
          perex:
            "Plast je umělá hmota. V průměru se globálně údajně zrecykluje necelých 30 % plastových odpadů.",
          whatToSort: [
            "<b>PET lahve</b>, <b>polystyren</b>.",
            "<b>Igelitové tašky</b>, sáčky a fólie.",
            "<b>Obaly</b> od <b>mycích a čisticích prostředků</b>.",
            "<b>Kelímky</b> od jogurtů, krémů apod.",
            "<b>Obaly od šamponů</b>, sprchových gelů, tekutých mýdel."
          ],
          howToSort: [
            "<b>Umýt</b>.",
            "<b>Odstranit</b> z PET lahví <b>víčko</b>.",
            "<b>Odstranit</b> jiné, než PET <b>etikety</b> (například PVC fólii s potiskem navlečenou na lahev).",
            "Odstranit jiné plastové komponenty.",
            "<b>Sešlápnout</b>."
          ],
          notToSort: [
            "<b>Celofán</b>, <b>zubní kartáčky</b>.",
            "Těsnění, <b>žvýkačky</b>.",
            "<b>Hnědé PETky od piva</b>.",
            "Molitan, guma, lino, plexisklo.",
            "Bioplasty.",
            "Obaly značně znečištěné od nebezpečných chemikálií."
          ]
        },
        {
          color: "blue-500",
          image: "paper",
          title: "Papír",
          perex:
            "Papír se vyrábí relativně jednoduše z vláken celulózy. Podle laboratorních testů nelze papír recyklovat více než 7x.",
          whatToSort: [
            "<b>Krabice</b>, <b>kartony</b>, papírové části obalů, kancelářský <b>papír</b>, sešity.",
            "Katalogy, <b>noviny</b>, <b>časopisy</b>, knihy.",
            "<b>Papírové krabičky</b> od zubních past, apod.",
            "Reklamní <b>letáky</b> a další tiskoviny.",
            "<b>Obaly od potravin</b> (mouka, cukr)."
          ],
          howToSort: [
            "Není třeba odstraňovat kovové spony.",
            "Z obálek <b>netřeba vydolovávat plastová okénka</b>.",
            "Krabice <b>rozložit</b> nebo <b>sešlápnout</b>.",
            "<b>Dokumenty</b>, které obsahují vaše osobní data, vždy <b>roztrhovat</b>."
          ],
          notToSort: [
            "<b>Plata od vajec</b>, <b>ruličky</b> od toaletního papíru a utěrek.",
            "Hygienické <b>vložky</b>, <b>toaletní papír</b>, papírové <b>kapesníčky</b>, <b>plenky</b>.",
            "Silně znečištěný papír (od barev, lepidel, mastnoty, krve).",
            "Použité vlhké papírové utěrky."
          ]
        },
        {
          color: "green",
          image: "glass",
          title: "Sklo",
          perex:
            "Z hlediska tzv. ekologičnosti je sklo v současnosti optimální obalový materiál. Nejmenší zlo, řečeno jinak.",
          whatToSort: [
            "Skleněné obaly od léků.",
            "Tabulové <b>sklo</b>, <b>sklenice</b>.",
            "<b>Lahve z barevného skla</b> (od piva, vína, limonád).",
            "<b>Čiré průhledné lahve</b>.",
            "Zavařovací sklenice a skleněné nádoby z domácnosti"
          ],
          howToSort: [
            "<b>Není třeba odstraňovat</b> etikety ani kovová víčka.",
            "<b>Mezi bílé sklo se nesmí dostat sklo barevné!</b>"
          ],
          notToSort: [
            "<b>Varné sklo</b>.",
            "<b>Keramiku, porcelán</b>.",
            "Autosklo, drátované sklo.",
            "<b>Žárovky</b>, výbojky a zářivky.",
            "<b>Zrcadla</b>, plexisklo, sexysklo.",
            "<b>Obrazovky</b> monitorů, televizí a různé <b>displeje</b>."
          ]
        },
        {
          color: "gray",
          image: "metal",
          title: "Kovy",
          perex:
            "Kov je železo a ocel, těžké kovy a drahé kovy. Vše  je nutné odevzdávat na sběrný dvůr nebo do kontejnerů na drobný kovový odpad.",
          whatToSort: [
            "Kovové tuby, <b>alobal</b>, kovové zátky, hřebíky, <b>šroubky</b>, <b>kancelářské sponky</b>",
            "Drobný kovový odpad - <b>nápojové plechovky</b>, <b>konzervy</b>, drobné kovové předměty."
          ],
          howToSort: [
            "Vše železné, kovové a drahokovové je nutné odevzdávat na <b>sběrný dvůr</b>.",
            "Jen namátkou a pro inspiraci: kovové konstrukce, traverzy, armatury, účka, rámy jízdních kol, kočárků, plechy, kryty, výrobky ze slitin kovů (dural, mosaz, bronz)."
          ],
          notToSort: [
            "<b>Aerosoly</b>",
            "Tlakové nádoby od kosmetiky (<b>deodoranty</b>, <b>pěny na holení</b>)"
          ]
        },
        {
          color: "red",
          image: "electro",
          title: "Elektroodpad",
          perex:
            "Elektroodpad je všechno, co má něco společného s elektřinou. Jsou to elektrospotřebiče - malé, velké i obrovské. Recyklují se jen některé materiály, které elektroodpad obsahuje.",
          whatToSort: [
            "Vše, co ke svému provozu <b>potřebovalo elektrickou energii nebo ji vodí</b> (<b>kabely</b>).",
            "Velké spotřebiče odvážíme na sběrný dvůr popřípadě je vracíme prostřednictvím zpětného odběru.",
            "Elektroodpad se nerecykluje."
          ]
        },
        {
          color: "brown",
          image: "bio",
          title: "Bioodpad",
          perex:
            "Jsou to zbytky z kuchyně nebo veřejného (či neveřejného) stravování. Všechen odpad biologického původu.",
          whatToSort: [
            "To, co <b>oloupete, okrájíte, nesníte</b> nebo na co nemáte chuť.",
            "Posekaná <b>tráva</b>, uřezané <b>větve, dřevo</b> a <b>zbytky</b> ze zemědělské výroby"
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({ isGame: "getGameStatus" }),
    showInfo() {
      return this.$store.state.levels.fourth.show;
    }
  }
};
</script>
