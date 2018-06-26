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
<style lang="less" scoped>
.in-nav{
    width: 100%;
    background: #EEE;
}
</style>


