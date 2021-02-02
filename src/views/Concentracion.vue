<template>
<v-container>
  <v-row>
      <mapamundi id="dnsRankingPais"></mapamundi> 
      <simple-table id="dnsRankingPais"></simple-table>
      <domains-bar id="resilienciaDominios"></domains-bar>
  </v-row>
</v-container>
</template>

<script>
import Mapamundi from '../components/Mapamundi.vue';
import SimpleTable from '../components/SimpleTable.vue';
import DomainsBar from '../components/DomainsBar.vue';


export default {
  components: { Mapamundi, SimpleTable, DomainsBar }, 
  name: 'Concentracion',
};
</script>
