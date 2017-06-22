<template>
  <div id="tables">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter is-left">
              <h1 class="title">Tables</h1>
              <h2 class="subtitle">of competitions</h2>
            </div>
            <div class="column">
              <v-select :newId="id" @updatedId="id = $event"></v-select>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <div class="column">
        <v-table :table="table"></v-table>
      </div>
    </div>

  </div>
</template>

<script>
import vSelect from './elements/v-select'
import vTable from './elements/v-table'

export default {
  components: {
    'v-select': vSelect,
    'v-table': vTable
  },
  data (){
    return {
      id: 426,
      table: []
    }
  },
  http: {
    headers: {
      'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
    }
  },
  methods: {
    fetchData: function(val){
      this.$http.get('http://api.football-data.org/v1/competitions/' + val + '/leagueTable/')
        .then(data => {
          //this.table =null;
          this.table = data.body.standing;
          this.table.forEach(function(element) {
            element['teamId'] = Number(element._links.team.href.match(/(\d{2,4})/g));
          }
        );
      })
    }
  },
  created () {
    this.fetchData(this.id);
  },
  watch: {
    id: function (val, oldVal){
      this.fetchData(val);
    }
  }
}
</script>

<style lang="scss">

</style>

