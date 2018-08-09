<template>
    <div class="in-nav-item" :class="{'in-nav-active':activeIndex==index}" @click="itemClick">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InNavItem',
    mixins: [Emitter],
    props:{
        index:String
    },
    data(){
        return {
             activeIndex:''
        }
    },
    created(){
        this.$on('change',this.change);
    },
    methods:{
        itemClick(){
            this.dispatch('InSubNav','item-click',this.index);
            this.dispatch('InNav','item-click',this.index);
        },
        change(index){
            this.activeIndex = index;
        }
    }
}
</script>