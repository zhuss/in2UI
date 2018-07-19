import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

// import Demo from '../views/Demo.vue'
// import Model from '../views/ModelDemo.vue'
// import Table from '../views/TableDemo.vue'
// import Nav from '../views/NavDemo.vue'
// import Form from '../views/FormDemo.vue'
// import Tab from '../views/TabDemo.vue'
import Input from '../docs/input.md'
import Switch from '../docs/Switch.md'


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
        path:'switch',
        name:'switch',
        component:Switch
      }]
    }
  ]
})
