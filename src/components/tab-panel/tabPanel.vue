<template>
    <div class="in-tab-panel" :class="{'in-tab-panel_active':label==currentLabel}">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InTabPanel',
    mixins: [Emitter],
    props:{
        label:String,
        default:''
    },
    data(){
        return {
            currentLabel:""
        }
    },
    mounted(){
        this.$on('change',this.change);
    },
    methods:{
        change(item){
            this.currentLabel = item;
        }
    }
}
</script>


