<template>
    <div class="in-nav">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InNav',
    mixins: [Emitter],
    props:{
        active:String
    },
    data(){
        return {
            activeIndex:this.active
        }
    },
    mounted(){
        if(this.active){
            this.broadcast('InNavItem','change',this.active);
            this.broadcast('InSubNav','change',this.active);
        }
        this.$on('item-click', this.handleItemClick);
    },
    methods:{
        handleItemClick(item){
           this.activeIndex = item;
           this.broadcast('InNavItem','change',item);
           this.$emit('select',this.activeIndex);
        }
    }
}
</script>