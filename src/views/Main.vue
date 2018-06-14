<template>
    <div class="view-main">
        <!-- 按钮 -->
        <div class="demo-block">
            <h2 class="demo-title">普通按钮</h2>
            <div class="demo-body">
                <in-button @click="clickOne">默认按钮</in-button>
                <in-button  @click="primaryClick" type="primary">主要按钮</in-button>

                <in-button round @click="confirmClick">圆角按钮</in-button>
                <in-button round type="primary">圆角按钮</in-button>

                <in-button :disabled="true">默认按钮</in-button>
                <in-button disabled type="primary">主要按钮</in-button>
            </div>
        </div>
        <!-- /按钮 -->
        <div class="demo-block">
            <h2 class="demo-title">输入框</h2>
            <div class="demo-body">
                <div class="demo-input">
                    <in-input v-model="form.text"
                              @focus="focus"
                              @blur="blur"
                              @change="change">
                    </in-input>
                </div>
                <div class="demo-input">
                    <in-input disabled  v-model="form.number"></in-input>
                </div>
            </div>
             <h2 class="demo-title">文本输入框</h2>
            <div class="demo-body">
                <div class="demo-input">
                    <in-textarea v-model="form.textArea"
                                 @change="textareaChange"
                                 @blur="textareaBlur"></in-textarea>
                </div>
                <div class="demo-input">
                    <in-textarea disabled v-model="form.textArea"></in-textarea>
                </div>
            </div>
        </div>

        <select-demo></select-demo>

        <pagination-demo></pagination-demo>

        <model-demo></model-demo>

        <switch-demo></switch-demo>
    </div>
</template>
<script>
import SelectDemo from './SelectDemo'
import PaginationDemo from './PaginationDemo'
import ModelDemo from './ModelDemo'
import SwitchDemo from './SwitchDemo'
export default {
    components:{
        SelectDemo,
        PaginationDemo,
        ModelDemo,
        SwitchDemo
    },
    data(){
        return {
            form:{
                text:'输入框文字',
                number:10,
                textArea:'喵喵喵'
            }
        }
    },
    methods:{
        clickOne(e){
            this.$message(JSON.stringify(this.form));
        },
        focus(e){
            console.log(e.type);
        },
        blur(e){
            console.log(e.type);
        },
        change(e){
            console.log(e.type);
        },
        textareaChange(e){
            console.log(e.type);
        },
        textareaBlur(e){
            console.log(e.type);
        },
        primaryClick(){
            this.$message("这是一条消息提示");
        },
        confirmClick(e){
            this.$confirm({
                title:'温馨提示',
                text:'确认从记忆里删除吗？',
                confirmButton:'去死吧',
                cancelButton:'再想想',
                action:(res)=>{
                    if(res == 'confirm'){
                        this.$message("删除成功");
                    }else{
                        this.$confirm({
                            action:(res)=>{
                                 this.$message("好吧");
                            }
                        })
                    }
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.view-main{
    padding: 0 40px;
    .demo-input{
        display: inline-block;
        vertical-align: top;
        width: 300px;
    }
}
</style>


