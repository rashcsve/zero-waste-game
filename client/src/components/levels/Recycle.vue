<template>
  <section>
    <h2>{{ title }}</h2>
    <!-- Sekce "Co to je" -->
    <div v-if="whatIsIt || all" class="mb-6">
      <h3 class="mb-2">Co je recyklace?</h3>
      <div class="flex items-center">
        <img src="../../assets/images/recycle.png" alt="recycle" class="w-24 h-24 mr-6" />
        <div>
          <p>
            <b>Recycle</b> (česky “recyklace”) je na čtvrtém místě ve stupnici 5R. To dokazuje, že v tomto stylu života nejde pouze o to začít se zajímat o obsah svého koše a začít více recyklovat. Recykluje se až to, co nejde odmítnout, zredukovat a znovu využít.
          </p>
          <br />
          <p>
            Míra recyklace v ČR je
            <a href="https://www.trideniodpadu.cz/recyklace">kolem 34 %</a>.
          </p>
        </div>
      </div>
      <br />
      <p>
        Recyklace odpadu se skládá ze dvou fází -
        <i>třídění odpadu a samotná recyklace</i>.
        Jakmile člověk spotřebuje obsah produktu nebo mu doslouží, tak ho vyhodí doma do koše nebo do boxů, krabic či tašek na tříděný odpad.
        Tohle je proces třídění. Recyklace odpadu je pak jakýmkoli způsobem využití odpadů, díky němuž je odpad znovu zpracován na výrobky, příp. materiály či látky.
        Cílem recyklace je získat druhotnou surovinu, kterou můžeme použít k výrobě nových produktů a v některých případech tak úplně nebo zcela nahrazovat primární suroviny.
      </p>
      <!-- <img src="../../assets/images/recycle-cover.jpg" alt="recycle" /> -->
      <br />
      <p>
        Principem Zero Waste však není pouze více recyklovat, jak by se mohli někteří domnívat. Naopak. Recyklace nestačí. Recyklace je pouhou náplastí.
        Vytvoříme odpad a potom ho zrecyklujeme. Jedná se o snahu řešit již vzniklý problém, ale často se stává omluvou pro naší spotřebu a produkci odpadů.
        „Recykluji, tak dělám to nejlepší pro planetu, co můžu. Tečka.“
        <i>Žádný materiál se ale nedá recyklovat nekonečně</i>, některý více, některý méně, ale vždy u toho dochází ke ztrátám a životnost každého materiálu jednou skončí.
      </p>
      <br />
      <p>
        <b>Recyklace nechrání životní prostředí, ale přispívá k menší míře jeho poškozování.</b>
      </p>
    </div>
    <!-- Sekce "Třídění a kontejnery" -->
    <div v-if="containers || all">
      <recycle-container :container="item" v-for="item in containersData" :key="item.color" />
    </div>
    <!-- Sekce "Mapa" -->
    <div v-if="map || all">
      <h3 class="mb-2">Mapa tříděného odpadu</h3>
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
      whatIsIt: false,
      containers: false,
      map: false,
      mapLink: "https://ksnko.praha.eu/map-separated/",
      all: true,
      containersData: [
        {
          color: "orange",
          colorName: "Oranžový",
          image: "drink-carton",
          title: "Nápojový karton",
          perex:
            "Nápojové kartony jsou krabice splácané z fólie, hliníku a papíru. Běžný nápojový karton tvoří zhruba ze 75 % karton, z 20 % plasty a z 5 % hliníková fólie.",
          whatToSort: [
            "Krabice od mléka, džusů, kefíru, acidofilního mléka, laciného vína, a to jakýchkoli velikostí, barev a tvarů.",
            "Všechno, co nese označení C/PAP, 81 nebo 84."
          ],
          howToSort: [
            "Zběžně vypláchnout.",
            "Sešlápnout nebo zmáčknout.",
            "Povolit případné víčko."
          ]
        },
        {
          color: "yellow",
          colorName: "Žlutý",
          image: "plastic",
          title: "Plast",
          perex: `Plast je umělá hmota. Nebo také makromolekulární látky složené z velkého množství stále se opakujících molekul. Nebo také syntetické, polysyntetické nebo polymerní látky.

                Dnes vzniká ve světě každý rok něco kolem 34 milionů tun plastových odpadů. Naprostá většina z nich je spálena nebo naskládkována. V průměru se globálně údajně zrecykluje necelých 30 % plastových odpadů
              `,
          whatToSort: [
            "PET lahve.",
            "Tuhý a obalový polystyren.",
            "Igelitové tašky, sáčky a fólie.",
            "Obaly od mycích a čisticích prostředků.",
            "Kelímky od jogurtů, pomazánek, margarínů, krémů.",
            "Obaly od šamponů, sprchových gelů, tekutých mýdel.",
            "Plastové lahve od mléčných nápojů i samotného mléka."
          ],
          howToSort: [
            "Umýt.",
            "Odstranit z PET lahví víčko.",
            "Odstranit jiné, než PET etikety (například PVC fólii s potiskem navlečenou na lahev).",
            "Odstranit jiné plastové komponenty.",
            "Sešlápnout."
          ],
          canSort: [
            "Plastové květináče, kořenáče a truhlíky.",
            "Obaly od bonbonů, oplatek, sušenek a dalších sladkostí.",
            "Obaly od těstovin, pekárenských výrobků, tzv. instantních potravin.",
            "Obaly od CD, DVD, VHS včetně samotných nosičů (byť ty se určitě v ČR nerecyklují)."
          ],
          notToSort: [
            "Celofán.",
            "Zubní kartáčky.",
            "Těsnění, žvýkačky.",
            "Hnědé PETky od piva.",
            "Molitan, guma, lino, plexisklo.",
            "Bioplasty — ty se většinou recyklovat nedají.",
            "Obaly značně znečištěné od nebezpečných chemikálií."
          ]
        },
        {
          color: "blue",
          colorName: "Modrý",
          image: "paper",
          title: "Papír",
          perex:
            "Papír se vyrábí relativně jednoduše z vláken celulózy (celulóza je řetězovou molekulou uhlohydrátů). Až 35 % pokácených stromů zpracuje papírenský průmysl. Odhadem se jedná o 4 miliardy stromů ročně. Podíl sebraného papíru v ČR je něco málo pod 80%. Podle laboratorních testů nelze papír recyklovat více než 7x.",
          whatToSort: [
            "Papírové výplně.",
            "Katalogy, telefonní seznamy.",
            "Kancelářský papír (i ze skartovaček).",
            "Papírové etikety, booklety z CD a DVD.",
            "Noviny, časopisy (přečtené i nepřečtené),",
            "Prezentační booklety (bez plastových částí).",
            "Vnější papírové krabičky od zubních past, apod.",
            "Knihy (bez tvrdých obalů), paperbacky, brožury.",
            "Krabice, kartony, lepenky, papírové části obalů.",
            "Reklamní letáky a další zbytečné reklamní tiskoviny.",
            "Obaly od potravin (mouka, cukr, obaly od čajových sáčků).",
            "Dopisní obálky (klidně i s dopisy), pozvánky, vizitky, jízdenky.",
            "Sešity, bloky, diáře, deníčky, památníčky, žákovské knížky, indexy."
          ],
          howToSort: [
            "Není třeba odstraňovat kovové spony — odstraňují se pomocí magnetů během zpracování.",
            "Z obálek netřeba vydolovávat plastová okénka.",
            "Krabice rozložit nebo sešlápnout.",
            "Dokumenty jako bankovní výpisy či jiné, které obsahují vaše osobní data, vždy roztrhovat."
          ],
          notToSort: [
            "Křídový papír.",
            "Plata od vajec.",
            "Použité bankovky.",
            "Hygienické vložky.",
            "Povoskovaný balicí papír.",
            "Kopíráky - obsahují karbonový prach.",
            "Použité mokré nebo vlhké papírové utěrky.",
            "Pauzovací papír, spodní strany samolepek.",
            "Toaletní papír, papírové kapesníčky, plenky.",
            "Papír s povrchovou úpravou, parciálními laky.",
            "Zalaminovaný papír (občanky, řidičáky, apod.).",
            "Ruličky od toaletního papíru, kuchyňských utěrek, apod.",
            "Silně znečištěný papír (od barev, lepidel, mastnoty, krve)."
          ],
          special: {
            title: "Pozor!",
            perex: "Vždy třiďte jen povrchově neupravený papír."
          }
        },
        {
          color: "green",
          colorName: "Zelený",
          image: "glass-color",
          title: "Barevné sklo",
          perex:
            "Z hlediska tzv. ekologičnosti je sklo v současnosti optimální obalový materiál. Nejmenší zlo, řečeno jinak.",
          whatToSort: [
            "Skleněné obaly od léků.",
            "Tabulové sklo, sklenice.",
            "Lahve z barevného skla (od piva, vína, limonád)."
          ],
          howToSort: ["Není třeba odstraňovat etikety ani kovová víčka."],
          notToSort: [
            "Varné sklo.",
            "Keramiku, porcelán.",
            "Autosklo, drátované sklo.",
            "Žárovky, výbojky a zářivky.",
            "Zrcadla, plexisklo, sexysklo.",
            "Obrazovky monitorů, televizí a různé displeje."
          ],
          special: {
            title: "Proč se třídí barevné a čiré sklo zvlášť?",
            perex:
              "Je to jednoduché, z barevných střepů nelze vyrobit čiré průhledné sklo. Mezi bílé sklo se nesmí dostat sklo barevné."
          }
        },
        {
          color: "lightgray",
          colorName: "Bílý",
          image: "glass-white",
          title: "Čiré sklo",
          perex: "Mezi bílé sklo se nesmí dostat sklo barevné.",
          whatToSort: [
            "Čiré průhledné lahve.",
            "Zavařovací sklenice a skleněné nádoby z domácnosti"
          ],
          howToSort: ["Není třeba odstraňovat etikety ani kovová víčka."]
        },
        {
          color: "gray",
          colorName: "Šedý",
          image: "metal",
          title: "Kovy",
          perex:
            "Kov není jen železo. Kov je železo a ocel, těžké kovy a drahé kovy. Vše železné a kovové a drahokovové je nutné odevzdávat na sběrný dvůr. Nebo do kontejnerů na drobný kovový odpad. Jen namátkou a pro inspiraci: kovové konstrukce, traverzy, armatury, účka, , éčka apod.; rámy jízdních kol, kočárků, trakařů, apod.; plechy, kryty, okapy,; vraky pluhů a zemědělských strojů po našich předcích a podobné haraburdí; výrobky ze slitin kovů (dural, mosaz, bronz, apod).",
          whatToSort: [
            "Kovové tuby, alobal, kovové zátky, hřebíky, šroubky, kancelářské sponky",
            "Drobný kovový odpad - nápojové plechovky, konzervy, drobné kovové předměty."
          ],
          notToSort: [
            "Aerosoly",
            "Tlakové nádoby od kosmetiky (deodoranty, pěny na holení)"
          ]
        },
        {
          color: "black",
          colorName: "Různý",
          image: "textil",
          title: "Textil",
          perex:
            "Některý použitý textil je možné dále využívat. To však neznamená, že se bude běžně recyklovat stejně jako třeba papír nebo plasty. Tak tomu není. A věříte-li tomu, zapomeňte na to. A pokud textil recyklovat lze, tak jen ve velmi omezeném množství. Nicméně textil lze třídit, prodávat a opět nosit. ",
          whatToSort: [
            "Veškeré oblečení, obuv, módní doplňky - zkrátka vše, co je ještě možné nosit nebo používat."
          ],
          howToSort: [
            "Textil vhazovat v igelitových taškách či jiných obalech."
          ],
          notToSort: [
            "Netextilní materiály.",
            "Plesnivé, mokré či od chemikálií zašpiněné hadry.",
            "Zaneřáděné textilie od chemikálií, potravin, krve a podobně."
          ]
        },
        {
          color: "red",
          colorName: "Červený",
          image: "electro",
          title: "Elektroodpad",
          perex:
            "Elektroodpad je všechno, co má něco společného s elektřinou. Jsou to elektrospotřebiče - malé, velké i obrovské. Elektroodpad se nerecykluje. Recyklují se jen některé materiály, které elektroodpad obsahuje.",
          whatToSort: [
            "Vše, co ke svému provozu potřebovalo elektrickou energii nebo ji vodí (kabely).",
            "Velké spotřebiče odvážíme na sběrný dvůr popřípadě je vracíme prostřednictvím zpětného odběru."
          ]
        },
        {
          color: "saddlebrown",
          colorName: "Hnědý",
          image: "bio",
          title: "Bioodpad",
          perex:
            "Jsou to zbytky z kuchyně nebo veřejného (či neveřejného) stravování. Všechen odpad biologického původu.",
          whatToSort: [
            "To, co oloupete, okrájíte, nesníte nebo na co nemáte chuť.",
            "Posekaná tráva, uřezané větve, dřevo a zbytky ze zemědělské výroby"
          ]
        }
      ]
    };
  }
};
</script>
