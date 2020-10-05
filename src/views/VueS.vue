<template>
  <div class="VueS">
    <h1>What is VueS ?</h1>
    <hr>
    <div class="cards">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

  </div>
</template>
<script>
import Name from '@/components/Name.vue'
import Card from '@/components/Card.vue'

export default {
  data: function () {
    return {
      
    }
  },
  components: {
    Name,
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/color';
.VueS
{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}
hr {
  max-width: 100vw;
  width: 600px;
  margin: 20px;
}.cards{
  display: flex;

}

</style>