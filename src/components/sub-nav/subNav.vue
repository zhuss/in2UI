<template>
    <div class="in-sub-nav">
        <div class="in-sub-title"  @click="isOpen=!isOpen">{{title}}</div>
        <div ref="warp" class="in-sub-warp" :style="{height:isOpen?height+'px':'0px'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InSubNav',
    mixins: [Emitter],
    props:{
        title:String,
        active:Boolean
    },
    data(){
        return {
            isOpen:this.active,
            height:0
        }
    },
    mounted(){
        this.$on('item-click', this.handleItemClick);
        this.$nextTick(()=>{
           this.height = 50*this.$refs.warp.querySelectorAll(".in-nav-item").length;
           
        });
    },
    methods:{
        handleItemClick(index){
             this.dispatch('InNav','item-click',index);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-sub-nav{
    >.in-sub-title{
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        color: @regularColor;
        &:hover{
            background: #EAEAEA;
        }
    }
    >.in-sub-warp{
        overflow: hidden;
        transition: all .3s;
        >.in-nav-item{
           padding-left: 40px;
        }
    }
}
</style>


