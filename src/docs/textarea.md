<script>
export default {
    data(){
        return {
            value:"123123"
        }
    }
}
</script>
#  textarea 多行文本输入框 案例
---
### 基础用法

<div class="demo-block">
    <in-textarea v-model="value"></in-textarea>
</div>

::: demo
```html

<in-textarea v-model="value"></textarea>

<script>
export default {
    data(){
        return {
            value:"123123"
        }
    }
}
</script>

```
:::

### 禁用用法

<div class="demo-block">
    <in-textarea disabled v-model="value"></in-textarea>
</div>

::: demo
```html

<in-textarea disabled v-model="value"></textarea>

<script>
export default {
    data(){
        return {
            value:"123123"
        }
    }
}
</script>

```
:::


### 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 输入框的值 | string/number | - | - |

### 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| focus | 组件获取焦点时触发 | event |
| blur | 组件失去焦点时触发 | event |
| change | 组件值改变时触发 | event |