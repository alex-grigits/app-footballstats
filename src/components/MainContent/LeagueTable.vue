<template>
  <div id="league-table">

    <select class="form-control" v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>

    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in standing" v-bind:key="team.id">
            <td>{{team.position}}</td>
            <td>
              <img :src="team.crestURI" class="img-responsive" alt="N/A">
              {{team.teamName}}</td>
            <td>{{team.playedGames}}</td>
            <td>{{team.wins}}</td>
            <td>{{team.draws}}</td>
            <td>{{team.losses}}</td>
            <td>{{team.goals}}</td>
            <td>{{team.goalsAgainst}}</td>
            <td>{{team.points}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { bus } from '../../main.js'

  export default {
    http: {
      headers: {
        'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
      }
    },
    data() {
      return {
        selected: '426',
        seasons: [],
        seasonUrl: 'http://api.football-data.org/v1/competitions/?season=2016',
        standing: [],
        standingUrl: 'http://api.football-data.org/v1/competitions/',
        options: [
          { text: 'Premier League', value: '426' },
          { text: 'Championship', value: '427' },
          { text: 'League One', value: '428' },
          { text: 'League Two', value: '443' },
          { text: 'English National League', value: '442' },
          { text: '1. Bundesliga', value: '430' },
          { text: '2. Bundesliga', value: '431' },
          { text: 'Eredivisie', value: '433' },
          { text: 'Ligue 1', value: '434' },
          { text: 'Ligue 2', value: '435' },
          { text: 'Primera Division', value: '436' },
          { text: 'Liga Adelante', value: '437' },
          { text: 'Serie A', value: '438' },
          { text: 'Serie B', value: '441' },
          { text: 'Primeira Liga', value: '439' }
        ]
      }
    },
    created() {
      this.$http.get(this.standingUrl + this.selected + '/leagueTable')
        .then(response => {
          console.log('success', response.body.standing);
          //this.users = response.body.players;
          this.standing = response.body.standing;
        }, (response) => {
          console.log('error', response)
        })
    },
    mounted(){

    },
    beforeUpdate(){
      bus.$on('leagueChanged',(data) => {
        this.selected = data;
        //console.log(this.selected);
      });
    },
    updated(){
      console.log(this.selected);
    }
  }
</script>

<style lang="scss">
.img-responsive {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
}

.table {
  th,
  td {
    text-align: center;
  }
  td:nth-child(2){
    text-align: left;
  }
}
</style>
