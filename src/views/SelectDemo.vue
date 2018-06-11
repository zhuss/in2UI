<template>
    <div class="demo-block">
        <h2 class="demo-title">选择框</h2>
        <div class="demo-body">
            <div class="demo-select">
                 <in-select v-model="form.select1" :select="selectArray1" @change="change"></in-select>
            </div>
            <div class="demo-select">
                 <in-select v-model="form.select2" :select="selectArray2"></in-select>
            </div>
            <div class="demo-select">
                 <in-select disabled v-model="form.select2" :select="selectArray2"></in-select>
            </div>
            <div class="demo-button">
                <in-button @click="btnClick">显示</in-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectArray1:["上海","北京","杭州","黄山"],
            selectArray2:["电脑","手机","ipa","数据线","内存卡","U盘","充电器"],
            form:{
                select1:"上海",
                select2:"数据线"
            }
        }
    },
    methods:{
        btnClick(){
            alert(JSON.stringify(this.form));
        },
        change(){
            console.log('change');
        }
    }
}
</script>

<style lang="less" scoped>
.demo-block{
    .demo-select{
        width: 300px;
        display: inline-block;
        vertical-align: top;
    }
    .demo-button{
        display: inline-block;
        vertical-align: top;
    }
}
</style>
