<template>
    <li class="in-dropdown-item" @click.stop="handleClick">
        <slot></slot>
    </li>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InDropdownItem',
    mixins:[Emitter],
    props:{
        command:{
            type:[String,Number],
            default:null
        }
    },
    methods:{
        handleClick(){
           this.dispatch('InDropdownMenu', 'item-click',this.command);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-dropdown-item{
    padding:0 15px;
    list-style: none;
    height: 40px;
    line-height: 40px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap; 
    word-break: break-all;
    cursor: pointer;
    color: @regularColor;
    font-size: 14px;
    &:hover{
        background: #EEE;
    }
}
</style>


