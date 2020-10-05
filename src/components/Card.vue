<template>
  <div class="Card">

    <div class="cardFront">
      <h1>CardFront</h1>
    </div>
    <div class="cardBack">
      <h1>CardBack</h1>
      <p>I am Great</p>
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

.Card{
  user-select: none;
  position: relative;
  transform-style: preserve-3d;
  margin: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: 0.05);
  border-radius: 30px;
  transition: transform 1s cubic-bezier(0.76, -0.51, 0.29, 1.5) ;
}
.Card:hover{
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
</style>