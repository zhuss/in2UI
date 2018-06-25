<template>
    <div class="demo-block">
        <div class="demo-nav">
            <in-nav active="1">
                <in-nav-item index="1">一级导航</in-nav-item>
                <in-sub-nav title="二级导航1">
                    <in-nav-item index="2-1">选项一</in-nav-item>
                    <in-nav-item index="2-2">选项二</in-nav-item>
                </in-sub-nav>
                 <in-sub-nav title="二级导航2">
                    <in-nav-item index="3-1">选项一123123</in-nav-item>
                    <in-nav-item index="3-2">选项123123</in-nav-item>
                    <in-nav-item index="3-3">选项123123</in-nav-item>
                </in-sub-nav>
            </in-nav>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
.demo-nav{
    width: 300px;
}
</style>

