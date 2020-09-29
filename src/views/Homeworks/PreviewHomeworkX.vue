<template>
  <div class="previewX">
    <p class="title">挑战无处不<span class="zai">在</span></p>
    <div class="card">
      <div class="txt">
        <img class="photo" src="@/assets/img/homework/tp2.jpg" alt=""><div class="inline">
          <p>我叫ff，</p>
          <p>是挑战最可爱的总监，</p>
          <p>喜欢 唱、跳、rap、篮球，</p>
          <p>不用学web设计。</p>
        </div>
      </div>
      <div class="bottoms">
        <router-link to="/work" class="border">前<span class="zai">端</span></router-link>
        <router-link to="/work" class="border">后<span class="zai">端</span></router-link>
        <router-link to="/work" class="border">运<span class="zai">维</span></router-link>
        <router-link to="/work" class="border">更<span class="zai">多</span></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  *{padding: 0;margin: 0;}
  a{
    text-decoration: none;
    color: #ffffff;
  }
  .previewX{
    background-color: #ffffff;
    background-color: #272f47;
    background-color: #1a1e2e;
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
  .title{
    font-size: 80px;
    letter-spacing: 22px;
    font-weight: lighter;
    margin-top: 110px;
  }
  .zai{
    letter-spacing: 0;
  }
  .line{
    width: 500px;
    background-color: white;
    margin: auto;
    margin-top: 5px;
  }
  .txt{
    width: 530px;
    margin: 30px auto 37px auto;
    padding: 5px 0;
    font-size: 20px;
  }
  .photo{
    display: inline-block;
    height: 160px;
    margin: 0 52px;
    border-radius: 20px;
    vertical-align: top;
  }
  .inline{
    display: inline-block;
    line-height: 40px;
    border-left: solid 2px;
    padding: 0 0 0 25px;
    text-align: left;
    vertical-align: top;
  }
  .border{
    padding: 5px 20px;
    margin: 12px;
    font-size: 20px;
    letter-spacing: 20px;
    border: 2px solid;
    border-radius: 20px;
  }
  .card{
    background-color: #000000;
    width: 530px;
    height: 270px;
    padding: 10px 30px 37px 30px;
    margin: auto;
    margin-top: 25px;
    border-radius: 20px;
  }

</style>