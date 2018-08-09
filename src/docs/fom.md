<script>
export default {
    data(){
        return {
            form:{
                name:"商用直饮水机R80",
                number:1,
                status:false,

            }
        }
    }
}
</script>
# form 案例
---
### 基础用法

<div class="demo-block">
    <in-form inline>
        <in-form-item label="活动名称">
            <in-input style="width:400px;" v-model="form.name"></in-input>
        </in-form-item>
        <in-form-item label="商品数量">
            <in-number v-model="form.number"></in-number>
        </in-form-item>
        <in-form-item label="粉丝服务">
            <in-switch v-model="form.status"></in-switch>
        </in-form-item>
        <in-form-item>
            <in-button type="primary">确认</in-button>
            <in-button>取消</in-button>
        </in-form-item>
    </in-form>
</div>


::: demo
``` html

<in-form>
    <in-form-item label="活动名称">
        <in-input style="width:400px;" v-model="form.name"></in-input>
    </in-form-item>
    <in-form-item label="商品数量">
        <in-number v-model="form.number"></in-number>
    </in-form-item>
    <in-form-item label="粉丝服务">
        <in-switch v-model="form.status"></in-switch>
    </in-form-item>
    <in-form-item>
        <in-button type="primary">确认</in-button>
        <in-button>取消</in-button>
    </in-form-item>
</in-form>

```
:::


### in-form 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| inline | 是否是label行内表单 | boolean | true/false | false |
| labelWidth | 表单label宽度 | string | - | - |