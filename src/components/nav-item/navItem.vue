<template>
    <div class="in-nav-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'InNavItem'
}
</script>
<style lang="less" scoped>
.in-nav-item{
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    &:hover{
        background: #EAEAEA;
    }
}
</style>
