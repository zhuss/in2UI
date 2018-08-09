<template>
    <td>
        <slot></slot>
    </td>
</template>
<script>
export default {
    name:'InTableColumn',
    props:{
        label:{
            type:String,
            default:''
        }
    }
}
</script>


