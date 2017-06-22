<template>
  <div id="app">
    <header class="header">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item brand-name">
              Stats App
            </a>
          </div>
          <div class="nav-center">
            <router-link to="/" exact class="nav-item is-tab is-hidden-mobile">Dashboard</router-link>
            <router-link to="/tables" exact class="nav-item is-tab is-hidden-mobile">Tables</router-link>
            <router-link to="/teams" exact class="nav-item is-tab is-hidden-mobile">Teams</router-link>
            <router-link to="/fixtures" exact class="nav-item is-tab is-hidden-mobile">Fixtures</router-link>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-tab is-hidden-tablet is-active">Dashboard</a>
            <a class="nav-item is-tab is-hidden-tablet">Tables</a>
            <a class="nav-item is-tab is-hidden-tablet">Teams</a>
            <a class="nav-item is-tab is-hidden-tablet">Fixtures</a>
            <a class="nav-item is-tab">Profile</a>
            <a class="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Dashboard from './components/Dashboard'
  import Tables from './components/Tables'
  import Teams from './components/Teams'
  import Fixtures from './components/Fixtures'

  export default {
    name: 'app',
    components: {
      'dashboard': Dashboard,
      'tables': Tables,
      'teams': Teams,
      'fixtures': Fixtures
    },
    methods: {

    }
  }
</script>

<style lang='scss'>

@import './scss/main.scss';

.header {
  margin-bottom: 5px;
}

a.brand-name {
  font-size: 24px;
  color: #00d1b2;
}

</style>
