<template>
<div id="Nav"> <!--导航栏-->
  <ul>
    <li v-for="value in tab">
      <router-link :to="value.path">{{value.title}}</router-link>
    </li>
  </ul>
  <ShowTime style="color: #d9f9f4; position: absolute; right: 1rem; top: 1.2rem;"/>
</div>
</template>

<script>
import ShowTime from '@/components/ShowTime.vue'

export default {
  data: function () {
    return {
      tab:[
        {
          title: 'Home',
          path: '/home'
        },
        {
          title: 'Welcome',
          path: '/'
        },
        {
          title: 'About',
          path: '/about'
        },
        {
          title: 'VueS',
          path: '/vues'
        }
      ]
    }
  },
  components: {
    ShowTime
  }
}
</script>

<style lang="scss" scoped>

@import '@/scss/color';

#Nav{ //导航栏
  padding: 20px;
  background-color: $dark;
  color: $highlight;
  position: sticky;
  top: 0px;

  ul{
    list-style-type:none;
    li {
      display: inline-block;
      &:not(:last-child){
        border-right: 1.5px solid ;
      }
      a {
        font-weight: bold;
        padding: 0.2rem 0.6rem;
        margin: 0 0.9rem;
        border-radius: 0.7rem;
        border: 1.5px solid rgba(200,200,200,0);

        &:hover{
          border: 1.5px solid $light;
        }

        &.router-link-exact-active {
          color: $dark;
          background-color: $light;
          border: 1.5px solid rgba(200,200,200,0);
        }
      }
    }
  }
}
</style>
