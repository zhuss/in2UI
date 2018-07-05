<template>
    <div class="in-dropdown" @click="handleClick" v-clickOutSide="clickOutSide">
        <slot></slot>
        <slot name="dropdown"></slot>
    </div>
</template>

<script>
import clickOutSide from '../directives/clickOutside.js'
import Emitter from '../../utils/emitter.js'
export default {
    name:'InDropdown',
    mixins:[Emitter],
    directives:{
        clickOutSide
    },
    mounted(){
        this.$on('select',this.select);
    },
    methods:{
         clickOutSide(){
            this.broadcast('InDropdownMenu','change',false);
        },
        handleClick(){
            this.broadcast('InDropdownMenu','change',true);
        },
        select(value){
            this.$emit('command',value);
        }
    }
}
</script>
<style lang="less" scoped>
.in-dropdown{
    display: inline-block;
    position: relative;
}
</style>
