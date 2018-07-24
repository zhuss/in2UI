<template>
    <button type="button" :disabled="disabled" class="in-button" :class="[type?'in-button__'+type:'',{'is-round':round}]" @click="handleClick" ><slot></slot></button>
</template>
<script>
export default {
    name:'InButton',
    props:{
        type:String,
        disabled: Boolean,
        round:Boolean
    },
    methods:{
        handleClick(e){
            this.$emit('click', e);
        }
    }
}
</script>

