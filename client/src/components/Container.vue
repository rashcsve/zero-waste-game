<template>
  <section class="flex flex-col mb-8">
    <!-- Main Info -->
    <div class="flex items-center justify-center">
      <div class="w-16 w-1/12 h-20 mr-6">
        <!-- <img
          :src="require(`../assets/images/containers/${container.color}.png`)"
          :alt="container.color"
          class="max-h-full"
        />-->
        <container-icon :fillColor="container.color" />
      </div>
      <div class="flex flex-col w-11/12">
        <p class="mb-2 text-xl font-bold">
          <span :style="{'color': container.color}">{{ container.colorName }}</span>
          <span>&nbsp;-&nbsp;</span>
          <span>{{ container.title }}</span>
        </p>
        <p>{{ container.perex }}</p>
      </div>
    </div>
    <div class="max-w-lg m-auto">
      <img
        :src="require(`../assets/images/waste/${container.image}.jpg`)"
        :alt="container.color"
        class="max-h-full my-4"
      />
    </div>
    <!-- Description and How To's -->
    <div class="flex flex-wrap">
      <div v-if="container.whatToSort" class="w-1/2 my-4">
        <b class="text-lg">{{ whatToSort }}</b>
        <ol>
          <li v-for="(item, index) in container.whatToSort" :key="index">-&nbsp;{{item}}</li>
        </ol>
      </div>
      <div v-if="container.howToSort" class="w-1/2 my-4">
        <b class="text-lg">{{ howToSort }}</b>
        <ol>
          <li v-for="(item, index) in container.howToSort" :key="index">-&nbsp;{{item}}</li>
        </ol>
      </div>
      <div v-if="container.canSort" class="w-1/2 my-4">
        <b class="text-lg">{{ canSort }}</b>
        <ol>
          <li v-for="(item, index) in container.canSort" :key="index">-&nbsp;{{item}}</li>
        </ol>
      </div>
      <div v-if="container.notToSort" class="w-1/2 my-4">
        <b class="text-lg">{{ notToSort }}</b>
        <ol>
          <li v-for="(item, index) in container.notToSort" :key="index">-&nbsp;{{item}}</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import ContainerIcon from "./ContainerIcon";
export default {
  components: {
    ContainerIcon
  },
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
      canSort: "Co lze také třídit",
      notToSort: "Co vůbec netřídit"
    };
  },
  computed: {
    getTitleColor() {
      return `text-${this.container.color}-700`;
    }
  }
};
</script>
