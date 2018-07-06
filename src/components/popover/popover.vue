<template>
    <div class="in-popover" @click="handleClick" v-clickOutSide="clickOutSide">
        <slot></slot>
        <transition name="fade">
            <div class="in-popover-warp" :class="['in-popover-'+placement]" v-show="value" :style="{'z-index':zIndex}">
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
        },
        placement:{
            type:String,
            default:'bottom'
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
}
.in-popover{
    position: relative;
    display: inline-block;
    >.in-popover-bottom{
        bottom: -5px;
        left: 0;
        transform: translateY(100%);
    }
    >.in-popover-top{
        top: -5px;
        left: 0;
        transform: translateY(-100%);
    }
    >.in-popover-left{
        top: 0;
        left:-5px;
        transform: translateX(-100%);
    }
    >.in-popover-right{
        top: 0;
        right:-5px;
        transform: translateX(100%);
    }
    >.in-popover-warp{
            position: absolute;
            z-index: 10;
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

