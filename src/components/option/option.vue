<template>
    <div class="in-option" :class="{'in-option-select':isSelect}" @click="itemClick">
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
        label:[String,Number]
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
            if(value.value == this.value){
                this.isSelect = true;
                this.itemClick();
            }else{
                this.isSelect = false;
            }
        },
        itemClick(){
            this.dispatch('InSelect', 'select',{value:this.value,label:this.label});
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base.less';
.in-option{
    padding: 0 30px;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        background: #EEE;
    }
}
.in-option-select{
    color: @primaryColor
}
</style>

