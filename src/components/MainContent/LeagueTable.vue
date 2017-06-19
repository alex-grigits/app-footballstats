<template>
  <div id="league-table">
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>
    <span>Выбрано: {{ selected }}</span>
    <div class="table-responsive">
      <table class="table table-striped">
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
              <img :src="team.crestURI" class="img-responsive" alt="Responsive image">
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
  export default {
    http: {
      headers: {
        'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
      }
    },
    data() {
      return {
        selected: '426',
        options: [
          { text: 'Premier League', value: '426' },
          { text: 'Championship', value: '427' },
          { text: 'League One', value: '428' }
        ],
        users: [],
        teamUrl: 'http://api.football-data.org/v1/teams/66/players',
        seasons: [],
        seasonUrl: 'http://api.football-data.org/v1/competitions/?season=2016',
        standing: [],
        standingUrl: 'http://api.football-data.org/v1/competitions/'
      }
    },
    updated(){
      console.log(this.selected);
    },
    beforeCreate(){
      this.selected = '426';
    },
    created() {
      this.$http.get(this.standingUrl + this.selected + '/leagueTable')
        .then(response => {
          //console.log('success', response.body.standing);
          //this.users = response.body.players;
          this.standing = response.body.standing;
        }, (response) => {
          console.log('error', response)
        })
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
</style>
