<template>
    <v-app>
      <v-app-bar
        app
        clipped-right
        dark
        color="primary"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title><v-icon>mdi-{{icon}}</v-icon> {{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select
          v-on:change="modificarFechaActual"
          :value= "$store.state.fechaActual"
          :items="$store.state.dateList"
          prepend-icon="mdi-calendar"
          menu-props="auto"
          label="Fecha"
          hide-details
          style="flex-grow:0"
          single-line
        ></v-select>
        <v-btn
          icon
          @click.stop="dialog = true"
        >
          <v-icon>mdi-help-circle</v-icon>
        </v-btn>
        <v-dialog
          v-model="dialog"
          max-width="1000px"
        >
        <v-card>
          <v-card-title class="headline">
            Acerca del Observatorio de Seguridad de la Red
          </v-card-title>
          <v-card-text>
            <about-text/>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="dialog = false"
            >
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>



      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        app
        z-index='100000'
      >
        <v-list dense>
          <v-img
            contain
            src="./assets/osr.svg"
          ></v-img>
          <v-list-item v-for="elem in pages" :key="elem.slug" :to="elem.slug">
              <v-list-item-action>
                <v-icon>mdi-{{elem.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{elem.title}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-col lg="8" md="10">
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <v-footer
        app
      >
        <span><a href="https://clcert.cl">Laboratorio de Criptografía Aplicada y Ciberseguridad</a> | <a href="https://uchile.cl">U. de Chile</a></span>
        <v-spacer></v-spacer>
        <span><a href="https://github.com/clcert/osrviz">Código Fuente</a></span>
      </v-footer>
    </v-app>
</template>

<script>

import { Paginas } from "./Config"
import AboutText from './components/AboutText.vue';

export default {
  components: { AboutText },
  name: 'App',
  data: function() {
    return {
      pages: Paginas,
      drawer: false,
      dialog: false,
      title: "",
      icon: "",
    }
  },
  methods: {
    modificarFechaActual(val) {
      this.$store.commit("modificarFechaActual", val)
    }
  },
  watch: {
    '$route' (to) {
      if (to.meta.title.length == 0) {
        to.meta.title = 'OSR CLCERT'
      }
      document.title = to.meta.title + " - OSR CLCERT" 
      this.title = document.title
      if (to.meta.icon.length == 0) {
        to.meta.icon = 'computer'
      }
      this.icon = to.meta.icon
    }
  }
};
</script>
