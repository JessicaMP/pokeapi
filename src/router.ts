import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./pages/Welcome.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Cart from "./pages/Cart.vue";
import List from "./pages/List.vue";

const routes = [
    {
        path: "/",
        name: "welcome",
        component: Welcome
    },
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    },
    {
        path: "/list",
        name: "list",
        component: List
    }
]

const router = createRouter({
    history: createWebHistory("/pokemons/"),
    routes
})

export default router;