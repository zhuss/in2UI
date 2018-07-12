<template>
    <div class="page-main">
        <div class="main-top">
            <div class="main-title">
                <a href="http://www.ingtube.com">
                    <img class="logo" src="../assets/logo_in2.png" alt="映兔logo">
                </a>
                <a href="http://www.ingtube.com">
                    <span>in2UI</span>
                </a>
            </div>
            <div class="main-login">
                <router-link :to="{name:'login'}"><i class="fa fa-sign-out"></i> 退出登录</router-link>
            </div>
        </div>
        <div class="main-body">
            <div class="main-left">
                <in-nav :active="$route.name" @select="select">
                    <in-nav-item index="demo"><i class="fa fa-dashboard"></i> 案例合集</in-nav-item>
                    <in-nav-item index="model"><i class="fa fa-desktop"></i> 模态案例</in-nav-item>
                    <in-nav-item index="table"><i class="fa fa-table"></i> 表格案例</in-nav-item>
                    <in-nav-item index="nav"><i class="fa fa-bars"></i> 导航案例</in-nav-item>
                    <in-nav-item index="form"><i class="fa fa-pencil-square-o"></i> 表单案例</in-nav-item>
                    <in-nav-item index="tab"><i class="fa fa-tasks"></i> Tab案例</in-nav-item>
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
@import '../assets/css/base.less';
.page-main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    >.main-top{
        width: 100%;
        height: 60px;
        background:@primaryColor;
        display: flex;
        >.main-title{
            flex: 1;
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            >a{
                text-decoration: none;
                color: #FFF;
            }
            .logo{
                width: 40px;
                height: 40px;
                vertical-align: middle;
            }
            span{
                font-size: 26px;
                vertical-align: middle;
            }
        }
        >.main-login{
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            a{
                font-size: 14px;
               text-decoration: none;
               color: #EAEAEA;
               &:hover{
                   color: #FFF;
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
        >.main-content::-webkit-scrollbar{
            width: 0;
            height: 0;
        }
    }
}
</style>

