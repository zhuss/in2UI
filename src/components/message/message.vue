<template>
    <transition name="fade">
        <div class="in-message" v-show="isShow" :style="{'z-index':zIndex}">{{text}}</div>
    </transition>
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
        },3000);
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
   transition: all .3s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.in-message{
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding:10px 30px;
    min-width: 200px;
    background: #25b864;
    color: #FFF;
    border-radius:2px;
    overflow: hidden;
}
</style>

