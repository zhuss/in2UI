<template>
    <div class="in-select" v-clickOutSide="clickOutSide">
      <div class="in-select-arrow-down" @click="focus"></div>
      <input :disabled="disabled"  v-model="currentValue" class="in-select-input" readonly type="text" placeholder="请选择" @focus="focus">
      <transition name="fade">
        <div class="in-select-panel" :style="{'z-index':zIndex}" v-show="isShow">
            <div class="in-select-arrow" :style="{'z-index':zIndex}" ></div>
            <div class="in-select-scroll">
                <div class="in-select-item" :class="{'inselect-item__selected':item==currentValue}" v-for="item in select" @click="itemClick(item)">{{item}}</div>
            </div>
        </div>
      </transition>
    </div>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
import clickOutSide from '../directives/clickOutside.js'
export default {
    name:'InSelect',
    directives:{
        clickOutSide
    },
    props:{
        value:[String,Number],
        disabled: Boolean,
        select:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            zIndex:1,
            isShow:false,
            currentValue:this.value
        }
    },
    watch:{
        value(value){
            this.currentValue = value;
        }
    },
    methods:{
        //获取当前页面的最大Index
        getIndex(){
            this.zIndex = getMaxZindex()+1;
        },
        focus(e){
            this.getIndex();
            this.isShow = true;
        },
        clickOutSide(e){
            this.isShow = false;
        },
        itemClick(item){
            this.isShow = false;
            if(this.currentValue!= item){
                this.$emit('change',item);
            }
            this.currentValue = item;
            this.$emit('input',item);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.fade-enter-active, .fade-leave-active {
   transition: all .3s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(5px);
}
.in-select{
    display: inline-block;
    width: 100%;
    height: 40px;
    position: relative;
    >.in-select-arrow-down{
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 1px solid @secondaryColor;
        border-left: 1px solid @secondaryColor;
        right: 20px;
        top: 12px;
        z-index: 1;
        transform: rotate(-45deg);
        cursor: pointer;
    }
    >.in-select-input{
        position: absolute;
        box-sizing: border-box;
        padding: 0 50px 0 30px;
        width: 100%;
        height: 40px;
        outline: none;
        -webkit-appearance: none;
        border: 1px solid @secondaryColor;
        border-radius:2px; 
        font-size: 14px;
        color: @regularColor;
        cursor: pointer;
        &:disabled{
            opacity: .6;
            background: #EEE;
        }
    }
    >.in-select-panel{
        position: absolute;
        top: 50px;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid @secondaryColor;
        border-radius: 2px;
        background: #FFF;
        >.in-select-arrow{
            position: absolute;
            left: 50%;
            top: -10px;
            transform:translateX(-5px);
            width: 0;
            height: 0;
            border-bottom:10px solid @secondaryColor;
            border-left:10px solid transparent;
            border-right:10px solid transparent;
            &::after{
                position: absolute;
                left: -9px;
                top: 1px;
                content: '';
                display: block;
                width: 0;
                height: 0;
                border-bottom:9px solid #FFF;
                border-left:9px solid transparent;
                border-right:9px solid transparent;
            }
        }
        >.in-select-scroll{
            padding: 10px 0;
            max-height: 200px;
            overflow-y: auto;
            >.in-select-item{
                padding: 0 30px;
                line-height: 30px;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    background: #EEE;
                }
            }
            >.inselect-item__selected{
                color: @primaryColor;
            }
        }
    }
    .in-select-scroll::-webkit-scrollbar{
        width: 2px;
        height: 2px;
    }
    ::-webkit-scrollbar-thumb{
        background: rgba(0,0,0,.2);
    }
}
</style>

