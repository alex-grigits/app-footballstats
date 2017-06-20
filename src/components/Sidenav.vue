<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
        <a href="#">
          Dashboard <span class="sr-only">(current)</span>
        </a>
      </li>
      <li>
        <a href="#" @click="show = !show">Leagues
          <span v-if="show" class="glyphicon glyphicon-triangle-top"></span>
          <span v-else class="glyphicon glyphicon-triangle-bottom"></span>
        </a>
        <transition name="slide-fade">
          <ul class="nav nav-sidebar sub-menu" v-if="show">
            <li><a href="#" @click="changeSelectedLeague($event)" v-model="selected" value="426">Premier League</a></li>
            <li><a href="#" @click="changeSelectedLeague($event)" v-model="selected" value="427">Championship</a></li>
            <li><a href="#" @click="changeSelectedLeague($event)" v-model="selected" value="428">League One</a></li>
          </ul>
        </transition>
      </li>
      <li><a href="#">Analytics</a></li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../main.js'

  export default {
    name: 'sidenav',
    data(){
      return {
        show: false,
        selected: ''
      }
    },
    methods: {
      changeSelectedLeague:function(data){
        bus.$emit('leagueChanged', data.path[0].attributes[1].value);
        console.log('emit from sidenav', data.path[0].attributes[1].value);
      }
    }
  }
</script>

<style lang='scss'>
  .sub-menu {
    background-color: #e0e0e0;
    margin-bottom: 0;
    li {
      border-bottom: 1px solid #dadada;
      a {
        padding-left: 60px;
      }
    }
  }

  .glyphicon {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .caret-enter-active {
    transition: all .3s ease;
  }
  .caret-leave-active {
    transition: all .3s ease;
  }
  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.      */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active для <2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
