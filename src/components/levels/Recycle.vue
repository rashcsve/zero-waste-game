<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="mb-10">
      <p>
        V tomto stylu života nejde pouze o to začít se zajímat o obsah svého
        koše a začít více recyklovat. Recykluje se až to, co nejde odmítnout,
        zredukovat a znovu využít.
      </p>
      <p class="my-4 main-idea">
        Recyklace odpadu se skládá ze dvou fází -
        <b>třídění odpadu a samotná recyklace</b>
      </p>
      <p>
        Jakmile člověk spotřebuje obsah produktu nebo mu doslouží, tak ho vyhodí
        doma do koše nebo do boxů, krabic či tašek na tříděný odpad. Tohle je
        proces třídění. Recyklace odpadu je pak jakýmkoli způsobem využití
        odpadů, díky němuž je odpad znovu zpracován na výrobky, příp. materiály
        či látky. Cílem recyklace je získat druhotnou surovinu, kterou můžeme
        použít k výrobě nových produktů a v některých případech tak úplně nebo
        zcela nahrazovat primární suroviny.
      </p>
      <div class="flex my-4">
        <p>
          Principem Zero Waste však není pouze více recyklovat, jak by se mohli
          někteří domnívat. Naopak. Recyklace nestačí. Recyklace je pouhou
          náplastí. Vytvoříme odpad a potom ho zrecyklujeme. Jedná se o snahu
          řešit již vzniklý problém, ale často se stává omluvou pro naší
          spotřebu a produkci odpadů. „Recykluji, tak dělám to nejlepší pro
          planetu, co můžu. Tečka.“
          <br /><br /><b>Žádný materiál se ale nedá recyklovat nekonečně</b>,
          některý více, některý méně, ale vždy u toho dochází ke ztrátám a
          životnost každého materiálu jednou skončí.
        </p>
        <img src="../../assets/images/recycle.svg" alt="recycle" class="h-40" />
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
</template>

<script>
import RecycleContainer from "../RecycleContainer";
export default {
  components: {
    RecycleContainer
  },
  data() {
    return {
      title: "Recyklace",
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
            "<b>PET lahve</b>, tuhý a obalový <b>polystyren</b>.",
            "<b>Igelitové tašky</b>, sáčky a fólie.",
            "<b>Obaly</b> od <b>mycích a čisticích prostředků</b>.",
            "<b>Kelímky</b> od jogurtů, pomazánek, margarínů, krémů.",
            "<b>Obaly od šamponů</b>, sprchových gelů, tekutých mýdel.",
            "<b>Plastové lahve</b> od mléčných nápojů i samotného mléka."
          ],
          howToSort: [
            "<b>Umýt</b>.",
            "<b>Odstranit</b> z PET lahví <b>víčko</b>.",
            "<b>Odstranit</b> jiné, než PET <b>etikety</b> (například PVC fólii s potiskem navlečenou na lahev).",
            "Odstranit jiné plastové komponenty.",
            "<b>Sešlápnout</b>."
          ],
          notToSort: [
            "<b>Celofán</b>.",
            "<b>Zubní kartáčky</b>.",
            "Těsnění, <b>žvýkačky</b>.",
            "<b>Hnědé PETky od piva</b>.",
            "Molitan, guma, lino, plexisklo.",
            "Bioplasty — ty se většinou recyklovat nedají.",
            "Obaly značně znečištěné od nebezpečných chemikálií."
          ]
        },
        {
          color: "blue",
          image: "paper",
          title: "Papír",
          perex:
            "Papír se vyrábí relativně jednoduše z vláken celulózy. Podle laboratorních testů nelze papír recyklovat více než 7x.",
          whatToSort: [
            "<b>Krabice</b>, <b>kartony</b>, lepenky, papírové části obalů.",
            "Katalogy, <b>noviny</b>, <b>časopisy</b>, knihy, brožury",
            "Vnější <b>papírové krabičky</b> od zubních past, apod.",
            "Reklamní <b>letáky</b> a další tiskoviny.",
            "Kancelářský <b>papír</b>, sešity, bloky, diáře.",
            "<b>Obaly od potravin</b> (mouka, cukr, obaly od čajových sáčků)."
          ],
          howToSort: [
            "Není třeba odstraňovat kovové spony, odstraňují se pomocí magnetů během zpracování.",
            "Z obálek <b>netřeba vydolovávat plastová okénka</b>.",
            "Krabice <b>rozložit</b> nebo <b>sešlápnout</b>.",
            "<b>Dokumenty</b> jako bankovní výpisy či jiné, které obsahují vaše osobní data, vždy <b>roztrhovat</b>."
          ],
          notToSort: [
            "<b>Plata od vajec</b>, <b>ruličky</b> od toaletního papíru a kuchyňských utěrek.",
            "Hygienické <b>vložky</b>, <b>toaletní papír</b>, papírové <b>kapesníčky</b>, <b>plenky</b>.",
            "Silně znečištěný papír (od barev, lepidel, mastnoty, krve).",
            "Použité mokré nebo vlhké papírové utěrky."
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
            "Jen namátkou a pro inspiraci: kovové konstrukce, traverzy, armatury, účka, rámy jízdních kol, kočárků, trakařů, plechy, kryty, okapy, výrobky ze slitin kovů (dural, mosaz, bronz, apod)."
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
            "Elektroodpad je všechno, co má něco společného s elektřinou. Jsou to elektrospotřebiče - malé, velké i obrovské. Elektroodpad se nerecykluje. Recyklují se jen některé materiály, které elektroodpad obsahuje.",
          whatToSort: [
            "Vše, co ke svému provozu <b>potřebovalo elektrickou energii nebo ji vodí</b> (<b>kabely</b>).",
            "Velké spotřebiče odvážíme na sběrný dvůr popřípadě je vracíme prostřednictvím zpětného odběru."
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
  }
};
</script>
