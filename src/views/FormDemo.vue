<template>
    <div class="demo-block">
         <h2 class="demo-title">表单案例</h2>
         <div class="demo-body">
             <in-form>
                 <in-form-item label="活动名称">
                     <in-input placeholder="请输入活动名称" v-model="form.title"></in-input>
                 </in-form-item>
                 <in-form-item label="活动描述">
                     <in-textarea v-model="form.description"></in-textarea>
                 </in-form-item>
                  <in-form-item label="活动类型">
                     <in-select v-model="form.type">
                        <in-option :value="1" label="试用活动"></in-option>
                        <in-option :value="2" label="秒杀活动"></in-option>
                        <in-option :value="3" label="悬赏活动"></in-option>
                     </in-select>
                 </in-form-item>
                 <in-form-item label="活动名额">
                     <in-number style="width:200px;" v-model="form.number" :min="1"></in-number>
                 </in-form-item>
                 <in-form-item label="是否独家">
                     <in-switch v-model="form.isSole"></in-switch>
                 </in-form-item>
                 <in-form-item label="测评渠道">
                     <in-checkbox-group v-model="form.channel">
                        <in-checkbox v-for="item in channelArray" :key="item.value" :label="item.value">
                            {{item.name}}
                        </in-checkbox>
                     </in-checkbox-group>
                 </in-form-item>
                 <in-form-item>
                     <in-button type="primary" @click="submitClick">确认</in-button>
                     <in-button>取消</in-button>
                 </in-form-item>
             </in-form>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            channelArray:[{name:'微博',value:1},{name:'小红书',value:2},{name:'美拍',value:3},{name:'B站',value:4}],
            form:{
                title:'',
                description:'',
                type:2,
                number:1,
                isSole:true,
                channel:[]
            }
        }
    },
    methods:{
        submitClick(){
            this.$message(JSON.stringify(this.form));
        }
    }
}
</script>

<style lang="less" scoped>
.demo-block{
    width: 500px;
}
</style>

