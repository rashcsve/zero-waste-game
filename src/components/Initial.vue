<template>
  <section class="flex flex-col justify-center mt-10">
    <h2
      class="mb-4 text-4xl font-bold leading-7 text-center text-tile"
    >
      {{ title }}
    </h2>
    <img src="../assets/images/initial.svg" alt="initial" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Úvodní Test"
    };
  }
};
</script>
