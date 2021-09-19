<template>
    <a v-if="isExternaLink" :href="link.to">{{ link.name }}</a>
    <router-link
        v-else
        :to="link.to"
        v-slot="{href, isExactActive}"
    >
        <a :href="href" :class="isExactActive ? 'active' : 'inactive'">{{ link.name }}</a>
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