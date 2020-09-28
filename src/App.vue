<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>父级的msg：{{ msg }}</h3>
  <HelloWorld />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { provide, ref } from "vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    let msg = ref("Hello Vue 3.0 + Vite");
    // 提供数据 provide inject
    // vue3.0 一改组件
    // 类似于 React.context(), myContext.provider myCcontent.consumer
    provide("msg", msg);

    return { msg };
  },
};
</script>
