<template>
    <div class="pokemon-layout">
        <p>Pokemon Layout</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "PokemonLayout"
}
</script>

<style scoped>
.pokemon-layout {
    background-color: burlywood;
}
</style>