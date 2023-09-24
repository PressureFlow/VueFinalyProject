import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './components/views/HomeView.vue'
import SettingView from './components/views/Settings/SettingView.vue'
import SettingProfileView from './components/views/Settings/SettingProfileView.vue'
import UserView from './components/views/UserView.vue'
import NotFoundView from './components/views/Error/NotFoundView.vue'
import ButtonCounter from './components/views/Counter/ButtonCounter.vue'
import CheckStatus from './components/CheckStatus.vue'

const router = createRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingView,
        children: [{
            path: 'profile',
            name: 'settings-profile',
            component: SettingProfileView,
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView
    },
    {
        path: '/:pathMath(.*)*',
        name: '404',
        component: NotFoundView
    },
    {
        path: '/counter',
        name: 'counter',
        component: ButtonCounter
    },
    {
        path: '/status',
        name: 'status',
        component: CheckStatus
    }
    ],
    history: createWebHistory()
})

const isAuthenticated = false

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isAuthenticated) {
        return {
            name: 'home'
        }
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
