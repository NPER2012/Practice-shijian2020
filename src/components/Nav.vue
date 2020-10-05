<template>
<div id="Nav"> <!--导航栏-->
  <ul>
    <li v-for="value in tab" class="navTab">
      <div class="navBlock">
        <router-link :to="value.path" class="first">{{value.title}}</router-link>
        <ul v-if="value.expand">
          <li v-for="value2 in value.expand">
            <router-link :to="value2.path">{{value2.title}}</router-link>
          </li>
        </ul>
      </div>
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
          title: 'Work',
          path: '/work',/*
          expand: [
            {
              title: 'first',
              path: '/work'
            },
            {
              title: 'firstX',
              path: '/workX'
            }
          ]*/
        },
        {
          title: 'Home',
          path: '/home'
        },
        {
          title: 'Welcome',
          path: '/welcome'
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
  padding: {
    top: 18px;
    bottom: 18px - 4.4px;
  };
  background-color: $dark;
  color: $highlight;
  position: sticky;
  top: 0px;
  height: 18.4px;

  > ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    .navTab {
      display: inline-block;
      height: 1rem;
      &:not(:last-child){
        border-right: 1.5px solid ;
      }
      .first {
        font-weight: bold;
        padding: 0.2rem 0.6rem;
        margin: 0 0.9rem;
        border-radius: 20px;
        border: 1.5px solid $thansparent;
        transition: border 0.4s;

        &:hover{
          border: 1.5px solid $light;
          color: $light;
        }

        &.router-link-active {
          color: $dark;
          background-color: $light;
          border: 1.5px solid $thansparent;
        }

        &:active{
          color: $highlight;
        }

      }
    }
  }
}
</style>
