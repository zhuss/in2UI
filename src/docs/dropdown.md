<script>
export default {
    methods:{
        command(command){
            this.$message(command);
        }
    }
}
</script>
<style>
.account{
    cursor: pointer;
}
</style>
# dropdown 案例
---
### dropdown 基础用法

<div class="demo-block">
    <in-dropdown @command="command">
        <span class="account"><i class="fa fa-user-circle-o"></i> zhushunsheng</span>
        <in-dropdown-menu slot="dropdown">
            <in-dropdown-item command="account">账户设置</in-dropdown-item>
            <in-dropdown-item command="update">修改密码</in-dropdown-item>
            <in-dropdown-item command="login">安全退出</in-dropdown-item>
        </in-dropdown-menu>
    </in-dropdown>
</div>

::: demo
``` html

<in-dropdown @command="command">
    <span class="account"><i class="fa fa-user-circle-o"></i> zhushunsheng</span>
    <in-dropdown-menu slot="dropdown">
        <in-dropdown-item command="account">账户设置</in-dropdown-item>
        <in-dropdown-item command="update">修改密码</in-dropdown-item>
        <in-dropdown-item command="login">安全退出</in-dropdown-item>
    </in-dropdown-menu>
</in-dropdown>
<script>
export default {
    methods:{
        command(command){
            this.$message(command);
        }
    }
}
</script>

```
:::

### in-dropdown-menu组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| slot | 组件下拉选 | string | dropdown | dropdown |

### in-dropdown-item组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| command | 下拉选中的值 | string | - | - |


### dropdown组件事件
|事件名称|说明|参数回调|
|---|---|---|
| command | 组件选中下拉选的时候触发 | command |