<template>
  <div class="Homework">
    <h1>What is VueS ?</h1>
    <hr>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <div class="cards">
      <Card>
        <template slot="CardFront">
          <h1>PreviewHomework</h1>
        </template>
        <template slot="CardBack">
          <router-link to="/work/first" tag="button">first</router-link>
          <router-link to="/work/firstX" tag="button">firstX</router-link>
        </template>
      </Card>
    </div>

  </div>
</template>
<script>
import Name from '@/components/Name.vue'
import Card from '@/components/Card.vue'

export default {
  data: function() {
    return {
      visible: false
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
.Homework
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
}
.cards{
  display: flex;

}
button{
  height: 25px;
  min-width: 60px;
}
</style>