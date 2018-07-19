<style>
.demo-input{
    width:200px;
}
</style>
<script>
export default {
    data(){
        return {
            value1:'哈哈哈哈',
            value2:'呵呵呵呵'
        }
    }
}
</script>

# input 案例
---
### 基础用法

<div class="demo-block">
    <div class="demo-input">
        <in-input v-model="value1"></in-input>
    </div>
</div>

::: demo
```html

<in-input v-model="value1"></in-input>
<script>
export default {
    data(){
        return {
            value1:'哈哈哈哈'
        }
    }
};
</script>

```
:::

### 禁用状态

<div class="demo-block">
    <div class="demo-input">
        <in-input disabled v-model="value2"></in-input>
    </div>
</div>

::: demo
```html

<in-input disabled v-model="value2"></in-input>
<script>
export default {
    data(){
        return {
            value2:'呵呵呵呵'
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

### 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| focus | 组件获取焦点时触发 | event |
| blur | 组件失去焦点时触发 | event |
| change | 组件值改变时触发 | event |

