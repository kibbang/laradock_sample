import Router from 'vue-router'
import Home from './pages/Home.vue'

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: Home,
            component: Home
        }
    ]
})