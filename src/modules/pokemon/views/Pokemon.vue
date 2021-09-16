<template>
    <h1>Pokemon # {{ id }}</h1>
    <template v-if="pokemon">
        <img :src="pokemon.sprites.front_default">
    </template>
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
            pokemon: null
        }
    },
    methods: {
        async getPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
                this.pokemon = await response.json();
                console.log(this.pokemon)
            } catch (err) {
                await this.$router.push({name: 'NotFound'});
                console.log('Redireccionado, no se encontró el pokemon')
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    },
    created() {
        //const {pokemonId} = this.$route.params
        //console.log(pokemonId)
        console.log(this.$attrs)
        this.getPokemon();
    }
}
</script>

<style scoped>
    img{
        height: 100px;
        width: 100px;
    }
</style>