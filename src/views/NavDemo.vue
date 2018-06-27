<template>
    <div class="demo-block">
        <div class="demo-nav">
            <in-nav active="2-1" @select="select">
                <in-nav-item index="1"><i class="fa fa-diamond"></i> 一级导航</in-nav-item>
                <in-sub-nav>
                    <template slot="title"><i class="fa fa-wifi"></i> 二级导航1</template>
                    <in-nav-item index="2-1">选项一</in-nav-item>
                    <in-nav-item index="2-2">选项二</in-nav-item>
                </in-sub-nav>
                <in-sub-nav>
                    <template slot="title"><i class="fa fa-graduation-cap"></i> 二级导航2</template>
                    <in-nav-item index="3-1">选项一</in-nav-item>
                    <in-nav-item index="3-2">选项二</in-nav-item>
                    <in-nav-item index="3-3">选项三</in-nav-item>
                </in-sub-nav>
                <in-sub-nav title="二级导航3">
                    <in-nav-item index="4-1">选项一</in-nav-item>
                    <in-nav-item index="4-2">选项二</in-nav-item>
                    <in-nav-item index="4-3">选项三</in-nav-item>
                </in-sub-nav>
            </in-nav>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        select(index){
            console.log(index);
        }
    }
}
</script>

<style lang="less" scoped>
.demo-nav{
    width: 300px;
}
</style>

