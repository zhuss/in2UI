<template>
    <div class="in-form" :class="{'in-form-inline':inline}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'InForm',
    props:{
        inline:Boolean
    }
}
</script>
<style lang="less" scoped>
.in-form{
    width: 100%;
}
</style>

