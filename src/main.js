
import Vue from 'vue'
import App from './App.vue'

// 导包element-ui
import ElementUI from 'element-ui'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入路由对象 并 挂载到根实例
// 在vue-cli创建的项目中，@ 前戳 代表的是根路径 src目录
// 默认会加载索引路径 可不用去写 （索引文件：index.js index.json）
import router from '@/router'

// 全局注册组件(注册element-ui组件库)
Vue.use(ElementUI)

Vue.config.productionTip = false

// main.js职责1：依赖项目需要的资源(js模块、css资源 ...)
// main.js职责2：实例化跟实例。 render() 渲染App组件。 mount('#app')挂载到#app的容器内

new Vue({
  render: h => h(App),
  router  // 挂载到跟实例 (router: router  对象名称和选项一致可直接写 router)
}).$mount('#app')
