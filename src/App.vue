<template>
  <div id="app">
    <Nav/>
    <router-view/> <!--内容显示区域-->
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  data: function () {
    return {

    }
  },
  components: {
    Nav,
  }
}
</script>

<style lang="scss">

$dark: #2c3e50; //基础文字颜色
$highlight: #42b983; //高亮文字颜色
$light: #d9f9f4; //高亮背景颜色

*{padding: 0; margin: 0;} //全局边界调零

::-webkit-scrollbar {display: none;} //消除滚动条


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; //字体（默认）

  /*字体抗锯齿渲染 */
  -webkit-font-smoothing: antialiased; //chrome、safari
  -moz-osx-font-smoothing: grayscale; //firefox
  
  text-align: center;
  color: $dark;
  background-color: $light;
  min-height: 100vh;

  a {
    text-decoration: none; //链接下划线取消
      color: $highlight;
  }
  
}

</style>

