<template>
    <div class="page-login">
            <div class="form-login">
                 <div class="form-item">
                    <h2 class="form-title">后台登录</h2>
                </div>
                <div class="form-item">
                    <in-input placeholder="请输入邮箱"></in-input>
                </div>
                 <div class="form-item">
                    <in-input type="password" placeholder="请输入密码"></in-input>
                </div>
                <div class="form-item">
                    <in-button type="primary" style="width:100%;" @click="loginClick">登录</in-button>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    methods:{
        loginClick(){
            this.$router.push({
                name:'demo'
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
        >.form-item{
            margin-bottom: 24px;
        }
        .form-title{
            font-size: 18px;
            text-align: center;
        }
    }
}
</style>

