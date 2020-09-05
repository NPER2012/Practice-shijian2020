<template>
  <div class="Welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Practice-shijian2020"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.Welcome{
  padding: 30px 0;
}
</style>