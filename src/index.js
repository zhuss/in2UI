import Button from './components/button/button.vue'
import Input from './components/input/input.vue'
import Textarea from './components/textarea/textarea.vue'
import Select from './components/select/select.vue'
import Pagination from './components/pagination/pagination.vue'
import Model from './components/model/model.vue'
import Switch from './components/switch/switch.vue'
import Message from './components/message/message.js'

const IngtubeComponents = {
    install(Vue,options){
        Vue.component(Button.name,Button);
        Vue.component(Input.name,Input);
        Vue.component(Switch.name,Switch);
        Vue.component(Textarea.name,Textarea);
        Vue.component(Select.name,Select);
        Vue.component(Pagination.name,Pagination);
        Vue.component(Model.name,Model);
        
        Vue.prototype.$message = Message;
    }
    
}

export default IngtubeComponents;