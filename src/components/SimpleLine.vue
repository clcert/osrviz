<template>
    <chart-card type="Gráfico Línea" :title="chartMeta.titulo" :description="chartMeta.descripcion" :files="chartMeta.archivos" v-observe-visibility="{callback: visibilityChanged, once: true}">
        <v-tabs v-model="tab">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab href="#eight-weeks">Últimas ocho semanas</v-tab>
            <v-tab href="#one-year">Último Año</v-tab>
            <v-tab href="#total">Desde siempre</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item value="eight-weeks">
                <line-chart :data="postMap(ultimasOchoSemanas)" :messages="{empty: 'No hay datos para esta fecha'}"></line-chart>
            </v-tab-item>
            <v-tab-item value="one-year">
                <line-chart :data="postMap(ultimoAnio)" :messages="{empty: 'No hay datos para esta fecha'}"></line-chart>
            </v-tab-item>
            <v-tab-item value="total">
                <line-chart :data="postMap(hastaLimite)" :messages="{empty: 'No hay datos para esta fecha'}"></line-chart>
            </v-tab-item>
        </v-tabs-items>
    </chart-card>
</template>


<script>
import ChartCard from './ChartCard.vue'
import ChartMixin from './ChartMixin.js'

    export default {
        components: {ChartCard},
        name: "SimpleLine",  
        mixins: [ChartMixin],
        props: ['id'],
        data: function() {
            return {
                tab: null
            }
        },
        computed: {
            chartData() {
                let allData = []
                this.chartMeta.archivos.forEach((archivo, i) => {
                    let data = {
                        "name": this.chartMeta.nombreArchivos[i],
                        "data": this.$store.getters.conseguirDatos(archivo)
                    };
                    allData.push(data);
                });
                return allData
            },
        },
        methods: {
            postMap(allData) {
                return allData.map(x => {
                    let z = {}
                    x.data.forEach(y => {
                        z[y.date] = y.c
                    })
                    return {
                        "name": x.name,
                        "type": x.type,
                        "data": z
                    }
                })
            }
        }
    }
</script>