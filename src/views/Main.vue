<template>
    <div class="page-main">
        <div class="main-top">
            <div class="main-title">
                <a href="javascript:;">
                    <img class="logo" src="../assets/logo_in2.png" alt="映兔logo">
                </a>
                <a href="javascript:;">
                    <span>in2UI 组件库</span>
                </a>
            </div>
            <div class="main-notice">
                <a class="notice" href="https://github.com/zhuss/in2UI">github</a>
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
                    <in-nav-item index="button"><i class="fa fa-diamond"></i> Button 案例</in-nav-item>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-pencil-square-o"></i> 表单 Form</template>
                        <in-nav-item index="input">Input 案例</in-nav-item>
                        <in-nav-item index="textarea">Textarea 案例</in-nav-item>
                        <in-nav-item index="number">Number 案例</in-nav-item>
                        <in-nav-item index="select">Select 案例</in-nav-item>
                        <in-nav-item index="datepicker">Datepicker 案例</in-nav-item>
                        <in-nav-item index="citypicker">Citypicker 案例</in-nav-item>
                        <in-nav-item index="switch">Switch 案例</in-nav-item>
                        <in-nav-item index="radio">Radio 案例</in-nav-item>
                        <in-nav-item index="checkbox">Checkbox 案例</in-nav-item>
                        <in-nav-item index="form">Form 案例</in-nav-item>
                    </in-sub-nav>
                    <in-nav-item index="table"><i class="fa fa-table"></i>  Table 案例</in-nav-item>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-clone"></i> 弹出层 view</template>
                        <in-nav-item index="modal">Modal 案例</in-nav-item>
                        <in-nav-item index="popover">Popover 案例</in-nav-item>
                        <in-nav-item index="message">Message 案例</in-nav-item>
                        <in-nav-item index="dropdown">Dropdown 案例</in-nav-item>
                        <in-nav-item index="tip">Tip 案例</in-nav-item>
                    </in-sub-nav>
                    <in-sub-nav>
                        <template slot="title"><i class="fa fa-bars"></i> 导航 nav</template>
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
        background:rgba(18,170,156,1);
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
        >.main-left::-webkit-scrollbar{
            width: 0;
            height: 0;
        }
        >.main-left{
            width: 200px;
            height: 100%;
            overflow: auto;
            background: #FFF;
            border-right:1px solid #E6E6E6;
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

