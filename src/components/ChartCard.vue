<template>
<v-col cols="12">
    <v-card
        elevation="2"
        class="mx-auto"
        outlined
    >
        <v-card-title>[{{type}}] {{title}}</v-card-title>
        <v-card-subtitle>{{description}}</v-card-subtitle>
        <slot/>
                <v-card-actions>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-icon
                        color="white"
                        v-bind="attrs"
                        v-on="on"
                    >
                        mdi-download
                    </v-icon>
                    Descargar datos
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item  v-for="(file, i) in files" :key="file">
                        <v-list-item-title> <a :href="`/data/${file}.csv`">Descargar Archivo {{i+1}}</a></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-actions>
    </v-card>
</v-col>  
</template>

<script lang="ts">
    export default {
        name: "ChartCard",
        props: ['type', 'title', 'description', 'files'],
    }
</script>