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
                this.currentLabel = this.labelArray[0];
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
<style lang="less" scoped>
@import '../../assets/css/base.less';
.in-tab{
    width: 100%;
    >.in-tab-head{
        border-bottom: 1px solid #EEE;
        >.in-tab-item{
            display: inline-block;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            transition: all .3s;
            &+.in-tab-item{
                margin-left: 40px;
            }
            &::after{
                display: block;
                content:'';
                width: 100%;
                height: 1px;
                background: transparent;
                transition: all .3s;
            }
        }
        >.in-tab-item-active{
            color: @primaryColor;
            &::after{
                background: @primaryColor;
            }
        }
    }
}
</style>


