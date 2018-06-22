<template>
    <div class="demo-block">
        <h2 class="demo-block">选择开关/多选</h2>
        <div class="demo-body">
            <in-switch disabled v-model="form.isShow"></in-switch>
            <in-switch v-model="form.isShow"></in-switch>
            <in-switch v-model="form.isShow"></in-switch>
            <span>{{form.isShow}}</span>
        </div>
        <div class="demo-body">
            <span>是否喜欢前端:</span>
            <in-checkbox v-model="form.checkbox"></in-checkbox>
            <span>是否喜欢后端:</span>
            <in-checkbox v-model="form.checkbox"></in-checkbox>
            <span>是否喜欢我:</span>
            <in-checkbox disabled v-model="form.checkbox2"></in-checkbox>
        </div>
        <div class="demo-body">
            <in-radio v-model="form.gender" :label="1"></in-radio>男
            <in-radio v-model="form.gender" :label="0"></in-radio>女
            <in-radio disabled v-model="form.gender" :label="2"></in-radio>其他
        </div>
        <div class="demo-body">
            <in-button @click="click">取值</in-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                isShow:true,
                checkbox:false,
                checkbox2:true,
                gender:0
            }
        }
    },
    methods:{
        click(){
            this.$message(JSON.stringify(this.form));
        }
    }
}
</script>

