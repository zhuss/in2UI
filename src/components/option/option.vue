<template>
    <div class="in-option" :class="{'in-option-select':isSelect,'in-option-disabled':disabled}" @click="itemClick">
        {{currentLabel}}
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InOption',
    mixins:[Emitter],
    props:{
        value:[String,Number],
        label:[String,Number],
        disabled:Boolean
    },
    data(){
        return {
            isSelect:false
        }
    },
    computed:{
        currentLabel() {
            return this.label || (this.isObject ? '' : this.value);
        },
    },
    mounted(){
        this.$on('init',this.initData);
    },
    watch:{
        currentLabel(value) {
            if(this.isSelect){
                this.dispatch('InSelect', 'select',{value:this.value,label:this.label});
            }
        },
    },
    methods:{
        initData(value){
            if(value.value === this.value){
                this.isSelect = true;
                this.dispatch('InSelect', 'select',{value:this.value,label:this.label});
            }else{
                this.isSelect = false;
            }
        },
        itemClick(){
            if(this.disabled){
                return false;
            }else{
                this.dispatch('InSelect', 'select',{value:this.value,label:this.label});
            }
        }
    }
}
</script>

