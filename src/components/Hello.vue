<template>
  <div class="hello">
    <md-card class="card md-inset" v-for="season in seasons" :key="season.id">
      <md-subheader>{{season.caption}}</md-subheader>
        <md-list-item>
          <span>{{season.numberOfTeams}}</span>
        </md-list-item>
      </md-subheader>
      <md-divider class="md-inset"></md-divider>
    </md-card>

  </div>
</template>

<script>



export default {
  name: 'hello',

  http: {
    headers: {
      'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
    }
  },
  data () {
    return {
      users: [],
      teamUrl: 'http://api.football-data.org/v1/teams/66/players',
      seasons: [],
      seasonUrl: 'http://api.football-data.org/v1/competitions/?season=2016',
      year: ''
    }
  },
  created (){
    this.$http.get(this.seasonUrl)
      .then(response => {
        console.log('success', response.body);
        //this.users = response.body.players;
        this.seasons = response.body;
      }, (response) => {
        console.log('error', response)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
  @import '../scss/grid.sass'

  .hello
    margin-top: 40px
    +container()
    .card
      +col(6)
      margin-bottom: $gutter





</style>
