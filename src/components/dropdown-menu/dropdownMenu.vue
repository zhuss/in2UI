<template>
    <transition name="in-dropdown-fade">
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