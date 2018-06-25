<template>
    <div class="in-nav-item" :class="{'in-nav-item-active':activeIndex==index}" @click="itemClick">
        <slot></slot>
    </div>
</template>
<script>
import bus from '../../utils/bus.js'
export default {
    name:'InNavItem',
    props:{
        index:String
    },
    data(){
        return {
             activeIndex:''
        }
    },
    mounted(){
            bus.$on('changeIndex', this.changeIndex);
    },
    methods:{
        itemClick(){
           bus.$emit('item-click',this.index);
        },
        changeIndex(index){
            this.activeIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-nav-item{
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    color: @regularColor;
    transition: color .3s;
    &:hover{
        background: #EAEAEA;
    }
}
.in-nav-item-active{
    color: @primaryColor;
}
</style>
