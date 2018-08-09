<template>
    <div class="in-pagination">
        <div class="in-pagination-item in-pagination-disabled" style="margin-left: 0" v-show="current==1"><i class="icon-arrow-left"></i></div>
        <div class="in-pagination-item" v-show="current>1" style="margin-left: 0" @click="current--"><i class="icon-arrow-left"></i></div>
        <div class="in-pagination-item" :class="{'in-pagination-active':current==item}" v-for="item in pageArray" @click="current=item">{{item}}</div>
        <div class="in-pagination-item in-pagination-disabled" v-show="current==pageCount"><i class="icon-arrow-right"></i></div>
        <div class="in-pagination-item"  v-show="current<pageCount" @click="current++"><i class="icon-arrow-right"></i></div>
    </div>
</template>
<script>
export default {
    name:'InPagination',
    props:{
        currentPage:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:10
        },
        total:{
            type:Number,
            default:1
        }
    },
    data(){
        return{
            current:this.currentPage
        }
    },
    watch:{
        current(val){
            this.currentChange();
        }
    },
    computed:{
        pageCount(){
            return  Math.ceil(this.total/this.pageSize);
        },
        pageArray(){
            let pageArray = [];
            //当页码小于5时
            if(this.pageCount<=5){
                for(let i = 1; i <= this.pageCount; i++){
                    pageArray.push(i);
                }
            }else{
                if(this.current<=3){
                    pageArray = [1,2,3,4,5];
                }else if(this.current>3&&this.current<this.pageCount-2){
                    for(let i = 0; i <5; i++){
                        pageArray.push(this.current-2+i);
                    }
                }else{
                    for(let i = 1; i <= 5; i++){
                        pageArray.push(this.pageCount-5+i);
                    }
                }
            }
            return pageArray;
        }
    },
    methods:{
        currentChange(){
            this.$emit('currentChange',this.current);
        }
    }
}
</script>