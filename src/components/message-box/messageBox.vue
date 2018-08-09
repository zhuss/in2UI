<template>
<transition name="in-message-fade">
    <div class="in-message-box" v-show="isShow" :style="{'z-index':zIndex}">
       <div class="in-message-panel">
            <div class="in-message-title">{{title}}</div>
            <div class="in-message-text">{{text}}</div>
            <div class="in-message-footer">
                <in-button type="primary" @click="confirmClick">{{confirmButton}}</in-button>
                <in-button @click="cancelClick">{{cancelButton}}</in-button>
            </div>
       </div>
    </div>
</transition>    
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
import InButton from '../button/button'
export default {
    components:{
        InButton
    },
    data(){
        return {
            isShow:false,
            zIndex:getMaxZindex()+1
        }
    },
    mounted(){
        this.isShow = true;
    },
    methods:{
        cloes(){
            this.isShow = false;
            setTimeout(()=>{
                this.$destroy();
                this.$el.remove();
            },300);
        },
        confirmClick(e){
            this.cloes();
            this.action('confirm');
        },
        cancelClick(e){
            this.cloes();
            this.action('cancel');
        }
    }
}
</script>

