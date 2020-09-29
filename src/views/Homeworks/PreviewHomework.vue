<template>
  <div class="preview">
    <h1 class="title">挑战无处不在</h1>
    <hr class="line">
    <img class="photo" src="@/assets/img/homework/tp.jpg" alt="">
    <div class="txt">
      <p>我叫???，</p>
      <p>简单来说是一个憨批，</p>
      <p>不会 唱、跳、rap、篮球，</p>
      <p>只想学web设计。</p>
    </div>
    <div class="bottoms">
      <router-link to="/work/X" class="border">前端</router-link>
      <router-link to="/work/X" class="border">后端</router-link>
      <router-link to="/work/X" class="border">运维</router-link>
      <router-link to="/work/X" class="border">更多</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  *{padding: 0;margin: 0;}
  a{
    text-decoration: none;
    color: #ffffff;
  }
  .preview{
    background-color: #1a1e2e;
    color: #ffffff;
    text-align: center;
  }
  .title{
    padding-top: 50px;
    font-size: 80px;
    font-weight: lighter;
  }
  .photo{
    height: 200px;
    border-radius: 50%;
    margin: 20px;
  }
  .line{
    width: 530px;
    margin: auto;
  }
  .txt{
    width: 530px;
    margin: auto;
    font-size: 20px;
    line-height: 40px;
  }
  .bottoms{
    margin: 20px;
  }
  .border{
    padding: 0 22px;
    margin: 15px;
    font-size: 27px;
    border: 2px solid white;
    border-radius: 30px;
  }

</style>