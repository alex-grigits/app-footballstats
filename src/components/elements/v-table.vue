<template>
  <div id="v-table">
    <div class="table-responsive">
      <table class="table is-striped is-bordered">
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
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in table" v-bind:key="team.id">
            <td>{{team.position}}</td>
            <td>
              <router-link :to="'/team/' + team.teamId">
                <img :src="team.crestURI" class="team-logo" alt="N/A">{{team.teamName}}
              </router-link>
            </td>
            <td>{{team.playedGames}}</td>
            <td>{{team.wins}}</td>
            <td>{{team.draws}}</td>
            <td>{{team.losses}}</td>
            <td>{{team.goals}}</td>
            <td>{{team.goalsAgainst}}</td>
            <td>{{team.goals - team.goalsAgainst > 0 ? '+' + (team.goals - team.goalsAgainst) : team.goals - team.goalsAgainst}}</td>
            <td>{{team.points}}</td>
            <td>{{team.teamId}}</td>
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
    props: [
      'table'
    ],
    data() {
      return {
        teamPageId: '',
        teamId: '426',
        team: {}
      }
    }
  }
</script>

<style lang="scss">


  .table{
    td {
      vertical-align: middle;
    }
  }


  .team-logo {
    width: 25px;
    height: 25px;
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
