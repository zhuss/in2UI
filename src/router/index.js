import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import Input from '../docs/input.md'
import Textarea from '../docs/textarea.md'
import Select from '../docs/select.md'
import Switch from '../docs/Switch.md'
import Table from '../docs/Table.md'
import Model from '../docs/Model.md'
import InNumber from '../docs/number.md'
import Radio from '../docs/radio.md'
import Checkbox from '../docs/checkbox.md'
import Form from '../docs/fom.md'
import Popover from '../docs/popover.md'
import Button from '../docs/button.md'
import Tab from '../docs/tabs.md'
import Nav from '../docs/nav.md'
import Pagination from '../docs/pagination.md'
import Message from '../docs/message.md'
import Dropdown from '../docs/dropdown.md'
import Tip from '../docs/tip.md'
import Datepicker from '../docs/datepicker.md'
import Citypicker from '../docs/citypicker.md'


Vue.use(Router)

export default new Router({
  mode:'history',
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
        name:'button',
        component:Button
      },{
        path:'input',
        name:'input',
        component:Input
      },{
        path:'textarea',
        name:'textarea',
        component:Textarea
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
        path:'checkbox',
        name:'checkbox',
        component:Checkbox
      },{
        path:'form',
        name:'form',
        component:Form
      },{
        path:'table',
        name:'table',
        component:Table
      },{
        path:'model',
        name:'model',
        component:Model
      },{
        path:'popover',
        name:'popover',
        component:Popover
      },{
        path:'tab',
        name:'tab',
        component:Tab
      },{
        path:'nav',
        name:'nav',
        component:Nav
      },{
        path:'pagination',
        name:'pagination',
        component:Pagination
      },{
        path:'message',
        name:'message',
        component:Message
      },{
        path:'dropdown',
        name:'dropdown',
        component:Dropdown
      },{
        path:'tip',
        name:'tip',
        component:Tip
      },{
        path:'datepicker',
        name:'datepicker',
        component:Datepicker
      },{
        path:'citypicker',
        name:'citypicker',
        component:Citypicker
      }]
    }
  ]
})
