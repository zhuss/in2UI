<template>
    <button type="button" :disabled="disabled" class="in-button" :class="[type?'in-button__'+type:'',{'is-round':round}]" @click="handleClick" ><slot></slot></button>
</template>
<script>
export default {
    name:'InButton',
    props:{
        type:String,
        disabled: Boolean,
        round:Boolean
    },
    methods:{
        handleClick(e){
            this.$emit('click', e);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-button{
    margin: 0;
    display: inline-block;
    -webkit-appearance: none;
    padding: 0 30px;
    height: 40px;
    background: #FFF;
    border: 1px solid @secondaryColor;
    color: @regularColor;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    border-radius:2px;
}
.in-button+.in-button{
    margin-left: 10px;
}
.in-button__primary{
  background:@primaryColor;
  border: 1px solid @primaryColor;
  color: #FFF;
}
.in-button:disabled{
    opacity: .6;
    cursor: not-allowed;
}
.in-button.is-round{
    border-radius:40px;
}
</style>


