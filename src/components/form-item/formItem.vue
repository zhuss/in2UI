<template>
    <div class="in-form-item" :class="{'in-form-inline':inline}">
        <div class="in-form-lable" v-if="label">{{label}}</div>
        <div class="in-form-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'InFormItem',
    props:{
        label:String,
        inline:Boolean
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-form-item{
    display: block;
    & +.in-form-item{
     margin-top: 24px;
    }
    >.in-form-lable{
        color: @regularColor;
        font-size: 14px;
    }
    >.in-form-content{
        margin-top: 5px;
    }
}
.in-form-inline{
    display: flex;
     >.in-form-lable{
        line-height: 40px;
        margin-right: 20px;
    }
    >.in-form-content{
        margin-top: 0;
        flex: 1;
    }
}
</style>
