<template>
  <div class="VueS">
    <h1>What is VueS ?</h1>
    <hr>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <div class="cards">
      <Card>
        <template slot="CardFront">
          <h1>A</h1>
        </template>
        <template slot="CardBack">
          <h1>HTML</h1>
        </template>
      </Card>
      <Card>
        <template slot="CardFront">
          <h1>B</h1>
        </template>
        <template slot="CardBack">
          <el-button @click="visible = true">Button</el-button>
        </template>
      </Card>
      <Card>
        <template slot="CardFront">
          <h1>C</h1>
        </template>
        <template slot="CardBack">
          <h1>JavaScript</h1>
        </template>
      </Card>
      <Card>
        <template slot="CardFront">
          <h1>D</h1>
        </template>
        <template slot="CardBack">
          <h1>Vue.js</h1>
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
}
.cards{
  display: flex;

}

</style>