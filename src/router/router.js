import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'List',
        component: () => import(/* webpackChunkName: "ListBundle" */  '../modules/pokemon/views/List')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "AboutBundle" */  '../modules/pokemon/views/About')
    },
    {
        path: '/id',
        name: 'Pokemon',
        component: () => import(/* webpackChunkName: "PokemonBundle" */ '../modules/pokemon/views/Pokemon')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/*  webpackChunkName: "NotFoundBundle" */ '../modules/shared/views/NotFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;