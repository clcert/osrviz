import Vue from 'vue'
import Vuex from 'vuex'
import { Config,Graficos } from "../Config"
import * as Papa from "papaparse"

Vue.use(Vuex)


function lunesPasado(datestr) { 
  var fechaActual = new Date(datestr+"T00:00:00")
  if (datestr === "now") {
    fechaActual = new Date()
    fechaActual.setDate(fechaActual.getDate() - 7)
    fechaActual.setTime(fechaActual.getTime() - fechaActual.getTimezoneOffset() * 60000)
  }
  fechaActual.setDate(fechaActual.getDate() - fechaActual.getDay() + (fechaActual.getDay() == 0 ? -6 : 1))
  return fechaActual
}

function listaDeFechas() {
  let list = []
  let fechaActual = lunesPasado(Config.START_DATE) // set to monday
  const endDate = new Date().setDate(new Date().getDate() - 7)
  while (fechaActual < endDate) {
  list.push({
      text: fechaActual.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }),
      value: fechaActual.toISOString().split("T")[0],
    })
    fechaActual.setDate(fechaActual.getDate() + 7)
  }
  list.reverse()
  return list
}

export default new Vuex.Store({
  state: {
    csvs: {
      certificados_tls: [],
      dominios_dns_ranking_asn_semana: [],
      dominios_dns_ranking_pais_semana: [],
      dominios_eliminados_semana: [],
      dominios_mail_ranking_asn_semana: [],
      dominios_mail_ranking_pais_semana: [],
      dominios_nuevos_semana: [],
      dominios_web_ranking_asn_semana: [],
      dominios_web_ranking_pais_semana: [],
      ips_vistas: [],
      nombres_servicios_identificados: [],
      numero_asns_dominios_dns: [],
      numero_asns_dominios_mail: [],
      numero_asns_dominios_web: [],
      numero_ips_dominios_dns: [],
      numero_ips_dominios_mail: [],
      numero_ips_dominios_web: [],
      numero_paises_dominios_dns: [],
      numero_paises_dominios_mail: [],
      numero_paises_dominios_web: [],
      numero_rrs_dominios_dns: [],
      numero_rrs_dominios_mail: [],
      numero_rrs_dominios_web: [],
      reportes_vulnerabilidades_bruteforce: [],
      reportes_vulnerabilidades_c2: [],
      reportes_vulnerabilidades_darknet: [],
      reportes_vulnerabilidades_honeypot: [],
      reportes_vulnerabilidades_openresolver: [],
      reportes_vulnerabilidades_phishing: [],
      reportes_vulnerabilidades_proxy: [],
      reportes_vulnerabilidades_spam: [],
      servicios_activos: [],
      // define all csv names or else there will be no reactivity
    },
    fechaActual: lunesPasado("now").toISOString().split("T")[0],
    dateList: listaDeFechas()
  },
  getters: {
    conseguirDatos: (state) => (csvname) => {
      if (state.csvs[csvname] === undefined) {
        console.log(`archivo ${csvname} no descargado todavía`)
        return []
      } 
      console.log(`archivo ${csvname} ya fue descargado!`)
      return state.csvs[csvname]
    },
    conseguirMeta: () => (dataid) => {
      if (Graficos[dataid] === undefined) {
        return {}
      }
      return Graficos[dataid]
    }
  },
  mutations: {
    modificarFechaActual(state, date) {
      state.fechaActual = date;
    },
    nuevosDatos(state, archivo) {
      state.csvs[archivo.nombre] = archivo.resultados;
    }
  },
  actions: {
    updateData: (context, graphname) => {
      if (Graficos[graphname] === undefined) {
        console.log(`gráfico con id ${graphname} no encontrado`)
        return
      }
      let graphData = Graficos[graphname] 
      graphData.archivos.forEach((archivo)=> {
        if (context.state.csvs[archivo] != undefined && context.state.csvs[archivo].length == 0) {
          console.log(`todavía no tengo ${archivo}, lo buscaré`)
          Papa.parse(`${Config.API_ROUTE}/${archivo}.csv`, {
            header: true,
            dynamicTyping: true,
            download: true,
            skipEmptyLines: true,
            complete: function(resultados) {
                console.log(`archivo ${archivo} descargado!`)
                context.commit('nuevosDatos', {
                  nombre: archivo,
                  resultados:resultados.data.map(x => {
                    if (x.date != undefined) {
                      x.date = x.date.split(" ")[0]
                    }
                    return x
                  })})
            }
          })
        } else {
          console.log(`archivo ${archivo} no encontrado`)
        }
      })
    }
  }
})
