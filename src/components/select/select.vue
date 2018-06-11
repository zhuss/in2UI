<template>
    <div class="in-select" v-clickOutSide="clickOutSide">
      <div class="in-select-arrow-down"></div>
      <input :disabled="disabled"  v-model="currentValue" class="in-select-input" readonly type="text" placeholder="请选择" @focus="focus">
      <div class="in-select-panel" :style="{'z-index':zIndex}" v-show="isShow">
          <div class="in-select-item" :class="{'inselect-item__selected':item==currentValue}" v-for="item in select" @click="itemClick(item)">{{item}}</div>
      </div>
      <div class="in-select-arrow" v-show="isShow" :style="{'z-index':zIndex}" ></div>
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
    }
    >.in-select-arrow{
        position: absolute;
        left: 50%;
        top: 45px;
        transform:translateX(-5px) rotate(-45deg);
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top:1px solid @secondaryColor;
        border-right:1px solid @secondaryColor;
        background: #FFF;
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
    }
    >.in-select-panel{
        position: absolute;
        top: 50px;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 0;
        border: 1px solid @secondaryColor;
        border-radius: 2px;
        max-height: 200px;
        overflow-y: auto;
        background: #FFF;
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
    .in-select-panel::-webkit-scrollbar{
        width: 2px;
        height: 2px;
    }
    ::-webkit-scrollbar-thumb{
        background: rgba(0,0,0,.2);
    }
}
</style>

