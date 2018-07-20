<script>
export default {
    data(){
        return {
            value1:10,
            value2:10,
            value3:10
        }
    }
};
</script>
# number 案例
---
### 基础用法

<div class="demo-block">
    <in-number v-model="value1"></in-number>
</div>

::: demo
```html

<in-number v-model="value"></in-number>

<script>
export default {
    data(){
        return {
            value:10
        }
    }
};
</script>

```
:::

### 禁用状态

<div class="demo-block">
    <in-number disabled v-model="value3"></in-number>
</div>

::: demo
```html

<in-number disabled v-model="value"></in-number>

<script>
export default {
    data(){
        return {
            value:10
        }
    }
};
</script>

```
:::


### 步长、最大值、最小值

<div class="demo-block">
    <in-number v-model="value2" :min="0" :max="100" :step="5"></in-number>
</div>

::: demo
```html

<in-number v-model="value2" :min="0" :max="100" :step="5"></in-number>

<script>
export default {
    data(){
        return {
            value:10
        }
    }
};
</script>

```
:::

### 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 输入框的值 | string/number | - | - |
| min | 最小数 | number | - | - |
| max | 最大值 | number | - | - |
| step | 加减步长 | number | - | 1 |

### 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| focus | 组件获取焦点时触发 | event |
| blur | 组件失去焦点时触发 | event |
| change | 组件值改变时触发 | event |
