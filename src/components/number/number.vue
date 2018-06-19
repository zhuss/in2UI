<template>
    <div class="in-number">
        <button :disabled="disabled||currentValue<=min" class="in-number-button" type="button" @click="buttonClick(-step)">－</button>
        <input :disabled="disabled"
               autocomplete="off"
               class="in-number-input"
               type="text"
               @input="handleInput"
               @focus="handleFocus" 
               @blur="handleBlur"
               @change="handleChange"
               :value="currentValue"
               spellcheck="false">
        <button :disabled="disabled||currentValue>=max" class="in-number-button" type="button" @click="buttonClick(step)">＋</button>
    </div>
</template>
<script>
export default {
    name:'InNumber',
    props:{
        value:{
            type:[Number,String],
            default:0
        },
        disabled:Boolean,
        step:{
            type:Number,
            default:1
        },
        min:{
            type:Number,
            default:-999999999999999
        },
        max:{
            type:Number,
            default:999999999999999
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
        handleInput(e){
            let val = event.target.value.trim();
            if(val == ''|| val == '-'){
                this.currentValue = val;
                this.$emit('input',this.currentValue);
            }else{
                val = Number(val);
                if(!isNaN(val)&&val<=999999999999999&&val>=-999999999999999){
                    event.target.value = val;
                    this.currentValue = val;
                    this.$emit('input',this.currentValue);
                }else{
                    event.target.value = this.currentValue;
                }
            }
            
        },
        handleFocus(e){
            this.$emit('focus',e);
        },
        handleBlur(e){
            this.$emit('blur',e);
        },
        handleChange(e){
            this.$emit('change',e);
        },
        buttonClick(number){
            let value =  this.currentValue*1+number;
            if(value < this.min){
                value = this.min
            }
            if(value > this.max){
                value = this.max
            }
            this.currentValue  = value;
            this.$emit('input',this.currentValue*1);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-number{
    width: 100%;
    height: 40px;
    border: 1px solid @secondaryColor;
    box-sizing: border-box;
    display: inline-flex;
    vertical-align: middle;
    border-radius:2px; 
    >.in-number-button{
        padding: 0;
        margin: 0;
        width: 38px;
        height: 38px;
        border: none;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        color: @regularColor;
        &[disabled]{
            opacity: .6;
            cursor: not-allowed;
        }
    }
    >.in-number-input{
        display: block;
        outline: none;
        padding: 0 30px;
        flex: 1;
        border: none;
        border-left:1px solid  @secondaryColor;
        border-right:1px solid  @secondaryColor;
        font-size: 14px;
        color: @regularColor;
         &[disabled]{
            opacity: .6;
            cursor: not-allowed;
        }
    }
}
</style>


