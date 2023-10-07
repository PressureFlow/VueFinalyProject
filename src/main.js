import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomeView from './components//HomePage.vue'
import NotFoundPage from './components/Error/NotFoundPage.vue'
import ChatPage from './components/Screens/Chats/ChatPage.vue'
import TeamAPI from './components/Screens/API/TeamAPI.vue'
import ListChat from './components/Screens/Chats/ListChat.vue'
import NewChat from './components/Screens/Chats/NewChat.vue'
import PlayersAPI from './components/Screens/API/PlayersAPI'


 
const router = createRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    
    {
        path: '/:pathMath(.*)*',
        name: '404',
        component: NotFoundPage
    },
    {
        path: '/chat',
        name: 'chat',
        component: ChatPage
    },
    {
        path: '/team',
        name: 'TestAPI',
        component: TeamAPI
    },
    {
        path: '/chat/list',
        name: 'chatList',
        component: ListChat
    },
    {
        path: '/chat/list/:id',
        name: 'newChat',
        component: NewChat
    },
    {
        path: '/players',
        name: 'playersAPI',
        component: PlayersAPI
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

    







