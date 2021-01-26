<template>
    <chart-card type="Gráfico Barra" :title="chartMeta.titulo" :description="chartMeta.descripcion" :files="chartMeta.archivos" v-observe-visibility="{callback: visibilityChanged, once: true}">
        <v-tabs v-model="tab">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab bottom v-for="(cTab, i) in chartTabs"  :key="cTab + '-tab-' + fechaActual" :href="'#'+cTab">
                {{chartTabNames[i]}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item bottom v-for="cTab in chartTabs" :key="cTab + '-tab-' + fechaActual" :value="cTab" :href="'#'+cTab">
                <column-chart :colors="chartColors" :data="chartData[cTab]" :messages="{empty: 'No hay datos para esta fecha'}"></column-chart>
            </v-tab-item>
        </v-tabs-items>
    </chart-card>
</template>


<script>
import ChartCard from './ChartCard.vue'
import ChartMixin from './ChartMixin.js'
import { Config } from '../Config.js'

const regex = /numero_([a-z]+)_dominios_([a-z]+)/;
export default {
    components: {ChartCard},
    name: "DomainsBar",  
    mixins: [ChartMixin],
    props: ['id'],
    data: function() {
        return {
            tab: null
        }
    },
    computed: {
        chartTabNames: function () {
            return this.chartTabs.map( x => {
                console.log(Config)
                return Config.TABS[x]
            })
        },
        chartTabs: function () {
            let typesMap = {}
            this.chartMeta.archivos.forEach(archivo => {
                const match = archivo.match(regex);
                if (match !== null && match.length > 1) {
                    typesMap[match[1]] = 1
                }
            })
            let allTypes = []
            for (let key in typesMap) {
                allTypes.push(key)
            }
            return allTypes
        },
        chartColors: function () {
            return this.chartTypes.map( x => {
                console.log(Config)
                return Config.COLORES[x]
            })
        },
        chartNames: function () {
            return this.chartTypes.map( x => {
                console.log(Config)
                return Config.NOMBRES[x]
            })
        },
        chartTypes: function () {
            let allTypes = []
            this.chartMeta.archivos.forEach(archivo => {
                const match = archivo.match(regex);
                if (match !== null && match.length > 1) {
                    allTypes.push(match[2])
                }
            })
            return allTypes
        },
        chartData: function() {
            let allData = {};
            this.chartMeta.archivos.forEach(archivo => {
                const match = archivo.match(regex);
                if (match !== null && match.length > 1) {
                    const tipo = match[1]
                    if (!(tipo in allData)) {
                        allData[tipo] = {}
                    }
                    const grupo = match[2]
                    if (!(grupo in allData[tipo])) {
                        allData[tipo][grupo] = {}
                    }
                    let data = this.$store.getters.conseguirDatos(archivo)
                    data.forEach(y => {
                        if (y.date == this.$store.state.fechaActual) {
                            if (!(Config.BARLIMIT in allData[tipo][grupo])) {
                                allData[tipo][grupo][Config.BARLIMIT+"+"] = 0
                            }
                            if (y.num >= Config.BARLIMIT) {
                                allData[tipo][grupo][Config.BARLIMIT+"+"] += y.count;
                            } else {   
                                allData[tipo][grupo][y.num] = y.count;
                            }
                        }
                    })
                }
            })
            let data = {}
            for (let tipo in allData) {
                data[tipo] = []
                for (let grupo in allData[tipo]) {
                    data[tipo].push({
                        "name": grupo,
                        "data": allData[tipo][grupo]
                    })
                } 
            }
            return data
        },
    },
}
</script>