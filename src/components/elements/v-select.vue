<template>


  <div id="v-select" class="field">
    <p class="control">
      <span class="select is-medium">
        <select class="form-control input-lg" :value="newId" @change="changeId">
          <option v-for="option in options" v-bind:value="option.value" :key="option.id">
            {{ option.text }}
          </option>
        </select>
      </span>
    </p>
  </div>

</template>

<script>
  export default {
    props: [
      'newId'
    ],
    http: {
      headers: {
        'X-Auth-Token': '07343b6896a74d57920afd88bed1a68f'
      }
    },
    data() {
      return {
        id: '',
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
      changeId:function(event){
        this.id = event.target.value;
        this.$emit('updatedId', this.id);
      }
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

</style>
