<template>
    <div class="in-checkbox">
        <input :disabled="disabled" class="in-checkbox-input" v-model="currentValue" type="checkbox" @change="change">
        <span class="in-checkbox-ponit"></span>
    </div>
</template>
<script>
export default {
    name:'InCheckbox',
    props:{
        value:Boolean,
        disabled:Boolean
    },
    watch:{
        value(value){
            this.currentValue = value;
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    methods:{
        change(e){
            this.$emit('input', this.currentValue);
            this.$emit('change', e);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-checkbox{
    display: inline-block;
    vertical-align:middle;
    width: 40px;
    height: 40px;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    >.in-checkbox-input{
        position: absolute;
        left: 5px;
        top: 5px;
        -webkit-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 1;
        &+.in-checkbox-ponit{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            background: #FFF;
            border: 1px solid @secondaryColor;
            border-radius:2px; 
            box-sizing: border-box;
            transition: all .2s;
        }
        &:disabled{
            cursor: not-allowed;
        }
        &:disabled +.in-checkbox-ponit {
            opacity: .6;
        }
        &:checked+.in-checkbox-ponit{
            background: @primaryColor;
            border: 1px solid @primaryColor;
            &:after{
                position: absolute;
                left: 8px;
                top: 9px;
                display: block;
                content: '';
                width: 10px;
                height: 5px;
                border-left: 2px solid #FFF;
                border-bottom:2px solid #FFF;
                transform: rotate(-30deg);
            }
        }
    }
}
</style>


