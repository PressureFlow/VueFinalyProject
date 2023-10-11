<template>
    <form @submit.prevent="login">
    <h2>Login</h2>    
        <input type="text" placeholder="Username" required v-model="username">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
        <button class="btn">Log in</button>
    </form>
</template>

<script>
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '', 
            password: '',
            username: '',

        }
    },

            
        
    methods: {
        login() {
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$emit('loggedIn')
                })
                
                localStorage.setItem("welcomeMessage ", true)
                

                if (this.username !== ""){
                    this.isLoggedIn = true;

                    localStorage.setItem("isLoggedIn ", true)
                    localStorage.setItem("username", this.username)

                    // this.$router.push({
                    //     name: 'chat',
                    //     query: {
                    //         username: this.username
                    //     }
                    // })
            }
            
        }
    }
}
</script>