<template>
    <div class="in-switch">
        <div class="in-switch-warp">
            <input :disabled="disabled" class="in-switch-input" type="checkbox" v-model="currentValue" @change="change">
            <span class="in-switch-point"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'InSwitch',
    props:{
        value:Boolean,
        disabled:Boolean
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        value(value){
            this.currentValue = value;
        }
    },
    methods:{
        change(e){
            this.$emit('input',this.currentValue);
            this.$emit('change',e);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-switch{
    display: inline-block;
    width: 70px;
    height: 40px;
    padding: 5px;
    box-sizing: border-box;
    vertical-align: middle;
    >.in-switch-warp{
        width: 60px;
        height: 30px;
        background: #FFF;
        cursor: pointer;
        position: relative;
        border-radius:2px;
        >.in-switch-input{
            outline: none;
            position: absolute;
            left: 0;
            top: 0;
            -webkit-appearance: none;
            border: none;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            z-index: 1;
            &[disabled]{
               cursor: not-allowed;
               &+.in-switch-point{
                    opacity: .6;
               }
            }
            &+.in-switch-point{
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                background: @secondaryColor;
                border-radius:2px;
                transition: all .2s;
                &::after{
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    display: block;
                    width: 20px;
                    height: 20px;
                    border-radius:2px; 
                    background: #FFF;
                    transition: left .2s;
                }
            }
            &:checked+.in-switch-point{
                background: @primaryColor;
                &::after{
                    left: 35px;
                }
            }
        }
    }
}
</style>

