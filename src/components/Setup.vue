<!-- MyBook.vue -->
<template>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }} <slot></slot></div>
</template>

<script>
import { ref, reactive } from "vue";

export default {

  props: {
    collectionName: String,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    console.log(attrs.collectionName)

    // 暴露给 template
    return {
      readersNumber,
      book,
    };
  },
};
</script>