<template>
  <div class="Cardy">
    <div class="Card">
      <div class="cardFront">
        <slot name="CardFront"><h1 v-if="help">slot格式</h1></slot>
      </div>
      <div class="cardBack">
        <slot name="CardBack">
          <pre v-if="help" class="slotin">
            <h2>slot格式：</h2>
            <p>&lt;Card></p>
            <p>&#9;&lt;template slot="CardFront"></p>
            <p>&#9;&#9;卡片正面内容</p>
            <p>&#9;&lt;/template></p>
            <p>&#9;&lt;template slot="CardBack"></p>
            <p>&#9;&#9;卡片背面内容</p>
            <p>&#9;&lt;/template></p>
            <p>&lt;/Card></p>
          </pre>
        </slot>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    help: 0
  },
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
.Cary{
  user-select: none;
  cursor: pointer;
}
.Card{
  position: relative;
  transform-style: preserve-3d;
  margin: 10px;
  // cursor: pointer;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: 0.05);
  border-radius: 30px;
  transition: transform 1s cubic-bezier(0, 0, 0.29, 1.5) ;
}
.Cardy:hover > .Card{
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}
.cardFront, .cardBack{
  width: 100%;
  height: 100%;
  width: 300px;
  height: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: $light;
  border: $highlight solid 5px;
  border-radius: 30px;
  background-color: $dark;
}

.cardFront{
  position: absolute;
}

.cardBack{
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}
.slotin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>