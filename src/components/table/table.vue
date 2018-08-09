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


