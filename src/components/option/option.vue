<template>
    <div class="in-option" :class="{'in-option-select':isSelect,'in-option-disabled':disabled}" @click="itemClick">
        {{label}}
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
    mounted(){
        this.$on('init',this.initData);
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

