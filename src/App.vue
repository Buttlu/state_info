<script lang="ts">
import json from './json/data.json' //ignore, it works
export default {
    data() {
        return {
            jsonData: json
        }
    }
}
</script>

<template>
    <div class="container">
        <table border="1">
            <tr v-for="data in jsonData">
                <td>ID: {{ data.stateid }}</td>
                <td>Name: {{ data.name }}</td>
                <td>Pop: {{ new Intl.NumberFormat('se-SE').format(+data.population) }}</td>
                <td style="padding: .1em"><img :src="data.flag" /></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

td {
    padding: .3em;
}

table {
    border-collapse: collapse;
    padding: .3em;
    margin: 0 auto;
}
</style>
<style>
#app {
    display: flex;
    justify-content: center;
}
</style>
