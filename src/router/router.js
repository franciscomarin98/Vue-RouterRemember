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
    //DBZ Layout
    {
        path: '/dbz',
        name: 'DBZ',
        component: () => import(/*webpackChunkName: "DBZLayout"*/ '../modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'Characters',
                component: () => import('../modules/dbz/views/Characters')
            },
            {
                path: 'about',
                name: 'DBZAbout',
                component: () => import('../modules/dbz/views/About')
            },
            {
                path: '',
                redirect: {name: 'Characters'}
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

// Guard Global - Síncrono
router.beforeEach((to, from, next) => {
    console.log({to, from, next})
    const random = Math.random() * 100;
    // console.log(random)
    if (random > 50) {
        console.log('Autenticado');
        next()
    } else {
        console.log('Bloqueado por el beforeEach guard', random);
        next({name: 'Home'})
    }
})

export default router;