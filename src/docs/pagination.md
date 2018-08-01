# Pagination 分页案例
---
### 基础用法

<div class="demo-block">
    <in-pagination :total="100"
                   :current-page="2"
                   :page-size="10">
    </in-pagination>
</div>


:::demo
```html

<in-pagination  :total="100"
                :current-page="2"
                :page-size="10">
</in-pagination>

```
:::


### pagination组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| total | 总条数 | number | 0 | 0 |
| page-size | 每页显示条数 | number | 0 | 10 |
| current-page | 当前页 | number | 0 | 1 |


### pagination组件属性组件事件
|事件名称|说明|参数回调|
|---|---|---|
| current-change | 点击页码的时候触发 | current |





