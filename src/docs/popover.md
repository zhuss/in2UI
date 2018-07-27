# popover 案例
---
基础用法

<div class="demo-block">
    <in-popover width="300px;">
        <span>显示弹出框</span>
        <span slot="content">popover弹出内容</span>
    </in-popover>
    <in-popover width="300px;" placement="top">
        <span>显示在上面</span>
        <span slot="content">popover弹出内容</span>
    </in-popover>
    <in-popover width="300px;" placement="left">
        <span>显示在左边</span>
        <span slot="content">popover弹出内容</span>
    </in-popover>
    <in-popover width="300px;" placement="right">
        <span>显示在右边</span>
        <span slot="content">popover弹出内容</span>
    </in-popover>
</div>

:::demo
```html
<in-popover width="300px;">
    <span>显示弹出框</span>
    <span slot="content">popover弹出内容</span>
</in-popover>
<in-popover width="300px;" placement="top">
    <span>显示在上面</span>
    <span slot="content">popover弹出内容</span>
</in-popover>
<in-popover width="300px;" placement="left">
    <span>显示在左边</span>
    <span slot="content">popover弹出内容</span>
</in-popover>
<in-popover width="300px;" placement="right">
    <span>显示在右边</span>
    <span slot="content">popover弹出内容</span>
</in-popover>
```
:::

### 组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| placement | 显示位置 | string | top/bottom/right/left | bottom |
| width | 显示的宽度 | string | - | - |