<template>
    <div>
        <div class="demo-block" ref="demo">
            <h2 class="demo-title">Tab标签案例</h2>
            <in-tab>
                <in-tab-panel label="我是博主">
                    大牌新品，小众尖货，免费试用有机会获得大牌青睐，各种合作接到手软辅助博主孵化，海量福利回馈粉丝
                </in-tab-panel>
                <in-tab-panel label="我是品牌">
                    丰富的博主资源精准匹配，提供最优质的推广全面的数据监测分析，投放效果一目了然专业的策划团队，量身打造专属推广方案
                </in-tab-panel>
                <in-tab-panel label="联系我们">
                    地址： 杭州市西湖区崇义路郡原公元里7幢3楼 电话： 400-880-1848 邮箱： 
                </in-tab-panel>
            </in-tab>  
        </div>
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

