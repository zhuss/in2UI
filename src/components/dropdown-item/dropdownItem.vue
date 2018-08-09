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


