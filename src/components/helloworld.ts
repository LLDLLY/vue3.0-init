import { ref, reactive, inject, onMounted, onUpdated } from "vue";
import { $log, $info, $test } from "../modules-index";

const helloworld = (): object => {

  // 生命周期
  onMounted(() => {
    console.log('mounted!')
  })
  onUpdated(() => {
    console.log('updated!')
  })

  // 接收 父组件传来的数据
  const msg: any = inject("msg");
  $log(msg.value); // Hello Vue 3.0 + Vite

  // 修改msg 在子级修改msg，父级msg也会更新
  msg.value = '修改后的msg';
  $log(msg.value); // 修改后的msg

  // 1. ref
  const count = ref(0);
  const addCount = function () {
    count.value++;
    $log(count.value, "count:");
  };

  // 2. reactive
  const obj = reactive({
    a: "a",
    b: "b",
    c: {
      c1: "c1",
      c2: "c2",
    },
  });

  obj.a = "我是a呀";
  obj.b = "我是b呀";
  obj.c.c1 = "我是c1呀";

  // 注意：对reactive的数据解构会导致 基础数据类型 失去reactive
  let { a, c } = obj;
  a = "我是被解构的a";
  c.c1 = "我是被解构的c1";

  $log(obj);     // {a: "我是a呀",b: "我是b呀",c: {c1: "我是被解构的c1",c2: "c2",},}
  $log(a, 'a:'); // 我是被解构的a 
  $log(c, 'c:'); // {c1: "我是被解构的c1", c2: "c2"}

  // 测试引用
  $log($info, "测试引用:");
  $test();

  return { msg, count, addCount, obj }
};

export default helloworld;