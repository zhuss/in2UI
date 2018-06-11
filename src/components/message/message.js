import './message.less'
import {getMaxZindex} from '../../utils/dom.js'
const main = function(message){
    let messageDom = document.createElement('div');
    messageDom.setAttribute('class','in-message');
    messageDom.style.zIndex = getMaxZindex()+1;
    messageDom.innerHTML = message;
    document.body.appendChild(messageDom);
    setTimeout(()=>{
        messageDom.className = 'in-message in-message-show';
    },0);
    setTimeout(()=>{
        messageDom.remove();
    },3000);
}
export default main;

