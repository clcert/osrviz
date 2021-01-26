<template>
    <chart-card type="Tabla" :files="chartMeta.archivos" :title="chartMeta.titulo" :description="chartMeta.descripcion" v-observe-visibility="{callback: visibilityChanged, once: true}">
        <v-tabs v-model="tab">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab bottom v-for="(cType, i) in chartTypes"  :key="cType + '-' + fechaActual" :href="'#'+cType">
                {{chartNames[i]}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item bottom v-for="cType in chartTypes" :key="cType + '-' + fechaActual" :value="cType" :href="'#'+cType">
                <v-data-table
                    :headers="columnas"
                    :items="fechaExacta[0].data.filter(x => x.fuente == cType).map((x,i) => {x['ranking'] = i+1;return x})"
                    item-key="country_alpha2"
                    class="elevation-1"
                    :search="search"
                    >
                    <template v-slot:top>
                        <v-text-field
                        v-model="search"
                        label="Buscar"
                        class="mx-4"
                        ></v-text-field>
                    </template>
                </v-data-table>
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
        name: "SimpleTable",  
        mixins: [ChartMixin],
        props: ['id'],
        data: function() {
            return {
                tab: null,
                search: '',
            }
        },
        computed: {
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
                        allTypes.push(match[1])
                    }
                })
                return allTypes
            },
            chartData: function() {
                let allData = {
                    "name": "Tabla Simple",
                    "data": []
                };
                this.chartMeta.archivos.forEach(archivo => {
                    const match = archivo.match(regex);
                    if (match !== null && match.length > 1) {
                        const tipo = match[1]
                        let data = this.$store.getters.conseguirDatos(archivo)
                        data.forEach((y) => {
                            y["fuente"] = tipo;
                            allData.data.push(y)
                        })
                    }
                })
                allData.data.sort((a,b) => {return a.date == b.date ? 0 : a.date < b.date ? -1 : 1})
                return [allData]
            },
        },
    }
</script>