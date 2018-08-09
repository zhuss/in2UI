<style>
.nav-wrap{
    width:260px;
}
</style>
# 导航案例
---
### 基础用法

<div class="demo-block">
    <div class="nav-wrap">
        <in-nav>
            <in-nav-item index="1">数据概览</in-nav-item>
            <in-nav-item index="2">商品管理</in-nav-item>
            <in-sub-nav inde="3">
                <template slot="title">物流管理</template>
                <in-nav-item index="3-1">博主物流</in-nav-item>
                <in-nav-item index="3-2">粉丝物流</in-nav-item>
            </in-sub-nav>
        </in-nav>
    </div>
</div>

:::demo
```html
<in-nav>
    <in-nav-item index="1">数据概览</in-nav-item>
    <in-nav-item index="2">商品管理</in-nav-item>
    <in-sub-nav inde="3">
        <template slot="title">物流管理</template>
        <in-nav-item index="3-1">博主物流</in-nav-item>
        <in-nav-item index="3-2">粉丝物流</in-nav-item>
    </in-sub-nav>
</in-nav>

```
:::

### in-sub-item组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| title | 标题 | string | - | - |

### in-nav-item组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| index | 唯一指定index | string | - | - |



### in-nav事件
|事件名称|说明|参数回调|
|---|---|---|
| select | 选中item的时候触发 | index |




