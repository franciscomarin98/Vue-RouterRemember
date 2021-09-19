import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/pokemon-layout'
    },
    {
        path: '/pokemon-layout',
        name: 'PokemonLayout',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "ListBundle" */  '../modules/pokemon/views/List')
            }, {
                path: 'about',
                name: 'About',
                component: () => import(/* webpackChunkName: "AboutBundle" */  '../modules/pokemon/views/About')
            },
            {
                path: 'pokemon-detail/:id',
                name: 'Pokemon',
                component: () => import(/* webpackChunkName: "PokemonBundle" */ '../modules/pokemon/views/Pokemon'),
                props: (route) => {
                    const pokemonId = Number(route.params.id)
                    return isNaN(pokemonId) ? {id: 1} : {id: pokemonId}
                }
            },
            {
                path: '',
                redirect: {name: 'Home'}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/*  webpackChunkName: "NotFoundBundle" */ '../modules/shared/views/NotFound')
    }
]

const router = createRouter({
    "history": createWebHashHistory(),
    routes
})

export default router;