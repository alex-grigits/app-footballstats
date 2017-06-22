<template>
  <div id="team">
    <div class="container">
      <div class="columns">
        <div class="column content">
          <p class="title is-1">{{ team.name }}</p>
          <p class="subtitle is-3">{{ team.shortName}}</p>
        </div>
      </div>
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
  data () {
    return {
      id: this.$route.params.id,
      team: {},
      msg: 'Hello'
    }
  },
  created(){
    this.$http.get('http://api.football-data.org/v1/teams/' + this.id)
      .then( function(data){
        console.log(data.body);
        this.team = data.body;
      });
  }
}
</script>

<style lang="sass">

</style>
