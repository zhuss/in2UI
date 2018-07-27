# Pagination 分页案例
---
### 基础用法

<div class="demo-block">
    <in-pagination :total="100"
                   :currentPage="2"
                   :pageSize="10">
    </in-pagination>
</div>


:::demo
```html

<in-pagination  :total="100"
                :currentPage="2"
                :pageSize="10">
</in-pagination>

```
:::


### pagination组件属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| total | 总条数 | number | 0 | 0 |
| pageSize | 每页显示条数 | number | 0 | 10 |
| currentPage | 当前页 | number | 0 | 1 |


### pagination组件属性组件事件
|事件名称|说明|参数回调|
|---|---|---|
| currentChange | 点击页码的时候触发 | current |





