<template>
    <td class="in-table-column">
        <slot></slot>
    </td>
</template>
<script>
export default {
    name:'InTableColumn',
    props:{
        label:{
            type:String,
            default:""
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-table-column{
    padding:10px 15px;
    color: @regularColor;
    font-size: 14px;
}
</style>


