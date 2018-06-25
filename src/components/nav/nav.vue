<template>
    <div class="in-nav">
        <slot></slot>
    </div>
</template>
<script>
import bus from '../../utils/bus.js'
export default {
    name:'InNav',
    props:{
        active:String
    },
    data(){
        return {
            activeIndex:this.active
        }
    },
    mounted(){
        bus.$on('item-click', this.handleItemClick);
        if(this.active){
            bus.$emit('changeIndex',this.activeIndex);
        }
    },
    methods:{
        handleItemClick(item){
           this.activeIndex = item;
           bus.$emit('changeIndex',this.activeIndex);
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


