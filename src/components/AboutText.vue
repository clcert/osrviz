<template>
<div>
    <p>El <a href="https://www.clcert.cl">Laboratorio de Criptografía Aplicada y Ciberseguridad</a> (CLCERT) del <a href="https://www.dcc.uchile.cl">Depto. de Ciencias de la Computación</a> de la <a href="https://www.uchile.cl">Universidad de Chile</a> se encuentra realizando un <b>escaneo activo sobre los dispositivos conectados a la red chilena</b> con fines estadísticos.</p>

    <h2 class="ma-6">Preguntas frecuentes</h2>

    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>¿En qué consiste el estudio?</v-expansion-panel-header>
            <v-expansion-panel-content>
                En el marco de este estudio, todos los equipos con IP publica asociados a Chile, son analizados a través de paquetes <i>TCP-SYN-ACK</i>. Este proceso ha sido diseñado para <b>no interferir con el normal funcionamiento de las redes estudiadas</b>. Este estudio nos permite <b>identificar vulnerabilidades en la red chilena y notificar a los afectados de forma preventiva.</b>
            </v-expansion-panel-content>
        </v-expansion-panel>
                <v-expansion-panel>
            <v-expansion-panel-header>Mis sistemas de seguridad detectaron que en el escaneo se intentó explotar la vulnerabilidad "Heartbleed". ¿Por qué pasó eso?</v-expansion-panel-header>
            <v-expansion-panel-content>
                Dentro de la batería de escaneos que realizamos, se encuentra el escaneo de equipos vulnerables a <i>Heartbleed</i>. Si bien para detectar la presencia de esta vulnerabilidad es necesario emular el comportamiento de un atacante, <b>no se extraen ni se guardan datos sensibles de las máquinas escaneadas.</b>
            </v-expansion-panel-content>
        </v-expansion-panel>
                <v-expansion-panel>
            <v-expansion-panel-header>¿Qué debo hacer si deseo excluir los equipos en mis redes del estudio?</v-expansion-panel-header>
            <v-expansion-panel-content>
                Si de todos modos desea que sus equipos sean excluidos de este estudio, envíenos un mensaje a <a href="mailto:scan@clcert.cl">nuestro e-mail</a> indicando las IPs que desea excluir, de forma de no revisarlas en futuros escaneos.
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</div>
</template>

<script>
    export default {
        name: "AboutText",
    }
</script>