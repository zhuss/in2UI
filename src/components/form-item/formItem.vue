<template>
    <div class="in-form-item">
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
        label:String
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-form-item{
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
</style>
