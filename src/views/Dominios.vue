<template>
<v-container>
  <v-row>
      <simple-line id="dominiosRegistrados"></simple-line>
      <simple-line id="dominiosEliminados"></simple-line>
      <mapamundi id="dnsRankingPais"></mapamundi>
      <simple-table id="dnsRankingPais"></simple-table>
      <domains-bar id="resilienciaDominios"></domains-bar>
  </v-row>
</v-container>
</template>

<script>
import SimpleLine from '../components/SimpleLine.vue';
import Mapamundi from '../components/Mapamundi.vue';
import SimpleTable from '../components/SimpleTable.vue';
import DomainsBar from '../components/DomainsBar.vue';

export default {
  components: { SimpleLine, Mapamundi, SimpleTable, DomainsBar }, 
  name: 'Dominios',
};
</script>
