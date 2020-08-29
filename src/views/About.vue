<template>
  <div class="about">
    <h1>This is just an about page for now.</h1>
    <hr>
    <h3>相关插件文档：</h3>
    <ul>
      <li><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener">Vue CLI</a></li>
      <li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">Vue Router</a></li>
      <li><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener">Vuex</a></li>
      <li><a href="https://www.sass.hk/docs/" target="_blank" rel="noopener">scss</a></li>  
    </ul>
    <h3>相关教程：</h3>
    <ul>
      <li><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noopener">Flex 布局</a></li>
      <li><a href="https://www.liaoxuefeng.com/wiki/896043488029600" target="_blank" rel="noopener">Git</a></li>
      <li><a href="https://segmentfault.com/a/1190000009404727" target="_blank" rel="noopener">Vuex</a></li>
      <li><a href="https://www.sass.hk/guide/" target="_blank" rel="noopener">scss</a></li>  
    </ul>
    <hr>
    <p>所以hr标签除了用flex布局以外还有什么方法能居中对齐啊</p>
  </div>
</template>

<style lang="scss" scoped>
.about
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
}
hr {
  max-width: 100vw;
  width: 600px;
  margin: 20px;
}
p{
  margin-bottom: 10px;
}
h3{
  margin: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>