import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import Demo from '../views/Demo.vue'
import Model from '../views/ModelDemo.vue'
import Table from '../views/TableDemo.vue'
import Nav from '../views/NavDemo.vue'
import Form from '../views/FormDemo.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
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
      },{
        path:'table',
        name:'table',
        component:Table
      },{
        path:'nav',
        name:'nav',
        component:Nav
      },{
        path:'form',
        name:'form',
        component:Form
      }]
    }
  ]
})
