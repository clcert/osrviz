<template>
<v-container>
  <v-row>
      <simple-line id="dominiosRegistrados"></simple-line>
      <simple-line id="dominiosEliminados"></simple-line>
  </v-row>
</v-container>
</template>

<script>
import SimpleLine from '../components/SimpleLine.vue';

export default {
  components: { SimpleLine }, 
  name: 'Dominios',
};
</script>
