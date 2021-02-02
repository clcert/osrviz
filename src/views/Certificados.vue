<template>
<v-container>
  <v-row>
          <simple-line id="certificadosTLSMail"></simple-line>
          <simple-line id="certificadosTLSWeb"></simple-line>

  </v-row>
</v-container>
</template>

<script>
import SimpleLine from '../components/SimpleLine.vue';

export default {
  components: { SimpleLine },  
  name: 'Certificados',
};
</script>
