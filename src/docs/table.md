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
    }
};
</script>

# table 案例
---
### 基础用法

<div class="demo-block">
    <in-table :data="list">
        <template slot-scope="scope">
            <in-table-column label="#">
                {{scope.index+1}}
            </in-table-column>
            <in-table-column label="昵称">
                {{scope.row.nickName}}
            </in-table-column>
            <in-table-column label="平台">
                {{scope.row.plat}}
            </in-table-column>
            <in-table-column label="邀请码">
                {{scope.row.code}}
            </in-table-column>
            <in-table-column label="操作" width="200">
                <in-button type="text">通过</in-button>
                <in-button type="text">拒绝</in-button>
            </in-table-column>
        </template>
    </in-table>
</div>


::: demo
```html
<in-table :data="list">
    <template slot-scope="scope">
        <in-table-column label="#">
            {{scope.index+1}}
        </in-table-column>
        <in-table-column label="昵称">
            {{scope.row.nickName}}
        </in-table-column>
        <in-table-column label="平台">
            {{scope.row.plat}}
        </in-table-column>
        <in-table-column label="邀请码">
            {{scope.row.code}}
        </in-table-column>
        <in-table-column label="操作" width="200">
            <in-button type="text">通过</in-button>
            <in-button type="text">拒绝</in-button>
        </in-table-column>
    </template>
</in-table>
```
:::

### in-table 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| data | 表格数据 | array | [] | - |

###  template 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| slot-scope | 通过slot-scope 可以取值到row 和 index | object | - | - |

###  in-table-column 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| label | 列标题 | string | - | - |