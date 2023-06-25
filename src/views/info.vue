<script lang="ts">
import json from '../json/data.json'
export default {
    data() {
        return {
            jsonData: json
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container">
        <table border="1">
            <tr v-for="data in jsonData">
                <td>ID: {{ data.stateid }}</td>
                <td class="special">Name: {{ data.name }}</td>
                <td>Pop: {{ new Intl.NumberFormat('se-SE').format(+data.population) }}</td>
                <td style="padding: .1em"><img :src="data.flag" /></td>
            </tr>
        </table>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

td {
    padding: .3em;
    background-color: rgb(41, 41, 41);
}

table {
    border-collapse: collapse;
    padding: .3em;
    margin: 0 auto;
}

#app {
    display: flex;
    justify-content: center;
}
</style>
