<template>
    <div class="in-form" :class="{'in-form-inline':inline}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'InForm',
    props:{
        inline:Boolean,
        labelWidth:String
    }
}
</script>

