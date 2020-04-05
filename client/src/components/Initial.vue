<template>
  <section class="flex justify-center">
    <h2
      class="mb-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
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
      title: "Úvodní test"
    };
  }
};
</script>
