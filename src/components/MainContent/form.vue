<template>
  <div id="form-app" class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <select class="form-control input-lg" v-model="id" v-on:change="create">
      <option v-for="option in options" v-bind:value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>
    <!--<button @click="create($event.target.value)">Submit</button>-->

    <!--<select class="form-control" v-model.lazy="id">
      <option :value="426" @click="create($event.target.value)">Premier League</option>
      <option :value='430' @click="create($event.target.value)">Bundesliga</option>
      <option :value='433' @click="create($event.target.value)">Eredivisie</option>
      <option :value='436' @click="create($event.target.value)">Primera Division</option>
    </select>-->


    <!--
    <button :value="426" v-model="id" @click="create($event.target.value)">Premier League</button>
    <button :value="430" v-model="id" @click="create($event.target.value)">Bundesliga</button>
    <button :value="433" v-model="id" @click="create($event.target.value)">Eredivisie</button>
    -->
    <h3>{{ table.leagueCaption }}</h3>
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
          <tr v-for="team in table" v-bind:key="team.id">
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
  export default {
    http: {
      headers: {
        'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
      }
    },
    data() {
      return {
        id: 426,
        table: [],
        options: [
          {text: 'Premier League', value: '426'},
          {text: 'Championship',value: '427'},
          {text: 'League One',value: '428'},
          {text: 'League Two',value: '443'},
          {text: 'English National League',value: '442'},
          {text: '1. Bundesliga',value: '430'},
          {text: '2. Bundesliga',value: '431'},
          {text: 'Eredivisie',value: '433'},
          {text: 'Ligue 1',value: '434'},
          {text: 'Ligue 2',value: '435'},
          {text: 'Primera Division',value: '436'},
          {text: 'Liga Adelante',value: '437'},
          {text: 'Serie A',value: '438'},
          {text: 'Serie B',value: '441'},
          {text: 'Primeira Liga',value: '439'}
        ]
      }
    },
    methods: {
      create: function() {
        this.$http.get('http://api.football-data.org/v1/competitions/' + this.id + '/leagueTable/')
          .then(data => {
            this.table = data.body.standing;
        })
      }
    },
    created () {
      this.$http.get('http://api.football-data.org/v1/competitions/' + this.id + '/leagueTable/')
        .then(data => {
          this.table = data.body.standing;
      })
    }
  }
</script>

<style lang="scss">
  .img-responsive {
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
