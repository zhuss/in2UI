<template>
    <div class="in-sub-nav">
        <div class="in-sub-title"  @click="isOpen=!isOpen">{{title}}</div>
        <div ref="warp" class="in-sub-warp" :style="{height:isOpen?height+'px':'0px'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'InSubNav',
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
        this.$nextTick(()=>{
           this.height = 50*this.$refs.warp.querySelectorAll(".in-nav-item").length;
        });
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


