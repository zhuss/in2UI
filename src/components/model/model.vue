<template>
    <transition name="fade">
        <div class="in-model" v-show="value" :style="{'z-index':zIndex}" @click.self="close">
            <div class="in-model-panel" :style="{width:width}">
                <div class="in-model-title">
                    <div class="in-model-text">{{title}}</div>
                    <div class="in-model-close" @click="close">×</div>
                </div>
                <div class="in-model-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
export default {
    name:'InModel',
    props:{
        title:String,
        value:Boolean,
        width:String
    },
    data(){
        return {
            zIndex:1
        }
    },
    watch:{
        value(val){
            if(val){
                this.zIndex = getMaxZindex()+1;
            }
        }
    },
    methods:{
        close(){
            this.$emit('input',false);
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
.in-model::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.in-model{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    >.in-model-panel{
        margin:auto;
        width: 500px;
        height: auto;
        background: #FFF;
        border-radius:2px; 
        >.in-model-title{
            padding:30px;
            height: 30px;
            line-height: 30px;
            display: flex;
            >.in-model-text{
                flex: 1;
                font-size: 18px;
                padding-right: 10px;
                color: @regularColor;
            }
            >.in-model-close{
                width: 30px;
                height: 30px;
                text-align: right;
                line-height: 30px;
                font-size: 18px;
                color: @regularColor;
                cursor: pointer;
                &:hover{
                    color: @primaryColor;
                }
            }
        }
        >.in-model-body{
            padding: 0 30px 60px;
        }
    }
}
</style>

