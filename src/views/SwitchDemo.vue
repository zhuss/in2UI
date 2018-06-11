<template>
    <div class="demo-block">
        <h2 class="demo-block">选择开关/多选</h2>
        <div class="demo-body">
            <in-switch disabled v-model="isShow"></in-switch>
            <in-switch v-model="isShow"></in-switch>
            <in-switch v-model="isShow"></in-switch>
            <span>{{isShow}}</span>
            <span>| 是否喜欢前端:</span>
            <in-checkbox v-model="checkbox"></in-checkbox>
            <span>| 是否喜欢后端:</span>
            <in-checkbox v-model="checkbox"></in-checkbox>
            <span>| 是否喜欢我:</span>
            <in-checkbox disabled v-model="checkbox2"></in-checkbox>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:true,
            checkbox:false,
            checkbox2:true
        }
    }
}
</script>

