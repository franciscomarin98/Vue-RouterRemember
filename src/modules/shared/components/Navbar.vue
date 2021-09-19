<template>
    <div>
        <!--<router-link :to="{name:'Home'}">Pokemon List</router-link>-->
        <!--<router-link :to="{name: 'Pokemon', params: {id: 500}}">Pokemon por id</router-link>-->
        <!--<router-link :to="{name: 'About'}">About</router-link>-->
        <CustomLink v-for="link in links" :key="link.name" :link="link"/>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: "Navbar",
    data() {
        return {
            links: [
                {
                    to: 'Home', name: 'Pokemons',
                },
                {
                    to: 'Pokemon', name: 'Por ID', id: 151
                },
                {
                    to: 'About', name: 'About',
                },
                {
                    to: 'Characters', name: 'Characters'
                },
                {
                    to: 'DBZAbout', name: 'DBZ-About'
                },
                {
                    to: 'https://google.com', name: 'Google',
                }
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

a {
    text-decoration: none;
}

/*a.router-link-active.router-link-exact-active {*/
/*    color: #42b983;*/
/*}*/
</style>