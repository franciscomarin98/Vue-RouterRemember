<template>
    <a v-if="isExternaLink" :href="link.to">{{ link.name }}</a>
    <router-link
        v-else
        :to="route"
        v-slot="{isExactActive}"
    >
        <a :class="isExactActive ? 'active' : 'inactive'">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    name: "CustomLink",
    props: {
        link: {
            type: Object,
            required: true
        },
    },
    computed: {
        isExternaLink() {
            return this.link.to.startsWith('http');
        },
        route() {
            return this.link.id === undefined
                ? {name: this.link.to}
                : {name: this.link.to, params: {id: this.link.id}}
        }
    },

}
</script>

<style scoped>
a.active {
    color: #42b983;
}

a.inactive {
    color: #2c3e50;
}
</style>