<template>
   <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
@import './assets/css/md.less';
@import '../node_modules/highlight.js/styles/color-brewer.css';

html,body{
    width: 100%;
    height: 100%;
}
body{
    -webkit-tap-highlight-color: transparent;
}
body,h1,h2,h3,p{
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
}
</style>
