<template>
<v-container>
  <v-row>
      <simple-line id="serviciosActivos"></simple-line>
  </v-row>
</v-container>
</template>


<script>
import SimpleLine from '../components/SimpleLine.vue';

export default {
  components: { SimpleLine }, 
  name: 'Servicios',
};
</script>
