import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import App from './App.vue'
import Home from './components/Home.vue'
import ItEBookHome from './components/ItEbookHome.vue'
import AllItEBookHome from './components/AllItEbookHome.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import AllItEBookList from './components/AllItEbookList.vue'
    import AllItEBookDetail from './components/AllItEbookDetail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {
        path:'/',
        component:Home,
        children:[
            {
                path:'/itebook',
                component:ItEBookHome,
                name:'ItEBook',
                children:[
                    {
                        path:'',
                        component:List
                    },
                    {
                        path:'/itebook/list',
                        component:List
                    },
                    {
                        path:'/itebook/detail',
                        component:Detail
                    }
                ]
            },
            {
                path:'/allitebook',
                component:AllItEBookHome,
                name:'AllItEBook',
                children:[
                    {
                        path:'',
                        component:AllItEBookList
                    },
                    {
                        path:'/allitebook/list',
                        component:AllItEBookList
                    },
                    {
                        path:'/allitebook/detail',
                        component:AllItEBookDetail
                    }
                ]
            }
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
