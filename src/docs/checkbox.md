<script>
export default {
    data(){
        return {
            value1:true,
            value2:[]
        }
    }
}
</script>
# checkbox 案例
---
### 基础用法

<div class="demo-block">
    <in-checkbox v-model="value1"></in-checkbox> {{value1}}
</div>

:::demo
```html

<in-checkbox v-model="value1"></in-checkbox> {{value1}}

<script>
export default {
    data(){
        return {
            value1:true
        }
    }
}
</script>

```
:::


### 多选框组

<div class="demo-block">
<in-checkbox-group v-model="value2">
    <in-checkbox :label="1">微博</in-checkbox>
    <in-checkbox :label="2">小红书</in-checkbox>
    <in-checkbox :label="3">B站</in-checkbox>
</in-checkbox-group>

{{value2}}
</div>

:::demo
```html

<in-checkbox-group v-model="value2">
    <in-checkbox :label="1">微博</in-checkbox>
    <in-checkbox :label="2">小红书</in-checkbox>
    <in-checkbox :label="3">B站</in-checkbox>
</in-checkbox-group>
<script>
export default {
    data(){
        return {
            value2:true
        }
    }
}
</script>

```
:::

### in-checkbox 组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 选框的值 | booblean | false | false |
| label |  在in-checkbox-group 选框的值 | string/number | - | - |


### in-checkbox-group 组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| value(v-model) | 选框的值 | array | [] | [] |

