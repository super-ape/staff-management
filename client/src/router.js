import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/list.vue'
import AddEmp from './components/addEmp.vue'
import Manage from './components/manage.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
    },{
      path: '/list',
      component: List,
      children: [
        {
          path: 'manage',
          name: "manage",
          component: Manage
        }
      ]
    },
    {
      path: '/add',
      component: AddEmp
    },
  ]
})

export default router
