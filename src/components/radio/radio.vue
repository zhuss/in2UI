<template>
    <div class="in-radio">
        <input class="in-radio-input" :class="{'in-radio-input-checked':currentValue==label}" type="radio" v-model="currentValue" :value="label" @change="change">
        <span class="in-radio-ponit"></span>
    </div>
</template>
<script>
export default {
    name:'InRadio',
    props:{
        value:[String,Number],
        label:[String,Number]
    },
    watch:{
        value(val){
            this.currentValue = val;
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    methods:{
        change(e){
            this.$emit('input',this.currentValue);
        }
    }
    
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-radio{
    display: inline-block;
    vertical-align:middle;
    width: 40px;
    height: 40px;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    >.in-radio-input{
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
        opacity: 0;
        & +.in-radio-ponit{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            background: #FFF;
            border: 1px solid @secondaryColor;
            border-radius:100%; 
            box-sizing: border-box;
            transition: all .2s;
        }
        &:disabled{
            cursor: not-allowed;
        }
        &:disabled +.in-radio-ponit {
            opacity: .6;
        }
    }
    .in-radio-input-checked{
        &+.in-radio-ponit{
        background: @primaryColor;
        border: 1px solid @primaryColor;
        &:after{
                position: absolute;
                display: block;
                content: '';
                left: 9px;
                top: 9px;
                width: 10px;
                height: 10px;
                border-radius:100%; 
                background: #FFF;
            }
        }
    }
}
</style>


