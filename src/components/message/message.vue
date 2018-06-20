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
<style lang="less" scoped>
@import '../../assets/css/base';
.in-message{
    position: fixed;
    top: 30px;
    left: 50%;
    transform:translateX(-50%) translateY(-30px);
    box-sizing: border-box;
    padding:15px 30px;
    min-width: 300px;
    background: #F5FBF8;
    border: 1px solid #EAEAEA;
    color: @regularColor;
    border-radius:5px; 
    overflow: hidden;
    transition: all .3s;
    opacity: 0;
}
.in-message-active{
    opacity: 1;
    transform:translateX(-50%) translateY(0);
}
</style>

