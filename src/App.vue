<template>
  <div id="app">
    <div id="nav"> <!--导航栏-->
      <router-link to="/">Welcome</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> <!--内容显示区域-->
  </div>
</template>

<style lang="scss">

$text-color-base: #2c3e50; //基础文字颜色
$text-color-highlight: #42b983; //高亮文字颜色

*{padding: 0; margin: 0;} //全局边界调零


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; //字体（默认）

  /*字体抗锯齿渲染 */
  -webkit-font-smoothing: antialiased; //chrome、safari
  -moz-osx-font-smoothing: grayscale; //firefox
  
  text-align: center;
  color: $text-color-base;

  a {
    text-decoration: none; //链接下划线取消
      color: $text-color-highlight;
  }
  
}

#nav { //导航栏
  padding: 30px;

  a{
    font-weight: bold;

    &.router-link-exact-active {
    color: $text-color-base;
    }
  }
}


</style>
