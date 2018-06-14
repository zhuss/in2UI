import Vue from 'vue';
import message from './message.vue';
const MessageBoxConstructor = Vue.extend(message);

const Message = function(text){
    let instance = new MessageBoxConstructor({
        data:{
            text:text||'消息内容'
        }
    }); 
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
}
export default Message;
