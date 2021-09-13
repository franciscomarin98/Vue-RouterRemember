<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">
        Update name
    </button>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            name: 'Francisco'
        }
    },
    methods: {
        onChangeName() {
            this.name = 'Joel'
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        //Aquí se recomienda hacer HTTP REQUEST
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    }

}
</script>

<style scoped>

</style>