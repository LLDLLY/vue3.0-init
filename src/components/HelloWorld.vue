<template>
  <h3>子集的msg：{{ msg }}</h3>
  <p>{{ obj.a }}</p>
  <p>{{ obj.b }}</p>
  <p>{{ obj.c && obj.c.c1 }}、{{ obj.c && obj.c.c2 }}</p>
  <button @click="addCount">count is: {{ count }}</button>
</template>

<script>
import helloworld from "./helloworld";
import { onMounted } from "vue";
export default {
  setup() {
    return Object.assign({}, helloworld());
  },
};
</script>
