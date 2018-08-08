<template>
    <div class="in-radio">
        <input :disabled="disabled" class="in-radio-input" type="radio"  :value="label" v-model="currentValue" @change="change">
        <span class="in-radio-ponit"></span>
        <span class="in-radio-text" v-if="$slots.default"><slot></slot></span>
        <span class="in-radio-text" v-else>{{label}}</span>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InRadio',
    mixins: [Emitter],
    props:{
        value:[String,Number],
        label:[String,Number],
        disabled:Boolean
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
    mounted(){
        this.$on('init',this.initData);
    },
    methods:{
        //初始化数据
        initData(value){
            this.currentValue = value;
        },
        change(e){
            this.dispatch('InRadioGroup', 'change', this.label);
            this.$emit('input',this.currentValue);
            this.$emit('change', e);
        }
    }
    
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-radio{
    display: inline-block;
    vertical-align:middle;
    height: 40px;
    padding: 5px 0;
    box-sizing: border-box;
    position: relative;
    & + .in-radio{
        margin-left: 20px;
    }
    >.in-radio-text{
        vertical-align: middle;
        color: @regularColor;
        font-size: 14px;
    }
    >.in-radio-input{
        position: absolute;
        left: 0;
        top: 5px;
        //-webkit-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 30px;
        cursor: pointer;
        z-index: 1;
        opacity: 0;
        & +.in-radio-ponit{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            background: #FFF;
            border: 2px solid @secondaryColor;
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
        &:checked +.in-radio-ponit{
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


