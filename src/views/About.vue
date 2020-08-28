<template>
  <div class="about">
    <h1>This is just an about page for now.</h1>
    <hr>
    <p>其实我觉得欢迎页面有些东西放到这里来还比较合适</p>
    <p>所以hr标签除了用flex布局以外还有什么方法能居中对齐啊</p>
  </div>
</template>
<style lang="scss" scoped>
.about
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
hr {
  width: 800px;
  margin: 20px;
}
p{
  margin-bottom: 10px;
}
</style>