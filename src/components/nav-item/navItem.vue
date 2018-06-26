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
.in-nav-active{
    color: @primaryColor;
}
</style>
