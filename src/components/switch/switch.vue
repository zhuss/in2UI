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

