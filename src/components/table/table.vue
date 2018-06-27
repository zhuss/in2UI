<template>
    <table class="in-table">
        <thead>
            <tr>
                <th v-for="item in labelArray">{{item}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in  data">
                <slot :row="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name:'InTable',
    props:{
        data:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            labelArray:[]
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
            let length = this.$children.length/this.data.length;
            for(let i = 0; i < length; i++){
                this.labelArray.push(this.$children[i].label);
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-table{
    width: 100%;
    border-collapse:collapse;
    text-align: left;
    >tbody tr{
        border-bottom:1px solid @borderColor;
        &:hover{    
            background: #F5FBF8;
        }
    }
    >thead{
        >tr{
            border-bottom:1px solid @borderColor;
            >th{
                font-size: 14px;
                font-weight: normal;
                color: #999;
                padding: 15px;
            }
        }
    }
}
</style>


