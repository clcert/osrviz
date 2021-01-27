<template>
    <chart-card type="Mapa" :title="chartMeta.titulo" :description="chartMeta.descripcion" :files="chartMeta.archivos" v-observe-visibility="{callback: visibilityChanged, once: true}">
        <v-tabs v-model="tab">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab bottom v-for="(cType, i) in chartTypes"  :key="cType + '-' + fechaActual" :href="'#'+cType">
                {{chartNames[i]}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item bottom v-for="(cType, i) in chartTypes" :key="cType + '-' + fechaActual" :value="cType" :href="'#'+cType">
                <geo-chart :colors="[brightenColor(chartColors[i]), chartColors[i]]" :data="postMap(fechaExacta.filter( x => x.type == cType)[0])" :messages="{empty: 'No hay datos para esta fecha'}"></geo-chart>
            </v-tab-item>
        </v-tabs-items>
    </chart-card>
</template>


<script>
import ChartCard from './ChartCard.vue'
import ChartMixin from './ChartMixin.js'
import { Config } from '../Config.js'

const regex = /dominios_([a-z]+)_ranking_pais_semana/;
    export default {
        components: {ChartCard},
        name: "Mapamundi",  
        mixins: [ChartMixin],
        props: ['id'],
        data: function() {
            return {
                tab: null
            }
        },
        computed: {
            chartColors: function () {
                return this.chartTypes.map( x => {
                    return Config.COLORES[x]
                })
            },
            chartNames: function () {
                return this.chartTypes.map( x => {
                    return Config.NOMBRES[x]
                })
            },
            chartTypes: function () {
                let allTypes = []
                this.chartMeta.archivos.forEach(archivo => {
                    const match = archivo.match(regex);
                    if (match !== null && match.length > 1) {
                        allTypes.push(match[1])
                    }
                })
                return allTypes
            },
            chartData: function() {
                let allData = []
                this.chartMeta.archivos.forEach(archivo => {
                    const match = archivo.match(regex);
                    if (match !== null && match.length > 1) {
                        const tipo = match[1]
                        let dataList = this.$store.getters.conseguirDatos(archivo)
                        let data = {
                            "name": "# por país",
                            "type": tipo,
                            "data": dataList
                        };
                        allData.push(data)
                    }
                })
                return allData
            },
        },
        methods: {
            brightenColor: function(color) {
                return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + 200)).toString(16)).substr(-2));
            },
            postMap: function(allData) {
                let z = {}
                allData.data.forEach(y => {
                    z[y.country_alpha2] = y.num_ips
                })
                return z
            }
        }
    }
</script>