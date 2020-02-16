import Vue from 'vue'
import Router from 'vue-router'
import Bootstrap from 'bootstrap'
import Animate from 'animate.css'
import Home from '@/components/Home'
import Login from '@/components/pages/Login'
import Registration from '@/components/pages/Registration'

Vue.use(Router, Bootstrap, Animate)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        }
    ]
})
