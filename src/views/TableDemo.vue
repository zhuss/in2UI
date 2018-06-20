<template>
    <div class="demo-block">
        <in-table>
            <thead>
                <tr>
                    <th>微博昵称</th>
                    <th>主要渠道</th>
                    <th>邀请码</th>
                    <th>审核状态</th>
                    <th width="200">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.nickName}}</td>
                    <td>{{item.plat}}</td>
                    <td>{{item.code}}</td>
                    <td>{{item.status}}</td>
                    <td>
                        <in-button type="primary" @click="passClick">通过</in-button>
                        <in-button @click="refuseClick">拒绝</in-button>
                    </td>
                </tr>
            </tbody>
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
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP0',
                status:'待审核'
            },{
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP0',
                status:'待审核'
            },{
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP0',
                status:'待审核'
            },{
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP0',
                status:'待审核'
            },{
                nickName:'就废话特别多',
                plat:'微博',
                code:'INGVIP9',
                status:'待审核'
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


