<template>
    <div class="demo-block">
        <in-table :data="list">
            <template slot-scope="scope">
                <in-table-column label="昵称">
                        {{scope.row.nickName}}
                </in-table-column>
                <in-table-column label="平台">
                    <in-tip :content="scope.row.nickName">
                        <span>{{scope.row.plat}}</span>
                    </in-tip>
                    
                </in-table-column>
                <in-table-column label="邀请码">
                    {{scope.row.code}}
                </in-table-column>
                <in-table-column label="状态">
                     {{scope.row.status}}
                </in-table-column>
                <in-table-column label="操作" width="200">
                    <in-button type="primary" @click="passClick">通过</in-button>
                    <in-button @click="refuseClick">拒绝</in-button>
                </in-table-column>
            </template>
        </in-table>
        <div class="pagination">
            <in-pagination :total="50"></in-pagination>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[{
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP0',
                status:'待审核'
            },{
                nickName:'就废话特别多0123123',
                plat:'小红书',
                code:'INGVIP30',
                status:'待发货'
            }]
        }
    },
    methods:{
        passClick(){
            this.$message("审核通过");
        },
        refuseClick(){
            this.$confirm({
                title:'温馨提示',
                text:'是否拒绝该博主的申请',
                confirmButton:'确定',
                cancelButton:'取消',
                action:(res)=>{
                    if(res == 'confirm'){
                        this.$message("操作成功");
                    }else{
                        return false;
                    }
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.pagination{
    margin-top: 30px;
    text-align: center;
}
</style>


