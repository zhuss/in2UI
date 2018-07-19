<script>
export default {
    data(){
        return {
            show1:false,
            show2:true,
            show3:false,
            show4:'100'
        }
    }
}
</script>

# switch 案例
---
### 基础用法

<div class="demo-block">
    <in-switch  v-model="show1"></in-switch> {{show1}}
</div>

::: demo
```html
<in-switch  v-model="show1"></in-switch>
<script>
export default {
    data() {
      return {
        show1: false
      }
    }
};
</script>
```
:::

### 禁用状态

<div class="demo-block">
    <in-switch  disabled v-model="show2"></in-switch>
    <in-switch  disabled v-model="show3"></in-switch>
</div>

::: demo
```html
<in-switch  disabled v-model="show2"></in-switch>
<in-switch  disabled v-model="show3"></in-switch>
```
:::

### 拓展value类型

<div class="demo-block">
    <in-switch  v-model="show4" 
                active-value="100"
                inactive-value="0">
    </in-switch> {{show4}}
</div>

::: demo
```html
<in-switch  v-model="show4"
            active-value="100"
            inactive-value="0">
</in-switch>

<script>
export default {
    data() {
      return {
        show4: '100'
      }
    }
};
</script>
```
:::

### 组件属性
|参数|说明|类型|可选值|默认值|
|--------|-------|---------|-----------|------|
| disabled | 是否禁用 | booblean | true/false | false |
| active-value | switch拓展的开值 | string/number/boolean | - | true |
| inactive-value | switch拓展的关值 | string/number/boolean | - | false |