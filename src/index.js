import Button from './components/button/button.vue'
import ButtonGroup from './components/button-group/buttonGroup.vue'
import Input from './components/input/input.vue'
import InputNumber from './components/number/number.vue'
import Textarea from './components/textarea/textarea.vue'
import Select from './components/select/select.vue'
import Option from './components/option/option.vue'
import Pagination from './components/pagination/pagination.vue'
import Modal from './components/modal/modal.vue'
import Switch from './components/switch/switch.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import CheckboxGroup from './components/checkbox-group/checkboxGroup.vue'
import Radio from './components/radio/radio.vue'
import RadioGroup from './components/radio-group/radioGroup.vue'
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
import Dropdown from './components/dropdown/dropdown.vue'
import DropdownMenu from './components/dropdown-menu/dropdownMenu.vue'
import DropdownItem from './components/dropdown-item/dropdownItem.vue'
import Popover from './components/popover/popover.vue'
import Datepicker from './components/datepicker/datepicker.vue'
import Message from './components/message/main.js'
import MessageBox from './components/message-box/main.js'

const IngtubeComponents = {
    install(Vue,options){
        Vue.component(Button.name,Button);
        Vue.component(ButtonGroup.name,ButtonGroup);
        Vue.component(Input.name,Input);
        Vue.component(InputNumber.name,InputNumber);
        Vue.component(Datepicker.name,Datepicker);
        Vue.component(Switch.name,Switch);
        Vue.component(Checkbox.name,Checkbox);
        Vue.component(CheckboxGroup.name,CheckboxGroup);
        Vue.component(Radio.name,Radio);
        Vue.component(RadioGroup.name,RadioGroup);
        Vue.component(Textarea.name,Textarea);
        Vue.component(Select.name,Select);
        Vue.component(Option.name,Option);
        Vue.component(Pagination.name,Pagination);
        Vue.component(Nav.name,Nav);
        Vue.component(SubNav.name,SubNav);
        Vue.component(NavItem.name,NavItem);
        Vue.component(Modal.name,Modal);
        Vue.component(Table.name,Table);
        Vue.component(TableColumn.name,TableColumn);
        Vue.component(Form.name,Form);
        Vue.component(FormItem.name,FormItem);
        Vue.component(Tab.name,Tab);
        Vue.component(TabPanel.name,TabPanel);
        Vue.component(Tip.name,Tip);
        Vue.component(Dropdown.name,Dropdown);
        Vue.component(DropdownMenu.name,DropdownMenu);
        Vue.component(DropdownItem.name,DropdownItem);
        Vue.component(Popover.name,Popover);
        
        Vue.prototype.$message = Message;
        Vue.prototype.$confirm = MessageBox.confirm;
    }
    
}

export default IngtubeComponents;