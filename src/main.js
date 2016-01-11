import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

import login from './login.vue'
import devicelist from './devicelist.vue'
import mainview from './mainview.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production';

Vue.use(VueRouter);
Vue.use(require('vue-resource'));
Vue.http.options.root = '/web';

var userstate={sid:""};

const router = new VueRouter();
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/login': {
    component: login
  },
  '/devicelist': {
    component: devicelist
  },
  '/mainview/:devID': {
    component: mainview
  }
});
const App = Vue.extend(app);
router.start(App, 'body');
