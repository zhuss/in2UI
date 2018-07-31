<script>
export default {
    methods:{
        messageClick(){
            this.$message("这是一条消息提示");
        },
        confirmClick(){
            this.$confirm({
                title:'消息标题',//消息标题
                text:'消息内容',//消息内容
                confirmButton:'确认',//确认按钮文字
                cancelButton:'取消',//取消按钮文字
                action:(action)=>{
                    console.log(action);
                }
            });
        }

    }
}
</script>
# message 案例
---
### message用法

<div class="demo-block">
    <in-button @click="messageClick">显示message</in-button>
</div>

:::demo
```html

<in-button @click="messageClick">显示message</in-button>
<script>
export default {
    methods:{
        messageClick(){
            this.$message("这是一条消息提示");
        }
    }
}
</script>

```
:::


### confirm用法

<div class="demo-block">
    <in-button @click="confirmClick">显示confirm</in-button>
</div>

:::demo
```html

<in-button @click="confirmClick">显示message</in-button>
<script>
export default {
    methods:{
        confirmClick(){
            this.$confirm({
                title:'消息标题',//消息标题
                text:'消息内容',//消息内容
                confirmButton:'确认',//确认按钮文字
                cancelButton:'取消',//取消按钮文字
                action:(action)=>{
                    console.log(action);
                }
            });
        }
    }
}
</script>

```
:::


### confirm组件参数
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| title | 提示标题 | string | - | 标题 |
| text | 提示文字内容 | string | - | 消息内容 |
| confirmButton | 确认按钮文字 | string | - | 确认 |
| cancelButton | 取消按钮文字 | string | - | 取消 |
| action | 点击按钮回调 返回confirm/cancel | function | - | - |



