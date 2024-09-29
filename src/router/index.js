// 创建路由对象 及 配置路由规则 和 其他路由配置

// 导包vue
import Vue from 'vue'

// 导包vue-router
// npm i vue-router 可能会报错。原因:版本问题，vue2 用的是 router3版本，vue3用的是router4版本)
// 解决：npm i vue-router@3
import VueRouter from 'vue-router'

// 全局注册
Vue.use(VueRouter)

// 初始化路由对象(创建路由规则)
const router = new VueRouter({
  routes: []
})

// 导出路由对象
export default router