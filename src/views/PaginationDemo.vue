<template>
    <div class="demo-block">
        <h2 class="demo-title">分页器</h2>
        <div class="demo-body">
            <in-pagination :currentPage="1" :total="total" @currentChange="currentChange"></in-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            page:1,
            total:100
        }
    },
    methods:{
        currentChange(current){
            console.log(current);
        }
    }
}
</script>

