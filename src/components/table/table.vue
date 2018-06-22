<template>
    <table class="in-table"><slot></slot></table>
</template>
<script>
export default {
    name:'InTable'
}
</script>
<style lang="less" scoped>
@import '../../assets/css/base';
.in-table{
    width: 100%;
    border-collapse:collapse; 
    text-align: left;
    tr{
        border-bottom:1px solid @borderColor;
    }
    tbody tr{
        &:hover{
            background: #F5FBF8;
        }
    }
    th{
        font-weight: normal;
        color: #999;
        padding: 15px;
    }
    td{
        padding:15px;
        color: @regularColor;
        font-size: 14px;
    }
}
</style>


