import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import App from './App.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {
        path:'/',
        component:Home,
        children:[
            { path:'/list',component:List,name:'列表' },
            { path:'/detail',component:Detail,name:'详情页'}
        ]
    }
];

const router=new VueRouter({
    routes
})
new Vue({
  el: '#app',
  template:'<App/>',
  router,
  components:{App}
}).$mount('#app')
