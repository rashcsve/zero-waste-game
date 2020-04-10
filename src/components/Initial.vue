<template>
  <section class="flex flex-col items-center justify-center mt-4">
    <h2 class="mb-4 text-4xl font-bold leading-7 text-center text-title">
      {{ title }}
    </h2>
    <p class="text-xl">{{ greeting }}</p>
    <p>{{ perex }}</p>

    <p>{{ look }}</p>
    <img src="../assets/images/initial.svg" alt="initial" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Otestuj se, jak jsi Zero Waste friendly",
      greeting: "Ahoj, jsem asistent Wejstík. Vítám tě na úvodním testu!",
      perex: "Abych zjistil, jaké znalosti již máš, položím ti pár otázek a hned zjistím, jak si na tom.",
      look: "Mrkni vpravo."
    };
  }
};
</script>
