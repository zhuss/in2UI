<template>
    <div class="demo-block">
        <h2 class="demo-block">选择开关</h2>
        <div class="demo-body">
            <in-switch disabled v-model="isShow"></in-switch>
            <in-switch v-model="isShow"></in-switch>
            <in-switch v-model="isShow"></in-switch>
            <span>{{isShow}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:true
        }
    }
}
</script>

