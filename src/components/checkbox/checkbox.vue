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


