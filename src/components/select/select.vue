<template>
    <div class="in-select" v-clickOutSide="clickOutSide">
      <div class="in-select-arrow-down" @click="focus"></div>
      <input :disabled="disabled"  v-model="label" class="in-select-input" readonly type="text" placeholder="请选择" @click="focus">
      <transition name="in-select-fade">
        <div class="in-select-panel" :style="{'z-index':zIndex}" v-show="isShow">
            <div class="in-select-arrow" :style="{'z-index':zIndex}" ></div>
            <div class="in-select-scroll">
                <slot></slot>
            </div>
        </div>
      </transition>
    </div>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
import clickOutSide from '../directives/clickOutside.js'
import Emitter from '../../utils/emitter.js'
export default {
    name:'InSelect',
    mixins:[Emitter],
    directives:{
        clickOutSide
    },
    props:{
        value:[String,Number],
        disabled: Boolean
    },
    data(){
        return {
            zIndex:1,
            isShow:false,
            currentValue:this.value,
            label:''
        }
    },
    watch:{
        value(value){
            this.currentValue = value;
            this.broadcast('InOption','init',{value:this.currentValue});
        }
    },
    mounted(){
        this.$on('select',this.itemClick);
        this.broadcast('InOption','init',{value:this.currentValue});
    },
    methods:{
        //获取当前页面的最大Index
        getIndex(){
            this.zIndex = getMaxZindex()+1;
        },
        focus(e){
            if(!this.isShow){
                this.getIndex();
            }
            this.isShow = !this.isShow;
        },
        clickOutSide(e){
            this.isShow = false;
        },
        itemClick(item){
            this.isShow = false;
            this.label = item.label;
            if(item.value != this.currentValue){
                this.$emit('input',item.value);
                this.$emit('change',item.value);
            }
        }
    }
}
</script>

