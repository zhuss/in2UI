<template>
    <div class="page-main">
        <div class="main-top">
            <div class="main-title">
                <a href="http://www.ingtube.com">
                    <img class="logo" src="../assets/logo_in2.png" alt="映兔logo">
                </a>
                <a href="http://www.ingtube.com">
                    <span>in2UI 组件库</span>
                </a>
            </div>
            <div class="main-notice">
                <span class="notice"><i class="fa fa-envelope-o"></i> 新消息 5</span>
            </div>
            <div class="main-login">
                <in-dropdown @command="command">
                   <span class="account"><i class="fa fa-user-circle-o"></i> zhushunsheng</span>
                   <in-dropdown-menu slot="dropdown">
                       <in-dropdown-item command="account">账户设置</in-dropdown-item>
                       <in-dropdown-item command="update">修改密码</in-dropdown-item>
                       <in-dropdown-item command="login">安全退出</in-dropdown-item>
                   </in-dropdown-menu>
                </in-dropdown>
            </div>
        </div>
        <div class="main-body">
            <div class="main-left">
                <in-nav :active="$route.name" @select="select">
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-diamond"></i> 基础 base</template>
                        <in-nav-item index="button">Button 案例</in-nav-item>
                    </in-sub-nav>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-pencil-square-o"></i> 表单 Form</template>
                        <in-nav-item index="input">Input 案例</in-nav-item>
                        <in-nav-item index="number">Number 案例</in-nav-item>
                        <in-nav-item index="select">Select 案例</in-nav-item>
                        <in-nav-item index="switch">Switch 案例</in-nav-item>
                        <in-nav-item index="radio">Radio 案例</in-nav-item>
                    </in-sub-nav>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-database"></i> 数据 Data</template>
                        <in-nav-item index="table">Table 案例</in-nav-item>
                    </in-sub-nav>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-clone"></i> 弹出层 view</template>
                        <in-nav-item index="model">Model 案例</in-nav-item>
                        <in-nav-item index="popover">Popover 案例</in-nav-item>
                    </in-sub-nav>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-clone"></i> 导航 nav</template>
                        <in-nav-item index="tab">tab 案例</in-nav-item>
                        <in-nav-item index="nav">nav 案例</in-nav-item>
                        <in-nav-item index="pagination">pagination 案例</in-nav-item>
                    </in-sub-nav>
                    
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
        command(command){
           if(command == 'login'){
               this.$router.replace({
                   name:'login'
               });
           }
        },
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
        background: linear-gradient(90deg, @primaryColor 0%, @primaryColor 50%,#4498F4 100%);
        display: flex;
        box-shadow: 0 2px 2px rgba(0,0,0,.2);
        z-index: 10;
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
                font-size: 20px;
                vertical-align: middle;
            }
        }
        >.main-notice{
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            >.notice{
                font-size: 14px;
                color: #FFF;
                cursor: pointer;
            }
        }
        >.main-login{
            padding: 10px 20px;
            height: 40px;
            line-height: 40px;
            .account{
                color: #FFF;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }
    >.main-body{
        flex: 1;
        display: flex;
        >.main-left{
            width: 300px;
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
            padding: 30px;
        }
        >.main-content::-webkit-scrollbar{
            width: 0;
            height: 0;
        }
    }
}
</style>

