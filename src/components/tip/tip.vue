<template>
    <div class="in-tip" @mouseover="mouseover" @mouseout="mouseout">
        <transition name="in-tip-fade">
            <div class="in-tip-top" v-show="show" :style="{'z-index':zIndex}">
                <div class="in-tip-text">{{content}}</div>
                <div class="in-tip-icon"><span></span></div>
            </div>
        </transition>
        <div class="in-tip-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
export default {
    name:'InTip',
    props:{
        content:String
    },
    data(){
        return {
            zIndex:1,
            show:false
        }
    },
    watch:{
        show(val){
            if(val){
                this.getIndex();
            }
        }
    },
    methods:{
        //获取当前页面的最大Index
        getIndex(){
            this.zIndex = getMaxZindex()+1;
        },
        mouseover(){
            this.show = true;
        },
        mouseout(){
            this.show = false;
        }
    }
}
</script>


