# tabs 案例
---
### tab 基础用法

<div class="demo-block">
    <in-tab active="悬赏活动">
        <in-tab-panel label="试用活动">
            <in-form inline label-width="60px">
                <in-form-item label="活动名称">
                    <in-input style="width:400px;"></in-input>
                </in-form-item>
                <in-form-item label="活动库存">
                    <in-number></in-number>
                </in-form-item>
                <in-form-item>
                    <in-button type="primary">保存</in-button>
                    <in-button>取消</in-button>
                </in-form-item>
            </in-form>
        </in-tab-panel>
        <in-tab-panel label="悬赏活动">
            <div>
                <p>请联系我们的小二进行</p>
                <p>联系电话：13250801281</p>
            </div>
        </in-tab-panel>
        <in-tab-panel label="探店活动">
            <div>暂时未开放</div>
        </in-tab-panel>
    </in-tab>
</div>


:::demo
```html

<in-tab active="悬赏活动">
    <in-tab-panel label="试用活动">
        <in-form inline label-width="60px">
            <in-form-item label="活动名称">
                <in-input style="width:400px;"></in-input>
            </in-form-item>
            <in-form-item label="活动库存">
                <in-number></in-number>
            </in-form-item>
            <in-form-item>
                <in-button type="primary">保存</in-button>
                <in-button>取消</in-button>
            </in-form-item>
        </in-form>
    </in-tab-panel>
    <in-tab-panel label="悬赏活动">
        <div>
            <p>请联系我们的小二进行</p>
            <p>联系电话：13250801281</p>
        </div>
    </in-tab-panel>
    <in-tab-panel label="探店活动">
        <div>暂时未开放</div>
    </in-tab-panel>
</in-tab>

```
:::



### in-tab 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| active  | 当前选中tab的label | string | - | - |

### in-tab-cloumn 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| label  | tab-cloumn的名称 | string | - | - |