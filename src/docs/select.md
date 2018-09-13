<style>
.demo-select{
    width:200px;
}
</style>
<script>
export default {
    data(){
        return {
            value1:1,
            value2:'黄山',
            value3:'杭州',
            listIndex:0,
            list:[['上海','北京','黄山','杭州'],['上海2','北京2','黄山2','杭州2']],
        }
    },
    methods:{
        change(){
            this.listIndex = 1;
        }
    }
}
</script>

# select 案例
---
### 基础用法

<div class="demo-block">
    <div class="demo-select">
        <in-select v-model="value1">
            <in-option :value="index" :label="item" v-for="(item,index) in list[listIndex]" :key="index"></in-option>
        </in-selet>
    </div>
    <div><in-button @click="change">切换</in-button></div>
</div>

::: demo
```html
<in-select v-model="value1">
    <in-option value="上海" label="上海"></in-option>
    <in-option value="北京" label="北京"></in-option>
    <in-option value="黄山" label="黄山"></in-option>
    <in-option value="杭州" label="杭州"></in-option>
</in-selet>
<script>
export default {
    data(){
        return {
            value1:'上海'
        }
    }
};
</script>
```
:::


### 禁用状态

<div class="demo-block">
    <div class="demo-select">
        <in-select v-model="value2" disabled>
            <in-option value="上海" label="上海"></in-option>
            <in-option value="北京" label="北京"></in-option>
            <in-option value="黄山" label="黄山"></in-option>
            <in-option value="杭州" label="杭州"></in-option>
        </in-selet>
    </div>
</div>

::: demo
```html
<in-select v-model="value2" disabled>
    <in-option value="上海" label="上海"></in-option>
    <in-option value="北京" label="北京"></in-option>
    <in-option value="黄山" label="黄山"></in-option>
    <in-option value="杭州" label="杭州"></in-option>
</in-selet>
<script>
export default {
    data(){
        return {
            value2:'黄山'
        }
    }
};
</script>
```
:::

### 有禁用选项

<div class="demo-block">
    <div class="demo-select">
        <in-select v-model="value3">
            <in-option value="上海" label="上海"></in-option>
            <in-option value="北京" label="北京"></in-option>
            <in-option value="黄山" label="黄山"></in-option>
            <in-option disabled value="杭州" label="杭州"></in-option>
        </in-selet>
    </div>
</div>

::: demo
```html
<in-select v-model="value3">
    <in-option value="上海" label="上海"></in-option>
    <in-option value="北京" label="北京"></in-option>
    <in-option value="黄山" label="黄山"></in-option>
    <in-option disabled value="杭州" label="杭州"></in-option>
</in-selet>
<script>
export default {
    data(){
        return {
            value3:'杭州'
        }
    }
};
</script>
```
:::

### in-select 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value(v-model) | 选择框的值 | string/number | - | - |


### in-option 组件属性
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| disabled | 是否禁用 | booblean | true/false | false |
| value | 选项的值 | string/number | - | - |
| lable | 选项显示的标签值 | string/number | - | - |


### 组件事件
|事件名称|说明|参数回调|
|---|---|---|
| change | 组件值改变时触发 | event |
