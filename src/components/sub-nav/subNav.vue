<template>
    <div class="in-sub-nav">
        <div class="in-sub-title"  @click="isOpen=!isOpen">{{title}}</div>
        <div class="in-sub-warp" :style="{height:isOpen?height+'px':'0px'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
    name:'InSubNav',
    mixins: [Emitter],
    props:{
        title:String
    },
    data(){
        return {
            isOpen:false,
            height:0
        }
    },
    computed:{
        indexList(){
            let list = [];
            for(let i = 0; i < this.$children.length; i++){
                list.push(this.$children[i].index);
            }
            return list;
        }
    },
    created(){
        this.$on('change',this.change);
    },
    mounted(){
        this.$on('item-click', this.handleItemClick);
        this.height = 50*this.$children.length;
    },
    methods:{
        handleItemClick(index){
             this.dispatch('InNav','item-click',index);
        },
        change(index){
           if(this.indexList.indexOf(index)>-1){
               this.isOpen = true;
           }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-sub-nav{
    >.in-sub-title{
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        color: @regularColor;
        &:hover{
            background: #EAEAEA;
        }
    }
    >.in-sub-warp{
        overflow: hidden;
        transition: all .3s;
        >.in-nav-item{
           padding-left: 40px;
        }
    }
}
</style>


