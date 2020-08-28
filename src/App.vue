<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

$text-color-highlight: #42b983;
$text-color-base: #2c3e50;

*{padding: 0; margin: 0;}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  /*字体抗锯齿渲染 */
  -webkit-font-smoothing: antialiased;/*chrome、safari*/
  -moz-osx-font-smoothing: grayscale;/*firefox*/
  
  text-align: center;
  color: $text-color-base;

  a {
    text-decoration: none;
    color: $text-color-base;
  }
}

#nav {
  padding: 30px;

  a{
    font-weight: bold;

    &.router-link-exact-active {
      color: $text-color-highlight;
    }
  }
}


</style>
