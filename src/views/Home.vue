<template>
  <div class="home">
    <div class='bgb'></div> <!--背景图层后部分-->
    <div class='bgi'></div> <!--背景图层前部分-->
    <div class="wave"></div> <!--    背景图层水波部分-->
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="cloud3"></div>
    
    <div class="xjtu-logo-home"></div>
    
  </div>
  
</template>

<style lang="scss" scoped>

.home{
  width: 100vw;
  min-height: 100vh;
  height: 48vw;
  position: relative;
  top: 0;
  background-color: #2c3e50;
  
}
.bgb,.bgi{
  position: absolute;
  min-height: 100vh;
  height: 48vw;
  width: 100vw;
  background-size: 100%;
  background-repeat: no-repeat;
}
.bgb{background-image: url(../assets/img/home/bgb.png);}
.bgi{background-image: url(../assets/img/home/bgi.png);z-index: 3;}


  @keyframes waving{
  0% {left:20vw;}
  100%   {left:-4.8vw;}
  }

  @keyframes mymove2{   
  0%   {left:0px; top:0px;}
  100% {left:15px; top:0px;}
  }

  @keyframes mymove3{  
  0%   {right:0px; top:0px;}
  100% {right:17px; top:0px;}
  }

.wave{
  animation: waving 5s infinite linear;
  position: absolute;
  top:38vw;
  height:9.74vw;
  width:60vw;
  background-image: url(../assets/img/home/wave.png);
  background-size: 100%;    
  background-repeat: no-repeat;
  z-index: 2;
}

.l{
  position:relative;
  bottom:11vw;
  right:3vw;
}
.cloud-l{
  animation: mymove2 2s infinite;
  animation-delay:0s;
  animation-timing-function: ease;
  animation-direction:alternate;
  height:6vw;
  width: 10vw;
  position:relative;
  top:20vw;
  right:10vw;
  z-index: 10;
}



.m{
  position:relative;
  bottom:5vw;
  left:20vw;
}
.cloud-m{
  animation: mymove3 3s infinite;
  animation-delay:400;
  animation-timing-function: ease;
  animation-direction:alternate;
  height:4vw;
  width: 9vw;
  top:43vw;
  position:relative;
  z-index: 10;
}



.r{
  position:relative;
  bottom:19vw;
  left:40vw;
}
@keyframes mymove4{   
0%   {right:0px; top:0px;}
100% {right:25px; top:0px;}
}
.cloud-r{
  animation: mymove4 2s infinite;
  animation-delay:1s;
  animation-timing-function: ease;
  animation-direction:alternate;
  height:4vw;
  width: 14vw;
  top:43vw;
  position:relative;
  z-index: 10;
}

.title{
  position: relative;
  display: block; 
  margin-left: 59vw;
  margin-right: auto;
  margin-top: -5vw;
  user-select: none;
  width:33vw;
  z-index: 4;
}
@media screen and (max-width: 1600px){
  .login{
    width: 150px;
  }
}
@media screen and (max-width: 1200px){
  .title{
    width: 250px;
  }
}
@media screen and (max-width: 1200px){
  .login{
    width: 100px;
  }
}
@media screen and (max-width: 800px){
  .title{
    width: 160px;
  }
}
@media screen and (max-width: 800px){
  .login{
    width: 62px;
  }
}

.login{
  margin-top: 7vw;
  cursor: pointer;
  position: relative;
  display: block;
  margin-left: 69.75vw;
  margin-right: auto;
  width:13vw;
  z-index: 4;
}

.xjtu-logo-home{
  position: absolute;
  right: 0;
  top: 0.78vw;
  background-image: url(../assets/img/home/xjtu-logo.png);
  background-repeat: no-repeat;
  width: 15vw;
  height: 5vw;
  background-size: 90%;
  
  z-index: 10;
  
}


</style>

