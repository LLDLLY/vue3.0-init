import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import * as config from './utils/config_globalProperties.ts'

const app = createApp(App);

// app.config:应用全局配置的对象 
// app.config.globalProperties代替Vue 2.x Vue.prototype 扩展
// vue3.0 setup内部不支持this, 一些公共方法挂载vue也是访问不到的
Object.keys(config).forEach(ele => {
  app.config.globalProperties[ele] = config[ele]
});

// 侦听器抛出的未捕获错误
export const errorHandler = (err, vm, info) => {
  console.log('errorHandler:', err, vm, info);
}

// 侦听器抛出的未捕获warn
export const warnHandler = (msg, vm, trace) => {
  console.log('warnHandler:', msg, vm, trace);
}

// 应用挂载
app.mount('#app');
