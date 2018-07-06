<template>
    <div class="view-main">
        <div class="demo-block">
            <h2 class="demo-title">Popover弹出框</h2>
            <div class="demo-body">
                <in-popover width="300">
                    <in-button>click激活</in-button>
                    <div slot="content">
                        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
                    </div>
                </in-popover>
            </div>
        </div>
        <!--dropdown-->
        <div class="demo-block">
            <h2 class="demo-title">下拉菜单</h2>
            <div class="demo-body">
                <in-dropdown @command="command">
                   <in-button>下拉菜单</in-button>
                   <in-dropdown-menu slot="dropdown">
                       <in-dropdown-item command="a">账户设置</in-dropdown-item>
                       <in-dropdown-item command="b">修改密码</in-dropdown-item>
                       <in-dropdown-item command="c">安全退出</in-dropdown-item>
                   </in-dropdown-menu>
                </in-dropdown>

                <in-dropdown>
                   <in-button type="text">zhushunsheng@ingtube.com</in-button>
                   <in-dropdown-menu slot="dropdown">
                       <in-dropdown-item>账户设置</in-dropdown-item>
                       <in-dropdown-item>修改密码</in-dropdown-item>
                       <in-dropdown-item>安全退出</in-dropdown-item>
                   </in-dropdown-menu>
                </in-dropdown>
            </div>
        </div>
        <!--dropdown-->
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

                <in-button type="text">文字按钮</in-button>
                <in-button disabled type="text">文字按钮</in-button>
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
                    <in-input disabled  v-model="form.text"></in-input>
                </div>
            </div>
            <h2 class="demo-title">数字输入框</h2>
            <div class="demo-body">
                <div class="demo-input">
                    <in-number v-model="form.number" :step="5" :min="1" :max="100"></in-number>
                </div>
                <div class="demo-input">
                    <in-number v-model="form.number"></in-number>
                </div>
                <div class="demo-input">
                    <in-number disabled v-model="form.number"></in-number>
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

        <div class="demo-block">
            <h2 class="demo-title">默认提示</h2>
            <div class="demo-body">
                 <in-tip content="默认提示">
                    <span>默认提示</span>
                </in-tip>
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
        command(command){
           this.$message(command);
        },
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
    padding: 0;
    .demo-input{
        display: inline-block;
        vertical-align: top;
        width: 300px;
    }
}
</style>


