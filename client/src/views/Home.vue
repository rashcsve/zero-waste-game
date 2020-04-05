<template>
  <section class="flex">
    <div>
      <h1>{{ title }}</h1>
      <h3>{{ perex }}</h3>
      <!-- TODO button ui -->
      <router-link :to="button.link">{{ button.title }}</router-link>
    </div>
    <img src="../assets/images/money.png" alt="hero image" />
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Nauč se základům Zero Waste",
      perex: "Udělej krok vpřed do nového života",
      button: {
        title: "Spustit hru",
        link: "/game"
      }
    }
  }
};
</script>
