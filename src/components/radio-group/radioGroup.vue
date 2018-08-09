<template>
    <div class="in-radio-group">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InRadioGroup',
    mixins: [Emitter],
    props:{
        value:[String,Number]
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        value(value){
            this.currentValue = value;
            this.broadcast('InRadio','init',this.currentValue);
        }
    },
    mounted(){
        this.$on('change',this.change);
        this.broadcast('InRadio','init',this.currentValue);
    },
    methods:{
        change(item){
           this.$emit('input',item);
        }
    }
}
</script>