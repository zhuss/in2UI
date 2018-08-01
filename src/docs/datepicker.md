<script>
export default {
    data(){
        return {
            date1:'',
            date2:'2018-08-01'
        }
    }
}
</script>
# datepicker 案例
---
### 基础用法

<div class="demo-block"> 
    <in-datepicker  v-model="date1"></in-datepicker>
    <in-datepicker disabled v-model="date2"></in-datepicker>
</div>

::: demo
``` html 

<in-datepicker  v-model="date1"></in-datepicker>
<in-datepicker disabled v-model="date2"></in-datepicker>

```
:::


### in-datepicker 组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 选框的值 | booblean | false | false |

### in-datepicker 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| focus | 组件获取焦点时触发 | event |
| blur | 组件失去焦点时触发 | event |
| change | 组件值改变时触发 | event |