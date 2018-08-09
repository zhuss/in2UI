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


