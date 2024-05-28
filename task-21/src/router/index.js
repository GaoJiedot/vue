import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Movies from "../components/Movies.vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import AboutTab1 from "../components/AboutTab1.vue";
import AboutTab2 from "../components/AboutTab2.vue";
import MovieDetails from "../components/MovieDetails.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        children: [
            {
                path: 'tab1',
                component: AboutTab1
            },
            {
                path: 'tab2',
                component: AboutTab2
            }
        ]
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
        children: [
            {
                path: ':id',
                component: MovieDetails
            }
        ]
    }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;