<template>
  <section class="flex flex-col items-center justify-center">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-center text-title">
      {{ title }}
    </h2>
    <p class="text-xl">{{ greeting }}</p>
    <p>{{ perex }}</p>
    <p class="mt-2 text-center">{{ limit }}</p>
    <p class="text-center">{{ timer }}</p>
    <p class="mb-2 text-center">{{ anotherLimit }}</p>
    <p>{{ look }}</p>
    <img src="../assets/images/initial.svg" alt="initial" class="w-5/6" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Otestuj se, jak jsi Zero Waste friendly",
      greeting: "Ahoj, jsem asistent Wejstík. Vítám tě na úvodním testu!",
      perex: "Položím ti pár otázek a hned zjistím, jaké znalosti máš.",
      limit: "Chci tě upozornit, že na celou hru máš jenom hodinu.",
      timer: "Časovač najdeš nahoře vlevo, ukáže ti, kolik ještě máš času.",
      anotherLimit:
        "Jestli tě to přestane bavit, můžes mi napsat, že chceš ukončit hru. Ale nebudu si pak pamatovat tvůj progres a budeš muset začít znovu.",
      look: "Teď mrkni vpravo. Budu tam pro tebe ;)"
    };
  }
};
</script>
