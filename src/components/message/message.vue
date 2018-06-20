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
            setTimeout(()=>{
                this.$destroy();
                this.$el.remove();
            },300);
        },2000);
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.fade-enter-active, .fade-leave-active {
   transition: all .3s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}
.in-message{
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding:15px 30px;
    width: 100%;
    background: @secondaryColor;
    color: @regularColor;
    overflow: hidden;
}
</style>

