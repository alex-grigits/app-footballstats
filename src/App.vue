<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
      <div class="row">
        <sidenav></sidenav>
        <!--<main-content></main-content>-->
        <form-app></form-app>
        <!--<table-standing></table-standing>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import MainContent from './components/MainContent/MainContent'
  import Sidenav from './components/Sidenav'
  import Footer from './components/Footer'
  import Table from './components/MainContent/table-standing'
  import Form from './components/MainContent/form'

  export default {
    name: 'app',
    components: {
      navbar: Navbar,
      sidenav: Sidenav,
      'main-content': MainContent,
      'app-footer': Footer,
      'table-standing': Table,
      'form-app': Form
    },
    methods: {

    }
  }
</script>

<style lang='scss'>
  @import './scss/main.scss';
</style>
