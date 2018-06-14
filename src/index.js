import Button from './components/button/button.vue'
import Input from './components/input/input.vue'
import Textarea from './components/textarea/textarea.vue'
import Select from './components/select/select.vue'
import Pagination from './components/pagination/pagination.vue'
import Model from './components/model/model.vue'
import Switch from './components/switch/switch.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import Message from './components/message/main.js'
import MessageBox from './components/message-box/main.js'

const IngtubeComponents = {
    install(Vue,options){
        Vue.component(Button.name,Button);
        Vue.component(Input.name,Input);
        Vue.component(Switch.name,Switch);
        Vue.component(Checkbox.name,Checkbox);
        Vue.component(Textarea.name,Textarea);
        Vue.component(Select.name,Select);
        Vue.component(Pagination.name,Pagination);
        Vue.component(Model.name,Model);
        
        Vue.prototype.$message = Message;
        Vue.prototype.$confirm = MessageBox.confirm;
    }
    
}

export default IngtubeComponents;