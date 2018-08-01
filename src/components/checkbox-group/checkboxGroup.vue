<template>
    <div class="in-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InCheckboxGroup',
    mixins: [Emitter],
    props:{
        value:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        value(value){
            this.currentValue = value;
            this.broadcast('InCheckbox','init',{value:this.currentValue});
        }
    },
    mounted(){
        this.$on('change',this.change);
        this.broadcast('InCheckbox','init',{value:this.currentValue});
    },
    methods:{
        change(item){
           let  index = this.currentValue.indexOf(item);
           if(index>-1){
              this.currentValue.splice(index,1);
           }else{
               this.currentValue.push(item);
           }
           this.$emit('input',this.currentValue);
        }
    }
}
</script>
