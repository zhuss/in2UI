<template>
    <div class="in-tip" @mouseover="mouseover" @mouseout="mouseout">
        <transition name="fade">
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
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.in-tip{
    position: relative;
    display: inline-block;
    >.in-tip-top{
        position: absolute;
        width: auto;
        left: 50%;
        z-index: 100;
        transform: translateY(-100%) translateX(-50%);
        >.in-tip-text{
            background:#000;
            color: #FFF;
            padding: 10px 20px;
            white-space: nowrap;
            font-size: 14px;
        }
        >.in-tip-icon{
            width: 100%;
            height: 10px;
            line-height: 9px;
            padding-bottom:5px; 
            text-align: center;
            >span{
                display: inline-block;
                line-height: 10px;
                width: 0;
                height: 0;
                border-top:10px solid #000; 
                border-right:10px solid transparent; 
                border-left:10px solid transparent; 
            }
        }
    }
    
}
</style>


