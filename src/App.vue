<template>
  <div id="app">
    <Nav/>
    <router-view class="view"/> <!--内容显示区域-->
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
@import '@/scss/color';
*{padding: 0; margin: 0;} //全局边界调零

::-webkit-scrollbar {display: none;} //消除滚动条

a {
  text-decoration: none; //链接下划线取消
    color: $highlight;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; //字体（默认）

  /*字体抗锯齿渲染 */
  -webkit-font-smoothing: antialiased; //chrome、safari
  -moz-osx-font-smoothing: grayscale; //firefox
  
  text-align: center;
  color: $dark;
  background-color: $light;
  min-height: 100vh;

}
.view {
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 100%;
}
</style>

