import Button from './components/button/button.vue'
import Input from './components/input/input.vue'
import InputNumber from './components/number/number.vue'
import Textarea from './components/textarea/textarea.vue'
import Select from './components/select/select.vue'
import Option from './components/option/option.vue'
import Pagination from './components/pagination/pagination.vue'
import Model from './components/model/model.vue'
import Switch from './components/switch/switch.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import CheckboxGroup from './components/checkbox-group/checkboxGroup.vue'
import Radio from './components/radio/radio.vue'
import Table from './components/table/table.vue'
import TableColumn from './components/table-column/tableColumn.vue'
import Nav from './components/nav/nav.vue'
import NavItem from './components/nav-item/navItem.vue'
import SubNav from './components/sub-nav/subNav.vue'
import Form from './components/form/form.vue'
import FormItem from './components/form-item/formItem.vue'
import Tab from './components/tab/tab.vue'
import TabPanel from './components/tab-panel/tabPanel.vue'
import Tip from './components/tip/tip.vue'
import Message from './components/message/main.js'
import MessageBox from './components/message-box/main.js'

const IngtubeComponents = {
    install(Vue,options){
        Vue.component(Button.name,Button);
        Vue.component(Input.name,Input);
        Vue.component(InputNumber.name,InputNumber);
        Vue.component(Switch.name,Switch);
        Vue.component(Checkbox.name,Checkbox);
        Vue.component(CheckboxGroup.name,CheckboxGroup);
        Vue.component(Radio.name,Radio);
        Vue.component(Textarea.name,Textarea);
        Vue.component(Select.name,Select);
        Vue.component(Option.name,Option);
        Vue.component(Pagination.name,Pagination);
        Vue.component(Nav.name,Nav);
        Vue.component(SubNav.name,SubNav);
        Vue.component(NavItem.name,NavItem);
        Vue.component(Model.name,Model);
        Vue.component(Table.name,Table);
        Vue.component(TableColumn.name,TableColumn);
        Vue.component(Form.name,Form);
        Vue.component(FormItem.name,FormItem);
        Vue.component(Tab.name,Tab);
        Vue.component(TabPanel.name,TabPanel);
        Vue.component(Tip.name,Tip);
        
        Vue.prototype.$message = Message;
        Vue.prototype.$confirm = MessageBox.confirm;
    }
    
}

export default IngtubeComponents;