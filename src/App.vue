<template>
   <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
body,h1,h2,h3,p{
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
}
.demo-block{
    margin: 20px 0;
    .demo-title{
        line-height: 40px;
    }
    &+.demo-block{
        border-top:1px solid #e6e6e6;
    }
    .demo-body{
        .demo-input{
            display: inline-block;
            vertical-align: top;
            width: 300px;
        }
    }
}
</style>
