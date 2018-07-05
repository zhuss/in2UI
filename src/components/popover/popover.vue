<template>
    <div class="in-popover" @click="handleClick" v-clickOutSide="clickOutSide">
        <slot></slot>
        <transition name="fade">
            <div class="in-popover-warp" v-show="value" :style="{'z-index':zIndex}">
                <span class="in-popover-icon"></span>
                <div class="in-popover-content" :style="{width:width+'px'}">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import clickOutSide from '../directives/clickOutside.js'
import {getMaxZindex} from '../../utils/dom.js'
export default {
    name:'InPopover',
    directives:{
        clickOutSide
    },
    props:{
        width:{
            type:String,
            default:0
        }
    },
    data(){
        return {
            zIndex:1,
            value:false
        }
    },
    methods:{
        //获取当前页面的最大Index
        getIndex(){
            this.zIndex = getMaxZindex()+1;
        },
        handleClick(){
            this.value = true;
            this.getIndex();
        },
         clickOutSide(){
            this.value = false;
        },
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/base';
.fade-enter-active, .fade-leave-active {
   transition: all .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(5px);
}
.in-popover{
    position: relative;
    display: inline-block;
    >.in-popover-warp{
        position: absolute;
        z-index: 10;
        padding-top: 5px;
        >.in-popover-icon{
            display: block;
            width: 0;
            height: 0;
            margin-left: 20px;
            border-bottom: 10px solid @secondaryColor;
            border-left:10px solid transparent; 
            border-right:10px solid transparent; 
            position: relative;
            &::after{
                position: absolute;
                left: -10px;
                top: 1px;
                content: '';
                display: block;
                width: 0;
                height: 0;
                border-bottom:10px solid #FFF;
                border-left:10px solid transparent;
                border-right:10px solid transparent;
            }
        }
        >.in-popover-content{
            width: 200px;
            border: 1px solid @secondaryColor;
            border-radius:2px;
            overflow: hidden;
            padding: 20px;
            box-sizing: border-box;
            background: #FFF;
            box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        }
    }
}
</style>

