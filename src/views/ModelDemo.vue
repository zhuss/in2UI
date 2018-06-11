<template>
    <div class="demo-block">
        <h2 class="demo-title">model弹出框</h2>
        <div class="demo-body">
            <in-button @click="btnClick">弹出层</in-button>
        </div>
        <!--model-->
        <in-model title="请输入账号密码" v-model="isShow">
            <div class="form">
                <div class="form-item">
                    <in-input></in-input>
                </div>
                <div class="form-item">
                    <in-input></in-input>
                </div>
                <div class="form-item">
                    <in-select v-model="select" :select="selectArray"></in-select>
                </div>
                <div class="form-item">
                    <in-button type="primary" @click="loginClick">登录</in-button>
                    <in-button @click="isShow = false">取消</in-button>
                </div>
            </div>
        </in-model>
        <!--/model-->
        <in-model title="内层弹出框" v-model="isShow2">
            <p>有本事别关</p>
        </in-model>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false,
            isShow2:false,
            select:'管理员',
            selectArray:['超级管理员','管理员','普通员工']
        }
    },
    methods:{
        btnClick(){
            this.isShow = true;
        },
        loginClick(){
            this.isShow2 = true;
        }
    }
}
</script>
<style lang="less" scoped>
.form{
    >.form-item{
        &+.form-item{
            margin-top: 24px;
        }
    }
}
</style>


