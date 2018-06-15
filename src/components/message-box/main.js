import Vue from 'vue';
import msgBox from './messageBox.vue';

const MessageBoxConstructor = Vue.extend(msgBox);

const MessageBox  = function(){
    return new MessageBox();
}

MessageBox.confirm = (option)=>{
    option = option||{};
    let instance = new MessageBoxConstructor({
        data:{
            title:option.title||'标题',
            text:option.text||'消息内容',
            confirmButton:option.confirmButton||'确认',
            cancelButton:option.cancelButton||'取消',
            action:option.action||function(res){return false}
        }
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
}

export default MessageBox;