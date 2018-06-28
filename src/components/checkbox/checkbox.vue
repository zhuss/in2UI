<template>
    <div class="in-checkbox">
        <input :disabled="disabled" class="in-checkbox-input" v-model="currentValue" type="checkbox" @change="change">
        <span class="in-checkbox-ponit"></span>
        <span class="in-checkbox-text" v-if="$slots.default"><slot></slot></span>
        <span class="in-checkbox-text" v-else>{{label}}</span>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InCheckbox',
    mixins: [Emitter],
    props:{
        value:Boolean,
        label:[String,Number],
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
    mounted(){
        this.$on('init',this.initData);
    },
    methods:{
        //初始化数据
        initData(value){
            let valueList = value.value;
            if(valueList.indexOf(this.label) > -1){
                this.currentValue = true;
            }else{
                this.currentValue = false;
            }
        },
        change(e){
            this.dispatch('InCheckboxGroup', 'change', this.label);
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
    height: 40px;
    padding: 5px 0;
    box-sizing: border-box;
    position: relative;
    & + .in-checkbox{
        margin-left: 20px;
    }
    >.in-checkbox-text{
        vertical-align: middle;
        color: @regularColor;
        font-size: 14px;
    }
    >.in-checkbox-input{
        position: absolute;
        left: 0;
        top: 5px;
        -webkit-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 30px;
        cursor: pointer;
        z-index: 1;
        opacity: 0;
        &+.in-checkbox-ponit{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
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


