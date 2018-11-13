<style>
</style>

<script>
export default {
    data(){
        return {
            show:false
        }
    }
};
</script>

# modal 案例
---
### 基础用法

<div class="demo-block">
    <in-button @click="show=true">显示modal</in-button>
    <in-modal title="选择邀约博主" v-model="show" width="800px">
        <in-form>
            <in-form-item label="用户昵称">
                <in-input></in-input>
            </in-form-item>
            <in-form-item label="用户账号">
                <in-input></in-input>
            </in-form-item>
            <in-form-item>
                <in-button @click="show=false" type="primary">确认</in-button>
                <in-button @click="show=false">取消</in-button>
            </in-form-item>
        </in-form>
    </in-modal>
</div>

::: demo
```html
<in-button @click="show=true">显示modal</in-button>
<in-modal title="选择邀约博主" v-model="show">
    <in-form>
        <in-form-item label="用户名称">
            <in-input></in-input>
        </in-form-item>
        <in-form-item>
            <in-button @click="show=false" type="primary">确认</in-button>
            <in-button @click="show=false">取消</in-button>
        </in-form-item>
    </in-form>
</in-modal>

<script>
export default {
    data(){
        return {
            show:false
        }
    }
};
</script>
```
:::

### 组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| title | 标题 | string | - | - |
| v-model | 是否显示 | boolean | false/true | false |
| width | 弹出层内容的宽度 | string | - | - |