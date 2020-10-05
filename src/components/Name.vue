<template>
  <div class="Name">

    <h3>请输入你的名字</h3>
    <input type="text" v-model="name" placeholder="你的名字">
    <div id="try">
      <div>
        <h1 v-show="name && name !='你的名字'">你好，{{name}}</h1>
        <h1 v-show="name && name !='你的名字'">欢迎<span v-show="name!='肖亦乔' && name!='NPER2012'">光临</span><span v-show="name=='肖亦乔' || name=='NPER2012'">回来</span></h1>
      </div>
      <div>
        <h1 v-show="name =='你的名字'">你可真是个小机灵鬼</h1>
        </div>
    </div>

  </div>
</template>
<script>
export default {
  data: function () {
    return {
      name: "",
      Welcome: "welcome, my friend."
    }
  },
  created: function () {
    console.log(this.Welcome);
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/color';

#try{
  margin: 30px;
  padding: 15px;
  width: 300px;
  height: 400px;
  background-color: $dark;
  border: 5px solid $highlight;
  color: $light;
  border-radius: 25px;
  
}
h3{
  margin-bottom: 20px;
}

</style>