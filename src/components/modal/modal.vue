<template>
    <transition name="in-model-fade">
        <div class="in-model" v-show="value" :style="{'z-index':zIndex}" @click.self="close">
            <div class="in-model-panel" :style="{width:width}">
                <div class="in-model-title">
                    <div class="in-model-text">{{title}}</div>
                    <div class="in-model-close" @click="close">×</div>
                </div>
                <div class="in-model-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import {getMaxZindex} from '../../utils/dom.js'
export default {
    name:'InModal',
    props:{
        title:String,
        value:Boolean,
        width:String
    },
    data(){
        return {
            zIndex:1
        }
    },
    watch:{
        value(val){
            if(val){
                this.zIndex = getMaxZindex()+1;
            }
        }
    },
    methods:{
        close(){
            this.$emit('input',false);
        }
    }
}
</script>