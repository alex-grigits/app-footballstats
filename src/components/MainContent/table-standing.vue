<template>
  <div id="table-standing" class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2>
      {{ table.leagueCaption }}</h2>
  </div>
</template>

<script>


  export default {
    props: [
      'id'
    ],

    data() {
      return {
        id: 426,
        table: []
      }
    },

    updated(){
      console.log(this.id);
    }
  }
</script>

<style lang="scss">

</style>
