<template>
  <div id="app">
    <navbar></navbar>

    <div class="container-fluid">
      <div class="row">
        <sidenav></sidenav>
        <main-content></main-content>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import MainContent from './components/MainContent/MainContent'
  import Sidenav from './components/Sidenav'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      navbar: Navbar,
      sidenav: Sidenav,
      'main-content': MainContent,
      'app-footer': Footer
    },
    methods: {

    }
  }
</script>

<style lang='scss'>
  @import './scss/main.scss';
</style>
