
<template>
    <form @submit.prevent="signUp">
    <h2>SignUp</h2>    
        <input type="text" placeholder="Username" required v-model="username">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
        <button  class="btn">SignUp</button>
    </form>
</template>


<script>
import { auth } from '../RegForm/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'




export default {
    emits: ['loggedIn'],
    data() {
        return {
            username: '',
            email: '', 
            password: ''
        }
    },
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: this.username
                    })
                    .then(() => {
                        this.$emit('loggedIn')
                    })
                })
                
        },
    }
}
</script>