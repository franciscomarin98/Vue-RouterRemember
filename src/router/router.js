import Pokemon from "../modules/pokemon/views/Pokemon";
import About from "../modules/pokemon/views/About";
import List from "../modules/pokemon/views/List";
import {createRouter, createWebHashHistory} from "vue-router";
import NotFound from "../modules/shared/views/NotFound";


const routes = [
    {
        path: '/', component: List
    },
    {
        path: '/about', component: About
    },
    {
        path: '/id', component: Pokemon
    },
    {
        path: '/:pathMatch(.*)*', component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;