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
        value:[String,Number,Boolean],
        disabled:Boolean,
        activeValue:{
            type:[String,Number,Boolean],
            default:true
        },
        inactiveValue:{
            type:[String,Number,Boolean],
            default:false
        }
    },
    data(){
        return {
            currentValue:this.value == this.activeValue
        }
    },
    watch:{
        value(value){
          this.currentValue = this.value == this.activeValue;
        }
    },
    methods:{
        change(e){
            let value = this.currentValue?this.activeValue:this.inactiveValue;
            this.$emit('input',value);
            this.$emit('change',value);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-switch{
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 5px 0;
    box-sizing: border-box;
    vertical-align: middle;
    & + .in-switch{
        margin-left: 10px;
    }
    >.in-switch-warp{
        width: 40px;
        height: 30px;
        background: #FFF;
        cursor: pointer;
        position: relative;
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
            opacity: 0;
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
                transition: all .2s;
                &::after{
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: #FFF;
                    transition: left .2s;
                }
            }
            &:checked+.in-switch-point{
                background: @primaryColor;
                &::after{
                    left: 15px;
                }
            }
        }
    }
}
</style>

