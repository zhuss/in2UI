<template>
    <div class="in-message" :class="{'in-message-active':isShow}" :style="{'z-index':zIndex}">{{text}}</div>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
export default {
    name:'InMessage',
    data(){
        return {
            isShow:false,
            zIndex:getMaxZindex()+1
        }
    },
    mounted(){
        this.isShow = true;
        setTimeout(()=>{
            this.isShow = false;
            setTimeout(()=>{
                this.$destroy();
                this.$el.remove();
            },300);
        },3000);
    }
}
</script>

