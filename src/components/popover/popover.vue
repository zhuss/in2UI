<template>
    <div class="in-popover" @click="handleClick" v-clickOutSide="clickOutSide">
        <div class="in-popover-slot">
            <slot></slot>
        </div>
        <transition name="in-popover-fade">
            <div class="in-popover-warp" :class="['in-popover-'+placement]" v-show="value" :style="{'z-index':zIndex}">
                <div class="in-popover-content" :style="{width:width}">
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
            default:'auto'
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

