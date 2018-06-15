<template>
<input class="in-input"
        v-bind="$attrs"
        :disabled="disabled"
        :type="type"
        :autocomplete="autoComplete"
        v-model="currentValue"
        @input="handleInput"
        @focus="handleFocus" 
        @blur="handleBlur"
        @change="handleChange">
</template>
<script>
export default {
    name:'InInput',
    props:{
        value:[String,Number],
        disabled: Boolean,
        type:{
            type:String,
            default:'text'
        },
        autoComplete:{
            type:String,
            default:'off'
        }
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
        handleInput(){
            this.$emit('input',this.currentValue);
        },
        handleFocus(e){
            this.$emit('focus',e);
        },
        handleBlur(e){
            this.$emit('blur',e);
        },
        handleChange(e){
            this.$emit('change',e);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-input{
    display: inline-block;
    box-sizing: border-box;
    padding: 0 30px;
    width: 100%;
    height: 40px;
    outline: none;
    -webkit-appearance: none;
    border: 1px solid @secondaryColor;
    border-radius:2px; 
    font-size: 14px;
    color: @regularColor;
}
.in-input:disabled{
    opacity: .6;
    background: #EEE;
    cursor: not-allowed;
}
.in-input-maxlength{
    padding: 0 10px;
}
</style>


