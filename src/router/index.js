import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import Demo from '../views/Demo.vue'
import Model from '../views/ModelDemo.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      component: Login
    },
    {
      path: '/',
      component: Main,
      children:[{
        path:'',
        name:'demo',
        component:Demo
      },{
        path:'model',
        name:'model',
        component:Model
      }]
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
