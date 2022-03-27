<template>
  <hearder-component></hearder-component>
  <!-- <index-content-component></index-content-component> -->
  <router-view></router-view>
</template>

<style>
</style>

<script>
import HearderComponent from "./components/HearderComponent.vue";
import IndexContentComponent from "./components/IndexContentComponent.vue";

export default {
  components: {
    HearderComponent,
    IndexContentComponent,
  },
};
</script>
