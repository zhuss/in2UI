import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import Input from '../docs/input.md'
import Select from '../docs/select.md'
import Switch from '../docs/Switch.md'
import Table from '../docs/Table.md'
import Model from '../docs/Model.md'
import InNumber from '../docs/number.md'
import Radio from '../docs/radio.md'


Vue.use(Router)

export default new Router({
  //mode:'history',
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
        name:'input',
        component:Input
      },{
        path:'number',
        name:'number',
        component:InNumber
      },{
        path:'select',
        name:'select',
        component:Select
      },{
        path:'switch',
        name:'switch',
        component:Switch
      },{
        path:'radio',
        name:'radio',
        component:Radio
      },{
        path:'table',
        name:'table',
        component:Table
      },{
        path:'model',
        name:'model',
        component:Model
      }]
    }
  ]
})
