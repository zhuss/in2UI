<template>
    <div class="in-form-item">
        <div class="in-form-lable" :style="{width:labelWidth}">{{label}}</div>
        <div class="in-form-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'InFormItem',
    props:{
        label:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            labelWidth:this.$parent.labelWidth||'80px'
        }
    }
}
</script>