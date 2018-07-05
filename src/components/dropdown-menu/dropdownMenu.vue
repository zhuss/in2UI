<template>
    <transition name="fade">
        <div class="in-dropdown-menu" :style="{'z-index':zIndex}" v-show="value">
            <span class="in-dropdown-icon"></span>
            <ul class="in-dropdown-ul">
                <slot></slot>
            </ul>
        </div>
        
    </transition>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
import Emitter from '../../utils/emitter.js'
export default {
    name:'InDropdownMenu',
    mixins:[Emitter],
    data(){
        return {
            value:false,
            zIndex:1
        }
    },
    mounted(){
        this.$on('change',this.change);
        this.$on('item-click',this.select);
    },
    methods:{
        //获取当前页面的最大Index
        getIndex(){
            this.zIndex = getMaxZindex()+1;
        },
        change(value){
            if(value){
                this.getIndex();
            }
            this.value = value;
        },
        select(value){
            this.value = false;
            this.dispatch('InDropdown', 'select',value);
        }
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
.in-dropdown-menu{
    position: absolute;
    width: 100%;
    min-width: 100px;
    padding-top: 5px;
    >.in-dropdown-icon{
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
    >.in-dropdown-ul{
        margin: 0;
        padding: 10px 0;
        background: #FFF;
        border-radius:2px;
        border:1px solid  @secondaryColor;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    }
}
</style>


