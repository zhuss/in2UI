<script>
export default {
    data(){
        return {
            value1:1,
            value2:1
        }
    }
};
</script>

# radio 案例
---
### 基础用法

<div class="demo-block">
    <in-radio v-model="value1" :label="1">试用活动</in-radio>
    <in-radio v-model="value1" :label="2">悬赏活动</in-radio>
    <in-radio v-model="value1" :label="3">探店活动</in-radio>
</div>

::: demo
``` html

<div class="demo-block">
    <in-radio v-model="value1" :label="1">试用活动</in-radio>
    <in-radio v-model="value1" :label="2">悬赏活动</in-radio>
    <in-radio v-model="value1" :label="3">探店活动</in-radio>
</div>
<script>
export default {
    data(){
        return {
            value1:1
        }
    }
};
</script>

```
:::


### radio-group用法

<div class="demo-block">
    <in-radio-group v-model="value2">
        <in-radio :label="1">试用活动</in-radio>
        <in-radio :label="2">悬赏活动</in-radio>
        <in-radio :label="3">探店活动</in-radio>
    </in-radio-group>
</div>

::: demo
``` html

<div class="demo-block">
    <in-radio-group v-model="value2">
        <in-radio :label="1">试用活动</in-radio>
        <in-radio :label="2">悬赏活动</in-radio>
        <in-radio :label="3">探店活动</in-radio>
    </in-radio-group>
</div>
<script>
export default {
    data(){
        return {
            value2:1
        }
    }
};
</script>

```
:::

### in-radio 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 当前选中的值 | string/number | - | - |
| label | 单选框的值 | string/number | - | - |

### in-radio 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| change | 组件值改变时触发 | event |

### in-radio-group 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| value(v-model) | 输入框的值 | string/number | - | - |
