<template>
    <div>
        <router-link :to="{name:'Home'}">Pokemon List</router-link>
        <router-link :to="{name: 'Pokemon', params: {id: 500}}">Pokemon por id</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar"
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

a.router-link-active.router-link-exact-active {
    color: #42b983;
    text-decoration: underline;
}
</style>