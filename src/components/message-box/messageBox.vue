<template>
<transition name="fade">
    <div class="in-message-box" v-show="isShow" :style="{'z-index':zIndex}">
       <div class="in-message-panel">
            <div class="in-message-title">{{title}}</div>
            <div class="in-message-text">{{text}}</div>
            <div class="in-message-footer">
                <in-button type="primary" @click="confirmClick">{{confirmButton}}</in-button>
                <in-button @click="cancelClick">{{cancelButton}}</in-button>
            </div>
       </div>
    </div>
</transition>    
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
import InButton from '../button/button'
export default {
    components:{
        InButton
    },
    data(){
        return {
            isShow:false,
            zIndex:getMaxZindex()+1
        }
    },
    mounted(){
        this.isShow = true;
    },
    methods:{
        cloes(){
            this.isShow = false;
            setTimeout(()=>{
                this.$destroy();
                this.$el.remove();
            },300);
        },
        confirmClick(e){
            this.cloes();
            this.action('confirm');
        },
        cancelClick(e){
            this.cloes();
            this.action('cancel');
        }
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
    transform: scale(1.2);
}
.in-message-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    >.in-message-panel{
        margin: 0 auto;
        width: 500px;
        height: auto;
        background: #FFF;
        >.in-message-title{
            padding: 20px 30px;
            font-size: 16px;
            border-bottom: 2px solid @borderColor;
        }
        >.in-message-text{
            padding: 30px;
            font-size: 14px;
           color: @regularColor;
        }
        >.in-message-footer{
            text-align: right;
            padding: 0 30px 30px;
        }
    }
}
</style>

