<template>
    <h1>Pokemon # {{ id }}</h1>
</template>

<script>
export default {
    name: "Pokemon",
    props: {
        id: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            //id: this.$route.params.pokemonId
        }
    },
    created() {
        //const {pokemonId} = this.$route.params
        //console.log(pokemonId)
        console.log(this.$attrs)
    }
}
</script>

<style scoped>

</style>