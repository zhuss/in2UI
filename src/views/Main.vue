<template>
    <div class="page-main">
        <div class="main-top">
            <div class="main-title">ingtubeUI</div>
            <div class="main-login">
                <router-link :to="{name:'login'}">退出登录</router-link>
            </div>
        </div>
        <div class="main-body">
            <div class="main-left">
                <in-nav :active="$route.name" @select="select">
                    <in-nav-item index="demo">案例合集</in-nav-item>
                    <in-nav-item index="model">模态案例</in-nav-item>
                    <in-nav-item index="table">表格案例</in-nav-item>
                    <in-nav-item index="nav">导航案例</in-nav-item>
                </in-nav>
            </div>
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        select(index){
            this.$router.push({
                name:index
            })
        }
    }
}
</script>
<style lang="less" scoped>
.page-main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    >.main-top{
        width: 100%;
        height: 60px;
        background: #25b864;
        display: flex;
        >.main-title{
            flex: 1;
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            color: #FFF;
        }
        >.main-login{
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            a{
               text-decoration: none;
               color: #414141;
               &:hover{
                   color: #666;
               }
            }
        }
    }
    >.main-body{
        flex: 1;
        display: flex;
        >.main-left{
            width: 200px;
            height: 100%;
            background: #EEE;
            >.nav{
                >.nav-item{
                    padding: 0  20px;
                    height: 50px;
                    line-height: 50px;
                    display: block;
                    text-decoration: none;
                    color: #333;
                    transition: all .3s;
                    &:hover{
                        background: #EAEAEA;
                    }
                }
                >.nav-active{
                    color: #25b864;
                }
            }
        }
        >.main-content{
            flex: 1;
            overflow: auto;
            padding: 10px;
        }
    }
}
</style>

