<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Dashboard</h1>

    <h2 class="sub-header">Section title</h2>
    <league-table></league-table>
  </div>
</template>

<script>
import LeagueTable from './LeagueTable'

export default {
  components: {
    'league-table':LeagueTable
  }

}
</script>

<style lang="scss">
#main-content {
  color: rebeccapurple;
}
</style>
