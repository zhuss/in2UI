<template>
    <div class="page-login">
            <div class="form-login">
                <in-form>
                    <in-form-item>
                        <h2 class="form-title">in2 后台登录 线上</h2>
                    </in-form-item>
                    <in-form-item>
                        <in-input placeholder="请输入邮箱" v-model="form.email"></in-input>
                    </in-form-item>
                    <in-form-item>
                        <in-input type="password" placeholder="请输入密码" v-model="form.password"></in-input>
                    </in-form-item>
                    <in-form-item>
                        <in-button  type="primary" 
                                    style="width:100%;" 
                                    @click="loginClick"
                                    :disabled="this.form.email.trim()==''||this.form.password.trim()==''">登录</in-button>
                    </in-form-item>
                </in-form>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        loginClick(){
            this.$message("登录成功");
            this.$router.push({
                name:'button'
            });
        }
    }
}
</script>
<style lang="less" scoped>
.page-login{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .form-login{
        width: 300px;
        margin: 0 auto;
    }
}
</style>

