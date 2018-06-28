<template>
    <div class="demo-block">
        <h2 class="demo-title">Tab标签案例</h2>
        <in-tab>
            <in-tab-panel label="悬赏好创意">
               <in-form>
                   <in-form-item label="单品测评" :inline="true">
                       <in-switch v-model="form.solo"></in-switch>
                   </in-form-item>
               </in-form>
            </in-tab-panel>
            <in-tab-panel label="悬赏高EMV">
                <in-form>
                   <in-form-item label="EMV门槛" :inline="true">
                       <in-number v-model="form.emv" :min="50" :max="2000"></in-number>
                   </in-form-item>
               </in-form>
            </in-tab-panel>
            <in-tab-panel label="悬赏高排名">
                <in-form>
                   <in-form-item label="赏金总额" :inline="true">
                       <in-number v-model="form.number" :min="50" :max="2000"></in-number>
                   </in-form-item>
               </in-form>
            </in-tab-panel>
        </in-tab>  
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                solo:true,
                emv:1000,
                number:100
            }
        }
    }
}
</script>

