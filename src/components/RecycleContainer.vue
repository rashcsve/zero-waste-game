<template>
  <section class="flex mb-8">
    <img
      :src="require(`../assets/images/waste/${container.image}.svg`)"
      :alt="container.title"
      class="mx-4"
    />
    <div class="flex flex-col">
      <!-- Main Info -->
      <div class="flex flex-col w-11/12">
        <p class="mb-2 text-3xl font-bold">
          {{ container.title }}
        </p>
        <p>{{ container.perex }}</p>
      </div>
      <!-- FAQ -->
      <div class="flex flex-wrap">
        <!-- Questions -->
        <section class="flex flex-col justify-center">
          <div
            v-if="container.howToSort"
            class="mb-4 question"
            :class="{ 'question--active': isActive('howToSort') }"
            @click="openAnswers(container.howToSort, 'howToSort')"
          >
            <span class="w-full">{{ howToSort }}</span>
          </div>
          <div
            v-if="container.whatToSort"
            class="mb-4 question"
            :class="{ 'question--active': isActive('whatToSort') }"
            @click="openAnswers(container.whatToSort, 'whatToSort')"
          >
            <span class="w-full">{{ whatToSort }}</span>
          </div>
          <div
            v-if="container.notToSort"
            class="question"
            :class="{ 'question--active': isActive('notToSort') }"
            @click="openAnswers(container.notToSort, 'notToSort')"
          >
            <span class="w-full">{{ notToSort }}</span>
          </div>
        </section>
        <!-- Answer -->
        <div v-if="answers" class="ml-4 answer">
          <ol>
            <li v-for="(item, index) in answers" :key="index">
              - <span v-html="item"></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    container: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      whatToSort: "Co má smysl třídit",
      howToSort: "Jak třídit",
      notToSort: "Co vůbec netřídit",
      answers: [],
      active: false
    };
  },
  mounted() {
    this.openAnswers(this.container.howToSort, "howToSort");
  },
  methods: {
    openAnswers(answers, name) {
      this.active = name;
      this.answers = answers;
    },
    isActive(name) {
      return this.active === name;
    }
  }
};
</script>
