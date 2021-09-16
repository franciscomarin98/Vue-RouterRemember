import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "ListBundle" */  '../modules/pokemon/views/List')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "AboutBundle" */  '../modules/pokemon/views/About')
    },
    {
        path: '/pokemon-detail/:id',
        name: 'Pokemon',
        component: () => import(/* webpackChunkName: "PokemonBundle" */ '../modules/pokemon/views/Pokemon'),
        props: (route) => {
            const pokemonId = Number(route.params.id)
            return isNaN(pokemonId) ? {id: 1} : {id: pokemonId}
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        //redirect: '/'
        component: () => import(/*  webpackChunkName: "NotFoundBundle" */ '../modules/shared/views/NotFound')
    }
]

const router = createRouter({
    "history": createWebHashHistory(),
    routes
})

export default router;