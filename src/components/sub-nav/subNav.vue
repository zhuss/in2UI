<template>
    <div class="in-sub-nav">
        <div class="in-sub-title">{{title}}</div>
        <div class="in-sub-warp">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'InSubNav',
    props:{
        title:String
    }
}
</script>
<style lang="less" scoped>
.in-sub-nav{
    >.in-sub-title{
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        &:hover{
            background: #EAEAEA;
        }
    }
    >.in-sub-warp{
        >.in-nav-item{
           padding-left: 40px;
        }
    }
}
</style>


