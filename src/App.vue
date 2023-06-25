<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/info">Load</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>
<style></style>