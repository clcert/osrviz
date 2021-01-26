import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
 
Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
    },
    theme: {
      themes: {
        light: {
          primary: '#112233',
          secondary: '#19416a',
          accent: '#288fbe',
          error: '#b71c1c',
        },
      },
    }
});
