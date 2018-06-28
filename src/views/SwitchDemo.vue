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
            <in-checkbox v-model="form.checkbox" label="是否喜欢前端"></in-checkbox>
            <in-checkbox v-model="form.checkbox" label="是否喜欢后端"></in-checkbox>
            <in-checkbox disabled v-model="form.checkbox2" label="是否喜欢我"></in-checkbox>
        </div>
        <div class="demo-body">
            <in-checkbox-group v-model="form.hobby">
                <in-checkbox v-for="item in hobbyList" :key="item" :label="item"></in-checkbox>
            </in-checkbox-group>
            <in-checkbox-group v-model="form.hobby">
                <in-checkbox v-for="item in hobbyList" :key="item" :label="item"></in-checkbox>
            </in-checkbox-group>
        </div>
        <div class="demo-body">
            <in-radio v-model="form.gender" :label="1">男</in-radio>
            <in-radio v-model="form.gender" :label="0">女</in-radio>
            <in-radio disabled v-model="form.gender" :label="2">其他</in-radio>
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
            hobbyList:["篮球","羽毛球","排球","乒乓球"],
            form:{
                isShow:true,
                checkbox:false,
                checkbox2:true,
                gender:0,
                hobby:["羽毛球"]
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

