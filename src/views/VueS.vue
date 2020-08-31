<template>
  <div class="VueS">
    <h1>What is VueS ?</h1>
    <hr>
    <h3>请输入你的名字</h3>
    <input type="text" v-model="name" placeholder="你的名字">
    <h1 v-show="name">你好，{{name}}</h1>
    <h1 v-show="name">欢迎<span v-show="name!='肖亦乔' && name!='NPER2012'">光临</span><span v-show="name=='肖亦乔' || name=='NPER2012'">回来</span></h1>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      name: "",
      Welcome: "Welcome to console"
    }
  },
  created: function () {
    console.log(this.Welcome);
  }
}
</script>

<style lang="scss" scoped>
.VueS
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
h3{
  margin-bottom: 20px;
}

</style>