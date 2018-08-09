<template>
    <div class="in-tab">
        <div class="in-tab-head">
            <div class="in-tab-item" :class="{'in-tab-item-active':currentLabel==item}" v-for="item in labelArray" @click="itemClick(item)">{{item}}</div>
        </div>
        <div class="in-tab-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InTab',
    mixins: [Emitter],
    props:{
        active:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            labelArray:[],
            currentLabel:""
        }
    },
    mounted(){
        this.initData();
    },
    methods:{
        initData(){
            this.initLabel();
        },
        initLabel(){
            for(let i =0; i < this.$children.length; i++){
                this.labelArray.push(this.$children[i].label);
            }
            if(this.labelArray.length>0){
                this.currentLabel = this.active||this.labelArray[0];
                this.broadcast('InTabPanel','change',this.currentLabel);
            }
        },
        itemClick(item){
          this.currentLabel = item;
          this.broadcast('InTabPanel','change',item);
        }
    }
}
</script>


